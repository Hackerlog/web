import React from 'react';
import { fireEvent } from 'react-testing-library';

import renderWithRouter from '../utils/test-utils';
import Login from './Login';

describe('<Login />', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('Should render the login page', () => {
    const { getByTestId } = renderWithRouter(<Login />);
    expect(getByTestId('login-form')).toBeDefined();
  });

  it('should call the login URL', () => {
    const { getByTestId } = renderWithRouter(<Login />);
    const emailInput = getByTestId('login-email-input');
    const passwordInput = getByTestId('login-password-input');
    const form = getByTestId('login-form');

    emailInput.value = 'test@test.com';
    passwordInput.value = 'password';

    fireEvent.change(emailInput);
    fireEvent.change(passwordInput);
    fireEvent.submit(form);

    expect(fetch.mock.calls[0][0]).toMatch('/auth/login');
  });
});
