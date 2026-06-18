import { ApiError } from './ApiError';
import type { ApiRequestOptions } from './ApiRequestOptions';
import type { ApiResult } from './ApiResult';
import { CancelablePromise } from './CancelablePromise';
import type { OnCancel } from './CancelablePromise';
import type { OpenAPIConfig } from './OpenAPI';

export const isDefined = <T>(
  value: T | null | undefined,
): value is Exclude<T, null | undefined> => {
  return value !== undefined && value !== null;
};

export const isString = (value: unknown): value is string => {
  return typeof value === 'string';
};

export const isStringWithValue = (value: unknown): value is string => {
  return isString(value) && value !== '';
};

export const isBlob = (value: unknown): value is Blob => {
  return value instanceof Blob;
};

export const isFormData = (value: unknown): value is FormData => {
  return value instanceof FormData;
};

export const isSuccess = (status: number): boolean => {
  return status >= 200 && status < 300;
};

export const base64 = (str: string): string => {
  try {
    return btoa(str);
  } catch {
    return Buffer.from(str).toString('base64');
  }
};

export const getQueryString = (params: Record<string, unknown>): string => {
  const qs: string[] = [];

  const append = (key: string, value: unknown) => {
    qs.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
  };

  const process = (key: string, value: unknown) => {
    if (isDefined(value)) {
      if (Array.isArray(value)) {
        value.forEach((v) => {
          process(key, v);
        });
      } else if (typeof value === 'object') {
        Object.entries(value as Record<string, unknown>).forEach(([k, v]) => {
          process(`${key}[${k}]`, v);
        });
      } else {
        append(key, value);
      }
    }
  };

  Object.entries(params).forEach(([key, value]) => {
    process(key, value);
  });

  if (qs.length > 0) {
    return `?${qs.join('&')}`;
  }

  return '';
};

const getUrl = (config: OpenAPIConfig, options: ApiRequestOptions): string => {
  const encoder = config.ENCODE_PATH ?? encodeURI;

  const path = options.url
    .replace('{api-version}', config.VERSION)
    .replace(/{(.*?)}/g, (substring: string, group: string) => {
      if (Object.prototype.hasOwnProperty.call(options.path ?? {}, group)) {
        return encoder(String((options.path as Record<string, unknown>)[group]));
      }
      return substring;
    });

  const url = `${config.BASE}${path}`;
  if (options.query) {
    return `${url}${getQueryString(options.query)}`;
  }
  return url;
};

export const getFormData = (options: ApiRequestOptions): FormData | undefined => {
  if (options.formData) {
    const formData = new FormData();

    const process = (key: string, value: unknown) => {
      if (isString(value) || isBlob(value)) {
        formData.append(key, value as string | Blob);
      } else {
        formData.append(key, JSON.stringify(value));
      }
    };

    Object.entries(options.formData)
      .filter(([, value]) => isDefined(value))
      .forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((v) => process(key, v));
        } else {
          process(key, value);
        }
      });

    return formData;
  }
  return undefined;
};

type Resolver<T> = (options: ApiRequestOptions) => Promise<T>;

export const resolve = async <T>(
  options: ApiRequestOptions,
  resolver?: T | Resolver<T>,
): Promise<T | undefined> => {
  if (typeof resolver === 'function') {
    return (resolver as Resolver<T>)(options);
  }
  return resolver;
};

export const getHeaders = async (
  config: OpenAPIConfig,
  options: ApiRequestOptions,
): Promise<Record<string, string>> => {
  const [token, username, password, additionalHeaders] = await Promise.all([
    resolve(options, config.TOKEN),
    resolve(options, config.USERNAME),
    resolve(options, config.PASSWORD),
    resolve(options, config.HEADERS),
  ]);

  const headers = Object.entries({
    Accept: 'application/json',
    ...additionalHeaders,
    ...options.headers,
  })
    .filter(([, value]) => isDefined(value))
    .reduce(
      (acc, [key, value]) => ({ ...acc, [key]: String(value) }),
      {} as Record<string, string>,
    );

  if (isStringWithValue(token)) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  if (isStringWithValue(username) && isStringWithValue(password)) {
    headers['Authorization'] = `Basic ${base64(`${username}:${password}`)}`;
  }

  if (options.body !== undefined) {
    if (options.mediaType) {
      headers['Content-Type'] = options.mediaType;
    } else if (isBlob(options.body)) {
      headers['Content-Type'] = (options.body as Blob).type || 'application/octet-stream';
    } else if (isString(options.body)) {
      headers['Content-Type'] = 'text/plain';
    } else if (!isFormData(options.body)) {
      headers['Content-Type'] = 'application/json';
    }
  }

  return headers;
};

