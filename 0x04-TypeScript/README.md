# Learning TypeScript

## Resources
- [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [TypeScript documentation](https://www.typescriptlang.org/docs/)

## Learning Objectives
- Basic types in TypeScript
- Interfaces, Classes, and functions
- Working with the DOM and TypeScript
- Generic types
- Namespaces and declaration merging
- Using ambient namespaces to import external libraries
- Basic nominal typing with TypeScript

## Requirements
- Editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- Files must end with a new line
- Transpile on Ubuntu 18.04
- Check with `jest` (v24.9.*)
- Code should use the `.ts` extension and compile without warnings or errors
- Mandatory `README.md`

## Configuration Files
- `package.json`
- `.eslintrc.js`
- `tsconfig.json`
- `webpack.config.js`

## Tasks

### 0. Creating an interface for a student
Create an interface `Student` with `firstName`, `lastName`, `age`, and `location`. Create two students and render a table with their first names and locations.

### 1. Teacher Interface
Create a `Teacher` interface with `firstName`, `lastName`, `fullTimeEmployee`, `yearsOfExperience` (optional), `location`, and additional attributes.

### 2. Extending Teacher
Create a `Directors` interface extending `Teacher` with `numberOfReports`.

### 3. Printing Teachers
Write a function `printTeacher(firstName, lastName): string` that returns `firstInitial. lastName`. Create an interface for the function.

### 4. Student Class
Create a class `StudentClass` with `firstName` and `lastName` attributes, and methods `workOnHomework()` and `displayName()`.

### 5. Advanced Types
Create `DirectorInterface` and `TeacherInterface` with methods `workFromHome()`, `getCoffeeBreak()`, and `workTasks()`. Implement these in `Director` and `Teacher` classes. Write `createEmployee(salary): Employee`.

### 6. Employee Functions
Write `isDirector(employee): boolean` and `executeWork(employee): void`.

### 7. String Literal Types
Create a `Subjects` type (`"Math"` | `"History"`) and a function `teachClass(todayClass: Subjects): string`.

### 8. Ambient Namespaces
Create `RowID` and `RowElement` types. Declare types for `crud.js` functions and use them in `main.ts`.

### 9. Namespace & Declaration Merging
Create a `Subjects` namespace with `Teacher` interface, `Subject` class, and classes `Cpp`, `Java`, and `React`.

### 10. Update `main.ts`
Export constants `cpp`, `java`, and `react`, and a `Teacher` object `cTeacher`. Log requirements and available teachers for each subject.

### 11. Brand Convention & Nominal Typing
Create `MajorCredits` and `MinorCredits` interfaces with a `credits` property. Write `sumMajorCredits` and `sumMinorCredits` functions.

## Repository
- **GitHub repository**: [alx-frontend-javascript](https://github.com/yourusername/alx-frontend-javascript)
- **Directory**: `0x04-TypeScript`

## Author
Hiba Hassanin

---