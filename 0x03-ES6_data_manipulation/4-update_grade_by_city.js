// 4-update_grade_by_city.js

/**
 * Updates the grades of students from a specific city.
 * @param {Array} students - The list of student objects.
 * @param {String} city - The city to filter students by.
 * @param {Array} newGrades - The array of objects with studentId and grade.
 * @returns {Array} An array of student objects with updated grades.
 */

 export default function updateStudentGradeByCity(students, city, newGrades) {
   const cityStudents = students.filter((student) => student.location === city);
   return cityStudents.map((student) => {
     const gradesFiltered = newGrades.filter((grade) => grade.studentId === student.id);
     if (gradesFiltered.length > 0) {
       return {
         ...student,
         grade: gradesFiltered[0].grade,
       };
     }
     return {
       ...student,
       grade: 'N/A',
     };
   });
 }
