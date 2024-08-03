// 4-update_grade_by_city.js

/**
 * Updates the grades of students from a specific city.
 * @param {Array} students - The list of student objects.
 * @param {String} city - The city to filter students by.
 * @param {Array} newGrades - The array of objects with studentId and grade.
 * @returns {Array} An array of student objects with updated grades.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((std) => std.location === city).map((std) => ({ ...std, grade: newGrades.filter((g) => g.studentId === std.id).map((g) => g.grade)[0] || 'N/A' }));
}
