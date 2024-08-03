// 10-update_uniq_items.js

/**
 * Updates the quantity of items in the map that have an initial quantity of 1 to 100.
 * @param {Map} map - The map of items to update.
 * @returns {Map} The updated map.
 * @throws {Error} Throws an error if the argument is not a map.
 */
export default function updateUniqueItems(map) {
  if (map instanceof Map) {
    for (const [key, value] of map) {
      if (value === 1) {
        map.set(key, 100);
      }
    }
  } else {
    throw new Error('Cannot process');
  }
  return map;
}
