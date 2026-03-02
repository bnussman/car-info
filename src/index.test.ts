import { getMakes, getModels } from './index';
import { describe, expect, test } from 'bun:test';

describe("getMakes", () => {
  test("returns many vehicle makes", () => {
    const makes = getMakes()

    expect(makes).toContain("Toyota");
    expect(makes).toContain("Honda");
    expect(makes).toContain("Ford");
  });
});

describe("getModels", () => {
  test("returns many vehicle models for a given make", () => {
    const models = getModels('Toyota')

    expect(models).toContain("Tacoma");
    expect(models).toContain("Tundra");
  });
});