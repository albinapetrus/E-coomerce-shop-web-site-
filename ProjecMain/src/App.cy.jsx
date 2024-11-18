import React from 'react';
import App from './App';

describe('<App />', () => {
    it('renders', () => {
        // Монтуюмо компонент App
        cy.mount(<App />);

        // Перевіряємо, чи сторінка містить певні елементи, наприклад, заголовок Header
        cy.get('.wrapper').should('exist'); // Перевірка наявності елемента з класом "wrapper"
        cy.contains('Про нас').should('exist'); // Перевірка, чи є текст "Про нас"
    });
});
