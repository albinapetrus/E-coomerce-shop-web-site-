import React from 'react';

import Form from './Components/Form';

describe('Form component', () => {
  it('renders the form correctly', () => {
    // Монтуючи компонент Form, перевіряємо, чи з'являється елемент із текстом "Увійти"
    cy.mount(<Form />);
    cy.contains('Увійти').should('exist'); // Перевірка наявності кнопки "Увійти"
  });

  it('should handle email input change', () => {
    cy.mount(<Form />);
    cy.get('input[name="email"]') // Знаходимо інпут за ім'ям
      .type('test@example.com') // Тестуємо введення в поле
      .should('have.value', 'test@example.com'); // Перевіряємо, чи вказано значення
  });

  it('should handle password input change', () => {
    cy.mount(<Form />);
    cy.get('input[name="password"]') // Знаходимо інпут для паролю
      .type('password123') // Тестуємо введення в поле
      .should('have.value', 'password123'); // Перевіряємо, чи вказано значення
  });

  it('shows error message when login fails', () => {
    cy.mount(<Form />);
    cy.get('input[name="email"]') // Знаходимо інпут для email
      .type('wrong@example.com'); // Вводимо неправильний email
    cy.get('input[name="password"]') // Знаходимо інпут для паролю
      .type('wrongpassword'); // Вводимо неправильний пароль
    cy.get('button[type="submit"]') // Знаходимо кнопку "Увійти"
      .click(); // Клікаємо на кнопку
     
      cy.get('error').should('exist'); 
  });
});
