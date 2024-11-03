import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from './Form';
import users from '../data/MOCK_DATA.json';

describe('Form Component', () => {
  test('renders authorization form by default', () => {
    render(<Form />);
    expect(screen.getByText(/Авторизація/i)).toBeInTheDocument();
  });

  test('toggles to registration form on link click', () => {
    render(<Form />);
    fireEvent.click(screen.getByText(/Немає акаунта\?/i));
    expect(screen.getByText(/Реєстрація/i)).toBeInTheDocument();
  });

  test('shows error message for incorrect login', () => {
    render(<Form />);
    fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: 'wrong@example.com' } });
    fireEvent.change(screen.getByLabelText(/Пароль:/i), { target: { value: 'wrongpassword' } });
    fireEvent.click(screen.getByRole('button', { name: /Увійти/i }));
    expect(screen.getByText(/Невірний email або пароль/i)).toBeInTheDocument();
  });

  test('logs in successfully with correct credentials', () => {
    const validUser = users[0];
    render(<Form />);
    fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: validUser.email } });
    fireEvent.change(screen.getByLabelText(/Пароль:/i), { target: { value: validUser.password } });
    fireEvent.click(screen.getByRole('button', { name: /Увійти/i }));
    expect(screen.queryByText(/Невірний email або пароль/i)).toBeNull();
  });

  test('shows error when registering with an existing email', () => {
    render(<Form />);
    fireEvent.click(screen.getByText(/Немає акаунта\?/i));
    const existingUserEmail = users[0].email;
    fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: existingUserEmail } });
    fireEvent.change(screen.getByLabelText(/Пароль:/i), { target: { value: 'newpassword123' } });
    fireEvent.click(screen.getByRole('button', { name: /Зареєструватися/i }));
    expect(screen.getByText(/Користувач з таким email вже існує/i)).toBeInTheDocument();
  });

  test('registers successfully with new email', () => {
    render(<Form />);
    fireEvent.click(screen.getByText(/Немає акаунта\?/i));
    fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: 'newuser@example.com' } });
    fireEvent.change(screen.getByLabelText(/Пароль:/i), { target: { value: 'newpassword123' } });
    fireEvent.click(screen.getByRole('button', { name: /Зареєструватися/i }));
    expect(screen.queryByText(/Користувач з таким email вже існує/i)).toBeNull();
  });
});
