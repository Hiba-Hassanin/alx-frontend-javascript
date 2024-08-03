// 1-get_list_student_ids.js

/**
 * Extracts the ids from a list of student objects.
 * @param {Array} students - The list of student objects.
 * @returns {Array} An array of student ids or an empty array if input is not an array.
 */
 function getListStudentIds(students) {
   // Check if the input is an array
   if (!Array.isArray(students)) {
     return [];
   }

   // Use map to extract ids from the array of student objects
   return students.map(student => student.id);
 }

 export default getListStudentIds;
