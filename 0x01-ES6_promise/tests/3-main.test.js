// 3-main.test.js

import handleProfileSignup from './3-all';
import { uploadPhoto, createUser } from './utils';

jest.mock('./utils');

test('handleProfileSignup logs correct output on success', () => {
  uploadPhoto.mockResolvedValue({ body: 'photo-profile-1' });
  createUser.mockResolvedValue({ firstName: 'Guillaume', lastName: 'Salva' });

  const consoleSpy = jest.spyOn(console, 'log');
  return handleProfileSignup().then(() => {
    expect(consoleSpy).toHaveBeenCalledWith('photo-profile-1 Guillaume Salva');
    consoleSpy.mockRestore();
  });
});

test('handleProfileSignup logs error message on failure', () => {
  uploadPhoto.mockRejectedValue(new Error());
  createUser.mockRejectedValue(new Error());

  const consoleSpy = jest.spyOn(console, 'log');
  return handleProfileSignup().catch(() => {
    expect(consoleSpy).toHaveBeenCalledWith('Signup system offline');
    consoleSpy.mockRestore();
  });
});

