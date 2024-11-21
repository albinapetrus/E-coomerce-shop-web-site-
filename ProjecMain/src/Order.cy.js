import React from 'react';
import { mount } from 'cypress/react'; 
import { Order } from './Components/Order'; 

describe('Order component', () => {
  const mockItem = {
    id: 1,
    img: 'image1.jpg',  
    title: 'Test Item',
    price: 99.99,
  };

  it('should render the item details correctly', () => {
    mount(<Order item={mockItem} onDelete={() => {}} />);  


    cy.get('.Item-module__item').should('have.attr', 'src', './img/image1.jpg');
    
   
    cy.get('h2').should('contain.text', 'Test Item');
    
    cy.get('b').should('contain.text', '99.99$');
  });

  it('should call onDelete when delete button is clicked', () => {
    const mockOnDelete = cy.stub();  

    mount(<Order item={mockItem} onDelete={mockOnDelete} />);  

   
    cy.get('svg').should('have.class', 'delete'); 


    cy.get('svg').click(); 

    cy.wrap(mockOnDelete).should('have.been.calledOnceWith', 1);
  });
});
