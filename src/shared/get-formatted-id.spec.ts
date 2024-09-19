import { describe, it, expect } from 'vitest';
import { getFormattedId } from './get-formatted-id';

describe('getFormattedId()', () => {
  it('should return a formatted id', () => {
    const value = crypto.randomUUID();
    const result = getFormattedId({ value });

    expect(result).toBe(`${value}-id`);
  });

  it('should throw error when params are not defined', () => {
    // @ts-ignore
    expect(() => getFormattedId(undefined)).toThrowError('Params cannot be undefined.');
  });

  it('should throw error when value is not a string', () => {
    // @ts-ignore
    expect(() => getFormattedId({ value: undefined })).toThrowError('Value must be a string.');
  });
});
