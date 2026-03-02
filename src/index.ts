import { data } from './data';

type Make = keyof typeof data;

/**
 * getModels
 * Returns all known models from a specific make of car.
 * This will return an empty array if the make is not known by this package.
 * @param make the name of a make of a car (for example Ford, Toyota, Honda)
 * @returns list of models
 */
export function getModels<T extends Make>(make: T): typeof data[T]['models'];
export function getModels(make: string): [];
export function getModels(make: string) {
  if (make in data) {
    return data[make as Make].models;
  }
  return [];
}

/**
 * getMakes
 * @returns an array of all of the known makes (for example Ford, Toyota, Honda)
 */
export function getMakes() {
  return Object.keys(data) as Make[];
}

export { data };
