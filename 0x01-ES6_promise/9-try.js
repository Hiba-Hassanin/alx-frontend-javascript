// 9-try.test.js

import guardrail from './9-try';
import divideFunction from './8-try'; // Assuming this function is already implemented

test('guardrail processes successful function call', () => {
  const result = guardrail(() => divideFunction(10, 2));
  expect(result).toEqual([5, 'Guardrail was processed']);
});

test('guardrail processes function call with error', () => {
  const result = guardrail(() => divideFunction(10, 0));
  expect(result).toEqual(['Error: cannot divide by 0', 'Guardrail was processed']);
});