export const getRequestBody = (options: ApiRequestOptions): unknown => {
  return options.body;
};

type FetchResult<T> = {
  status: number;
  statusText: string;
  headers: Record<string, string>;
  data: T;
};

export const sendRequest = async <T>(
  config: OpenAPIConfig,
  options: ApiRequestOptions,
  url: string,
  body: unknown,
  formData: FormData | undefined,
  headers: Record<string, string>,
  onCancel: OnCancel,
): Promise<FetchResult<T>> => {
  const controller = new AbortController();
  onCancel(() => controller.abort());

  const headersInit = { ...headers };
  if (formData) {
    delete headersInit['Content-Type'];
  }

  let fetchBody: BodyInit | undefined;
  if (formData) {
    fetchBody = formData;
  } else if (body !== undefined) {
    fetchBody = isString(body) ? (body as string) : JSON.stringify(body);
  }

  const response = await fetch(url, {
    method: options.method,
    headers: headersInit,
    body: fetchBody,
    credentials: config.WITH_CREDENTIALS ? 'include' : 'omit',
    signal: controller.signal,
  });

  const responseHeaders: Record<string, string> = {};
  response.headers.forEach((value, key) => {
    responseHeaders[key] = value;
  });

  let data: T;
  if (response.status === 204) {
    data = undefined as unknown as T;
  } else {
    const contentType = response.headers.get('content-type') ?? '';
    if (contentType.includes('application/json')) {
      data = (await response.json()) as T;
    } else {
      data = (await response.text()) as unknown as T;
    }
  }

  return {
    status: response.status,
    statusText: response.statusText,
    headers: responseHeaders,
    data,
  };
};

export const getResponseHeader = (
  response: FetchResult<unknown>,
  responseHeader?: string,
): string | undefined => {
  if (responseHeader) {
    const content = response.headers[responseHeader.toLowerCase()];
    if (isString(content)) {
      return content;
    }
  }
  return undefined;
};

export const getResponseBody = <T>(response: FetchResult<T>): T | undefined => {
  if (response.status !== 204) {
    return response.data;
  }
  return undefined;
};

export const catchErrorCodes = (options: ApiRequestOptions, result: ApiResult): void => {
  const errors: Record<number, string> = {
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not Found',
    500: 'Internal Server Error',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    ...options.errors,
  };

  const error = errors[result.status];
  if (error) {
    throw new ApiError(options, result, error);
  }

  if (!result.ok) {
    const errorBody = (() => {
      try {
        return JSON.stringify(result.body, null, 2);
      } catch {
        return undefined;
      }
    })();

    throw new ApiError(
      options,
      result,
      `Generic Error: status: ${result.status ?? 'unknown'}; status text: ${result.statusText ?? 'unknown'}; body: ${errorBody}`,
    );
  }
};

/**
 * Request method
 * @param config The OpenAPI configuration object
 * @param options The request options from the service
 * @returns CancelablePromise<T>
 * @throws ApiError
 */
export const request = <T>(
  config: OpenAPIConfig,
  options: ApiRequestOptions,
): CancelablePromise<T> => {
  return new CancelablePromise(async (resolve, reject, onCancel) => {
    try {
      if (config.RATE_LIMITER) {
        await config.RATE_LIMITER.waitIfNeeded();
      }

      const url = getUrl(config, options);
      const formData = getFormData(options);
      const body = getRequestBody(options);
      const headers = await getHeaders(config, options);

      if (!onCancel.isCancelled) {
        const response = await sendRequest<T>(
          config,
          options,
          url,
          body,
          formData,
          headers,
          onCancel,
        );

        if (config.RATE_LIMITER) {
          config.RATE_LIMITER.recordRequest(response.headers);
        }

        const responseBody = getResponseBody(response);
        const responseHeader = getResponseHeader(response, options.responseHeader);

        const result: ApiResult = {
          url,
          ok: isSuccess(response.status),
          status: response.status,
          statusText: response.statusText,
          body: responseHeader ?? responseBody,
        };

        catchErrorCodes(options, result);

        resolve(result.body);
      }
    } catch (error) {
      reject(error);
    }
  });
};
