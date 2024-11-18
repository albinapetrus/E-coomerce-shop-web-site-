// Основна конфігурація ESLint
const config = {
    // Налаштування середовища
    env: {
        browser: true, // Вказує на те, що код призначений для роботи в браузері.
        node: true,    // Вказує на те, що код призначений для роботи в Node.js.
        es2021: true,  // Підтримка синтаксису ECMAScript 2021.
    },
    // Використання готових наборів правил (extends)
    extends: [
        'eslint:recommended', // Основний набір рекомендованих правил ESLint.
        
        // Рекомендовані правила для React
        // Документація: https://www.npmjs.com/package/eslint-plugin-react
        'plugin:react/recommended',

        // Рекомендовані правила для React Hooks
        // Документація: https://www.npmjs.com/package/eslint-plugin-react-hooks
        'plugin:react-hooks/recommended',

        // Правила для перевірки імпортів
        // Документація: https://www.npmjs.com/package/eslint-plugin-import
        'plugin:import/errors',
        'plugin:import/warnings',

        // Рекомендовані правила для плагіна unicorn (уніфіковані найкращі практики)
        // Документація: https://www.npmjs.com/package/eslint-plugin-unicorn
        'plugin:unicorn/recommended',

        // Рекомендовані правила для тестування з Cypress
        // Документація: https://www.npmjs.com/package/eslint-plugin-cypress
        'plugin:cypress/recommended',
    ],
    
    // Налаштування для конкретних плагінів
    // Документація: https://github.com/import-js/eslint-plugin-import
    settings: {
        react: {
            version: 'detect', // Автоматично визначає версію React, встановлену в проєкті.
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx'], // Дозволяє імпорт файлів з розширеннями .js та .jsx.
            },
            webpack: {
                // Якщо не вказати, імпорт може некоректно працювати з псевдонімами,
                // наприклад: import Header from '@components/Header'
                config: './config/webpack.development.config.js', // Шлях до конфігурації Webpack.
            },
        },
    },
    
    // Додаткові плагіни
    plugins: [
        'simple-import-sort', // Плагін для сортування імпортів.
        'react', // Плагін для підтримки правил React.
    ],

    // Ігнорування певних файлів та директорій
    ignorePatterns: [
        'node_modules',      // Ігнорує директорію node_modules.
        'src/bootstrap.js',  // Ігнорує файл src/bootstrap.js.
    ],

    // Власні правила для ESLint
    rules: {
        // Правило для назви файлів (camelCase та PascalCase)
        // Документація: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md
        'unicorn/filename-case': [
            'error',
            {
                cases: {
                    camelCase: true,  // Дозволяє camelCase для файлів.
                    pascalCase: true, // Дозволяє PascalCase для файлів.
                },
            },
        ],
        
        'unicorn/no-empty-file': 'off',                // Вимикає правило, що забороняє порожні файли.
        'simple-import-sort/exports': 'error',         //Вимагає сортування експорту.
        //'simple-import-sort/imports': 'error',           Вимагає сортування імпортів.
        'import/namespace': [2, { allowComputed: true }], // Встановлює рівень помилки для помилок імпорту.
        'import/first': 'error',                       // Імпорт повинен бути першим у файлі.
        'import/newline-after-import': 'error',        // Потрібен новий рядок після імпорту.
    },

    // Перезапис правил для певних файлів
    overrides: [
        {
            // Ці правила застосовуються до файлів з розширеннями '*rc.js' та '*.config.js'
            files: ['*rc.js', '*.config.js'],
            rules: {
                'unicorn/prefer-module': 'off', // Вимикає вимогу використовувати модулі (ES6).
                
                // Для цих файлів дозволено лише kebab-case у назвах.
                'unicorn/filename-case': [
                    'error',
                    {
                        cases: {
                            kebabCase: true, // Дозволяє використання kebab-case.
                        },
                    },
                ],

                'no-unused-vars': 'off', // Вимикає перевірку на невикористані змінні.
            },
        },
    ],
};

// Експорт конфігурації для використання у ESLint.
module.exports = config;
