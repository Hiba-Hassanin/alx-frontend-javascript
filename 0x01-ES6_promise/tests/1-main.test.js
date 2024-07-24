// 1-main.test.js

import getFullResponseFromAPI from './1-promise';

test('getFullResponseFromAPI resolves when success is true', () => {
  return expect(getFullResponseFromAPI(true)).resolves.toEqual({
    status: 200,
    body: 'Success',
  });
});

test('getFullResponseFromAPI rejects when success is false', () => {
  return expect(getFullResponseFromAPI(false)).rejects.toThrow('The fake API is not working currently');
});
