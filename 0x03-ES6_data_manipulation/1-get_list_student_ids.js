// 1-get_list_student_ids.js

/**
 * Extracts the ids from a list of student objects.
 * @param {Array} students - The list of student objects.
 * @returns {Array} An array of student ids or an empty array if input is not an array.
 */
 export default function getListStudentIds(students) {
   if (!Array.isArray(students)) {
     return [];
   }
   return students.map((element) => element.id);
 }
