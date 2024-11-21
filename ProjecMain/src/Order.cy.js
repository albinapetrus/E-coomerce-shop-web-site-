import React from 'react';
import { mount } from 'cypress/react'; // Make sure you import the mount method
import { Order } from './Components/Order';  // Import the Order component

describe('Order component', () => {
  const mockItem = {
    id: 1,
    img: 'image1.jpg',  // Mock image path
    title: 'Test Item',
    price: 99.99,
  };

  it('should render the item details correctly', () => {
    mount(<Order item={mockItem} onDelete={() => {}} />);  // Mount the Order component

    // Check if the item image is rendered
    cy.get('.Item-module__item').should('have.attr', 'src', './img/image1.jpg');
    
    // Check if the item title is displayed correctly
    cy.get('h2').should('contain.text', 'Test Item');
    
    // Check if the price is displayed correctly
    cy.get('b').should('contain.text', '99.99$');
  });

  it('should call onDelete when delete button is clicked', () => {
    const mockOnDelete = cy.stub();  // Create the mock function inside the test block

    mount(<Order item={mockItem} onDelete={mockOnDelete} />);  // Mount the Order component

    // Check if the delete button (trash icon) is rendered
    cy.get('svg').should('have.class', 'delete');  // Assuming you have a 'delete' class applied

    // Simulate a click on the delete button
    cy.get('svg').click();  // Click the delete button (trash icon)

    // Ensure the onDelete function was called once with the correct item id
    cy.wrap(mockOnDelete).should('have.been.calledOnceWith', 1);
  });
});
