// 3-get_ids_sum.js

/**
 * Sums up all student ids from the list of students.
 * @param {Array} students - The list of student objects.
 * @returns {Number} The sum of all student ids.
 */
export default function getStudentIdsSum(lst) {
  return lst.reduce((counter, currentObj) => counter + currentObj.id, 0);
}
