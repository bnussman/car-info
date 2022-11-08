import { expect, test } from 'vitest'
import { getMakes, getModels } from '.';

test('getMakes()', () => {
  expect(getMakes()).toContain("Toyota");
});

test('getModels("Toyota")', () => {
    expect(getModels("Toyota")).toContain("Tundra");
});

test('getModels("Unknown")', () => {
    expect(getModels("Unknown")).toEqual([]);
});