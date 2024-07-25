// 5-photo-reject.test.js

import uploadPhoto from './5-photo-reject';

test('uploadPhoto rejects with correct error message', () => {
  return expect(uploadPhoto('guillaume.jpg')).rejects.toThrow('guillaume.jpg cannot be processed');
});
