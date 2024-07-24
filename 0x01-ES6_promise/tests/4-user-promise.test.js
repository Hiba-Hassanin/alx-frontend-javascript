// 4-user-promise.test.js

import signUpUser from './4-user-promise';

test('signUpUser resolves with correct values', () => {
  return expect(signUpUser('Bob', 'Dylan')).resolves.toEqual({
    firstName: 'Bob',
    lastName: 'Dylan',
  });
});
