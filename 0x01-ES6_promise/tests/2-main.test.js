// 2-main.test.js

import handleResponseFromAPI from './2-then';

test('handleResponseFromAPI handles resolved promise correctly', () => {
  const promise = Promise.resolve();
  return handleResponseFromAPI(promise).then(response => {
    expect(response).toEqual({
      status: 200,
      body: 'success',
    });
  });
});

test('handleResponseFromAPI handles rejected promise correctly', () => {
  const promise = Promise.reject();
  return handleResponseFromAPI(promise).catch(error => {
    expect(error).toEqual(new Error());
  });
});
