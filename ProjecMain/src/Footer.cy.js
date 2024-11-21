import React from 'react';
import { mount } from 'cypress/react'; 
import Footer from './Components/Footer'; 

describe('Footer component', () => {
  it('should render all social media icons', () => {
    mount(<Footer />); 

    cy.get('a[href="https://www.instagram.com/yourprofile"]').should('exist');
    
    cy.get('a[href="https://www.viber.com/yourprofile"]').should('exist');
    
    cy.get('a[href="https://t.me/yourprofile"]').should('exist');
    
    cy.get('a[href="https://www.tiktok.com/@yourprofile"]').should('exist');
  });

  it('should open the correct social media link in a new tab', () => {
    mount(<Footer />); 


    cy.get('a[href="https://www.instagram.com/yourprofile"]').should('have.attr', 'target', '_blank');

    cy.get('a[href="https://www.viber.com/yourprofile"]').should('have.attr', 'target', '_blank');


    cy.get('a[href="https://t.me/yourprofile"]').should('have.attr', 'target', '_blank');

 
    cy.get('a[href="https://www.tiktok.com/@yourprofile"]').should('have.attr', 'target', '_blank');
  });

  it('should render the social media icons correctly', () => {
    mount(<Footer />); 

    
    cy.get('a[href="https://www.instagram.com/yourprofile"]')
      .find('svg') 
      .should('exist');

    cy.get('a[href="https://www.viber.com/yourprofile"]')
      .find('svg')
      .should('exist');

   
    cy.get('a[href="https://t.me/yourprofile"]')
      .find('svg')
      .should('exist');

    cy.get('a[href="https://www.tiktok.com/@yourprofile"]')
      .find('svg')
      .should('exist');
  });
});
