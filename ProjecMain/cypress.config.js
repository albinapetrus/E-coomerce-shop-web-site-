// Імпортуємо функцію `defineConfig` з пакета Cypress. 
// Це функція, яка допомагає налаштовувати конфігурацію для Cypress.
const { defineConfig } = require('cypress');

// Імпортуємо конфігурацію Webpack з файлу `webpack.cypress.config.js`, який знаходиться в папці `config`.
// Ця конфігурація буде використовуватися для налаштування Webpack під час тестування компонентів.
const webpackConfig = require('./config/webpack.cypress.config');

// Експортуємо об'єкт конфігурації для Cypress за допомогою функції `defineConfig`.
module.exports = defineConfig({
    // Налаштування для компонентного тестування
    component: {
        // Налаштування dev-сервера для компонентів
        devServer: {
            // Вказуємо, що для рендерингу компонентів використовуємо React
            framework: 'react',
            // Вказуємо, що для збірки компонентів будемо використовувати Webpack
            bundler: 'webpack',
            // Передаємо об'єкт конфігурації Webpack
            webpackConfig, // webpackConfig: webpackConfig
        },
        // Налаштовуємо події Node.js для компонентного тестування
        setupNodeEvents(on, config) {
            // component testing node events setup code
            // https://docs.cypress.io/guides/tooling/code-coverage
            // Виконуємо налаштування для тестування покриття коду (coverage)
            // Це дозволяє збирати інформацію про покриття тестами за допомогою `@cypress/code-coverage`.
            // Документація: https://docs.cypress.io/guides/tooling/code-coverage
            require('@cypress/code-coverage/task')(on, config);

            // Використовуємо препроцесор для файлів, який бере налаштування Babel з `.babelrc`.
            // Це дозволяє обробляти файли перед тестуванням з використанням Babel.
            on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'));

            // Повертаємо об'єкт конфігурації після налаштувань
            return config;
        },
    },

    // Налаштування для e2e (end-to-end) тестування
    e2e: {
        // Налаштовуємо події Node.js для e2e тестування
        setupNodeEvents(on, config) {
            // implement node event listeners here
            // Тут можна додати обробники подій для e2e тестування

        },
    },
});