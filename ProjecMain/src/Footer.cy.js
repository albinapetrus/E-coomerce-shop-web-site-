import React from 'react';
import { mount } from 'cypress/react'; // Ensure you're using the correct mounting method
import Footer from './Components/Footer'; // Import the Footer component

describe('Footer component', () => {
  it('should render all social media icons', () => {
    mount(<Footer />); // Mount the Footer component

    // Check if Instagram icon is rendered
    cy.get('a[href="https://www.instagram.com/yourprofile"]').should('exist');
    
    // Check if Viber icon is rendered
    cy.get('a[href="https://www.viber.com/yourprofile"]').should('exist');
    
    // Check if Telegram icon is rendered
    cy.get('a[href="https://t.me/yourprofile"]').should('exist');
    
    // Check if Tiktok icon is rendered
    cy.get('a[href="https://www.tiktok.com/@yourprofile"]').should('exist');
  });

  it('should open the correct social media link in a new tab', () => {
    mount(<Footer />); // Mount the Footer component

    // Check if the Instagram link opens in a new tab
    cy.get('a[href="https://www.instagram.com/yourprofile"]').should('have.attr', 'target', '_blank');

    // Check if the Viber link opens in a new tab
    cy.get('a[href="https://www.viber.com/yourprofile"]').should('have.attr', 'target', '_blank');

    // Check if the Telegram link opens in a new tab
    cy.get('a[href="https://t.me/yourprofile"]').should('have.attr', 'target', '_blank');

    // Check if the Tiktok link opens in a new tab
    cy.get('a[href="https://www.tiktok.com/@yourprofile"]').should('have.attr', 'target', '_blank');
  });

  it('should render the social media icons correctly', () => {
    mount(<Footer />); // Mount the Footer component

    // Ensure that the Instagram icon is rendered correctly
    cy.get('a[href="https://www.instagram.com/yourprofile"]')
      .find('svg')  // Check for the SVG (icon) inside the <a> tag
      .should('exist');

    // Ensure that the Viber icon is rendered correctly
    cy.get('a[href="https://www.viber.com/yourprofile"]')
      .find('svg')
      .should('exist');

    // Ensure that the Telegram icon is rendered correctly
    cy.get('a[href="https://t.me/yourprofile"]')
      .find('svg')
      .should('exist');

    // Ensure that the Tiktok icon is rendered correctly
    cy.get('a[href="https://www.tiktok.com/@yourprofile"]')
      .find('svg')
      .should('exist');
  });
});
