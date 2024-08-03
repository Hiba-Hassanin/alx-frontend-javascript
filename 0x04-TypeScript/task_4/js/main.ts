import { Cpp } from './subjects/Cpp';
import { Java } from './subjects/Java';
import { React } from './subjects/React';
import { Teacher } from './subjects/Teacher';

// Create a Teacher object with experienceTeachingC set to 10
const cTeacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10
};

// Create and export constants for each subject
export const cpp = new Cpp(cTeacher);
export const java = new Java(cTeacher);
export const react = new React(cTeacher);

// For Cpp subject
console.log('C++');
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// For Java subject
console.log('Java');
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// For React subject
console.log('React');
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
