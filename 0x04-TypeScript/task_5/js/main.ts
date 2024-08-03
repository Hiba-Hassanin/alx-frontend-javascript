// Define interfaces with brand properties
interface MajorCredits {
  credits: number;
  __brand: 'MajorCredits'; // Brand property for MajorCredits
}

interface MinorCredits {
  credits: number;
  __brand: 'MinorCredits'; // Brand property for MinorCredits
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MajorCredits'
  };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MinorCredits'
  };
}

// Example usage
const majorSubject1: MajorCredits = { credits: 30, __brand: 'MajorCredits' };
const majorSubject2: MajorCredits = { credits: 20, __brand: 'MajorCredits' };

const minorSubject1: MinorCredits = { credits: 15, __brand: 'MinorCredits' };
const minorSubject2: MinorCredits = { credits: 10, __brand: 'MinorCredits' };

const totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
const totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);

console.log('Total Major Credits:', totalMajorCredits.credits); // 50
console.log('Total Minor Credits:', totalMinorCredits.credits); // 25
