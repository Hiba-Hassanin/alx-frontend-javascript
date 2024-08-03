// 100-weak.js

// Export a const instance of WeakMap
export const weakMap = new WeakMap();

/**
 * Tracks the number of times an endpoint is queried.
 * @param {Object} endpoint - The endpoint object with protocol and name.
 * @throws {Error} Throws an error if the query count for an endpoint reaches 5 or more.
 */
let count = 1;

export function queryAPI(endPoint) {
  weakMap.set(endPoint, count);
  count += 1;
  const queryCount = weakMap.get(endPoint);
  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}
