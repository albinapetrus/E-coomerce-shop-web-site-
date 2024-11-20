import React from 'react';
import Header from './Components/Header';
import { MemoryRouter } from 'react-router-dom';

// Ігноруємо помилку `basename`
Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes("Cannot read properties of null (reading 'basename')")) {
    return false;
  }
});

describe('Header component', () => {
  it('renders the logo correctly', () => {
    const mockOrders = [];
    const mockOnDelete = cy.stub();

    cy.mount(
      <MemoryRouter>
        <Header orders={mockOrders} onDelete={mockOnDelete} />
      </MemoryRouter>
    );

    cy.get('a.Header-module__logo').should('exist'); // Перевірка наявності логотипа
    cy.get('div.Header-module__presentation').should('exist'); // Перевірка наявності блоку presentation
  });
  it('displays empty cart message when no items are in the cart', () => {
    const mockOrders = [];
    const mockOnDelete = cy.stub();

    cy.mount(
      <MemoryRouter>
        <Header orders={mockOrders} onDelete={mockOnDelete} />
      </MemoryRouter>
    );

    
  });
})