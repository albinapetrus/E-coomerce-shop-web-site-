import React from 'react';
import App from './App'; // Імпортуємо ваш компонент App

describe('<App />', () => {
    it('renders and verifies essential elements', () => {
        // Монтуюмо компонент App
        cy.mount(<App />);

        // Перевіряємо, чи є основний контейнер з класом "wrapper"
        cy.get('.wrapper').should('exist');

        // Перевіряємо наявність заголовка Header
        cy.get('header').should('exist');

        // Перевіряємо, чи є текст "Про нас" у меню або на сторінці
        cy.contains('Про нас').should('exist');

        // Перевіряємо наявність компонентів Footer
        cy.get('footer').should('exist');
    });

    it('navigates and interacts correctly', () => {
        // Монтуюмо компонент App
        cy.mount(<App />);

        // Клікаємо на посилання "Про нас"
        cy.contains('Про нас').click();

        // Перевіряємо, чи відкрилася відповідна сторінка
        cy.contains('Широкий асортимент').should('exist'); // Замініть текст на актуальний контент

        // Переходимо на головну сторінку
        cy.contains('ModernSpace').click(); // Клік на посилання або кнопку для переходу на головну

     

        // Перевіряємо, чи є товар "Лампа" на головній сторінці
        cy.get('main').should('contain.text', 'Стіл');

     

    });
});
