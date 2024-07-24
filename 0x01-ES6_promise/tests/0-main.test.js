// tests/0-main.test.js

import getResponseFromAPI from './0-promise';

test('getResponseFromAPI should return a Promise', () => {
  const response = getResponseFromAPI();
  expect(response instanceof Promise).toBe(true);
});
