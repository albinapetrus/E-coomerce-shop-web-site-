import React from 'react';
import { mount } from 'cypress/react'; // Make sure you import the mount method
import { Item } from './Components/Item';  // Import the Items component


describe('Item component', () => {
  it('should render the add to cart button', () => {
    const mockItem = {
      img: 'image.jpg',
      title: 'Mock Item',
      desc: 'This is a mock item.',
      price: 100,
    };

    const mockOnAdd = cy.stub(); // Create the mock function

    mount(<Item item={mockItem} onAdd={mockOnAdd} />); // Mount the Item component with the required props

    cy.get('.Item-module__add-to-cart').should('exist'); // Check if the "Add to cart" button exists
  });
});
