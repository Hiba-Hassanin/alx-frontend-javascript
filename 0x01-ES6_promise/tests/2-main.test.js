// 2-main.test.js

import handleResponseFromAPI from './2-then';

test('handleResponseFromAPI resolves correctly', () => {
  const promise = Promise.resolve();
  const consoleSpy = jest.spyOn(console, 'log');
  return handleResponseFromAPI(promise).then(response => {
    expect(response).toEqual({ status: 200, body: 'success' });
    expect(consoleSpy).toHaveBeenCalledWith('Got a response from the API');
    consoleSpy.mockRestore();
  });
});

test('handleResponseFromAPI rejects correctly', () => {
  const promise = Promise.reject();
  const consoleSpy = jest.spyOn(console, 'log');
  return handleResponseFromAPI(promise).catch(error => {
    expect(error).toEqual(new Error());
    expect(consoleSpy).toHaveBeenCalledWith('Got a response from the API');
    consoleSpy.mockRestore();
  });
});
