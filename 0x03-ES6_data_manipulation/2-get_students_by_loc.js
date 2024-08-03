// 2-get_students_by_loc.js

/**
 * Filters students based on their location.
 * @param {Array} students - The list of student objects.
 * @param {String} city - The city to filter students by.
 * @returns {Array} An array of student objects located in the specified city.
 */
export default function getStudentsByLocation(lst, city) {
  return lst.filter((obj) => obj.location === city);
}
