import { jest } from '@jest/globals';
import { RateLimiter } from './RateLimiter';

describe('RateLimiter', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('deve ter limit padrão de 120', () => {
    const rl = new RateLimiter();
    expect(rl.limit).toBe(120);
  });

  it('deve aceitar limit personalizado no construtor', () => {
    const rl = new RateLimiter(60);
    expect(rl.limit).toBe(60);
  });

  it('waitIfNeeded resolve imediatamente quando abaixo do limite', async () => {
    const rl = new RateLimiter(5);
    for (let i = 0; i < 4; i++) rl.recordRequest();
    await expect(rl.waitIfNeeded()).resolves.toBeUndefined();
  });

  it('waitIfNeeded aguarda quando no limite', async () => {
    const rl = new RateLimiter(2);
    rl.recordRequest();
    rl.recordRequest();

    let resolved = false;
    const p = rl.waitIfNeeded().then(() => {
      resolved = true;
    });

    expect(resolved).toBe(false);
    jest.advanceTimersByTime(60_001);
    await p;
    expect(resolved).toBe(true);
  });

  it('updateFromHeaders deve atualizar o limite via x-ratelimit-limit', () => {
    const rl = new RateLimiter(60);
    rl.updateFromHeaders({ 'x-ratelimit-limit': '240' });
    expect(rl.limit).toBe(240);
  });

  it('updateFromHeaders deve aceitar x-limit-api como fallback', () => {
    const rl = new RateLimiter(60);
    rl.updateFromHeaders({ 'x-limit-api': '120' });
    expect(rl.limit).toBe(120);
  });

  it('updateFromHeaders ignora header inválido', () => {
    const rl = new RateLimiter(60);
    rl.updateFromHeaders({ 'x-ratelimit-limit': 'abc' });
    expect(rl.limit).toBe(60);
  });

  it('recordRequest atualiza o limite automaticamente', () => {
    const rl = new RateLimiter(60);
    rl.recordRequest({ 'x-ratelimit-limit': '120' });
    expect(rl.limit).toBe(120);
  });

  it('reset limpa timestamps e optcionalmente altera limite', () => {
    const rl = new RateLimiter(60);
    rl.recordRequest();
    rl.recordRequest();
    rl.reset(30);
    expect(rl.limit).toBe(30);
    // Agora deve passar imediatamente (timestamps limpos)
    const p = rl.waitIfNeeded();
    jest.runAllTimers();
    return expect(p).resolves.toBeUndefined();
  });

  it('evict descarta timestamps fora da janela de 60s', async () => {
    const rl = new RateLimiter(2);
    rl.recordRequest();
    rl.recordRequest();

    jest.advanceTimersByTime(61_000);

    // Após eviction, o limiter deve aceitar novos requests
    await expect(rl.waitIfNeeded()).resolves.toBeUndefined();
  });
});
