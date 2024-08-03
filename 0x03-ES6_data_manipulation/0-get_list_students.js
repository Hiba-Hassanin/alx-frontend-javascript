// 0-get_list_students.js

/**
 * Returns a list of students with their details.
 * @returns {Array} An array of student objects.
 */
export default function getListStudents() {
  const students = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];

  return students;
}