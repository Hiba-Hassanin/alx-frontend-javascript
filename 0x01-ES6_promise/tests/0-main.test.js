// tests/0-main.test.js

const getResponseFromAPI = require('../0-promise');

test('getResponseFromAPI should return a Promise', () => {
  const response = getResponseFromAPI();
  expect(response instanceof Promise).toBe(true);
});
