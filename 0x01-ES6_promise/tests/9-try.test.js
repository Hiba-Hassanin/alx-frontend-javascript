// 9-try.test.js

import guardrail from './9-try';
import divideFunction from './8-try'; // Adjust the import path as necessary

// Mocking the divideFunction for testing
jest.mock('./8-try', () => ({
  divideFunction: jest.fn(),
}));

test('guardrail processes successful function call', () => {
  // Setup the mock function to resolve successfully
  divideFunction.mockReturnValue(5);

  const result = guardrail(() => divideFunction(10, 2));
  expect(result).toEqual([5, 'Guardrail was processed']);
});

test('guardrail processes function call with error', () => {
  // Setup the mock function to throw an error
  divideFunction.mockImplementation(() => {
    throw new Error('cannot divide by 0');
  });

  const result = guardrail(() => divideFunction(10, 0));
  expect(result).toEqual(['Error: cannot divide by 0', 'Guardrail was processed']);
});
