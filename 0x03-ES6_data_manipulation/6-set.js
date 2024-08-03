// 6-set.js

/**
 * Creates a Set from an array.
 * @param {Array} array - The array to convert into a Set.
 * @returns {Set} A Set containing the unique values from the array.
 */
export default function setFromArray(duplicatedArray) {
  const unique = new Set(duplicatedArray);
  return unique;
}