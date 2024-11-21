import React from 'react';
import { mount } from 'cypress/react'; 
import { Item } from './Components/Item';  


describe('Item component', () => {
  it('should render the add to cart button', () => {
    const mockItem = {
      img: 'image.jpg',
      title: 'Mock Item',
      desc: 'This is a mock item.',
      price: 100,
    };

    const mockOnAdd = cy.stub(); 

    mount(<Item item={mockItem} onAdd={mockOnAdd} />); 

    cy.get('.Item-module__add-to-cart').should('exist'); 
  });
});
