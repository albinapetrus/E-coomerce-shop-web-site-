// Importing required modules
const path = require('node:path');  // Вбудований модуль Node.js для роботи з шляхами
const HtmlWebpackPlugin = require('html-webpack-plugin');  // Плагін для генерації HTML-файлу
const CopyWebpackPlugin = require('copy-webpack-plugin');  // Плагін для копіювання файлів

// Основна конфігурація Webpack
const config = {
    // Вхідний файл (вхідна точка програми)
    entry: path.resolve(__dirname, '../src/index.js'),  // Шлях до основного JS файлу, з якого починається збірка

    // Налаштування вихідного файлу
    output: {
        path: path.resolve(__dirname, '../dist'),  // Директорія для результатів зборки
        // Файл для вихідних результатів не вказаний, Webpack за замовчуванням створить bundle.js
    },

    // Плагіни для додаткової обробки
    plugins: [
        // Копіювання статичних файлів (наприклад, зображень) з src в dist
        new CopyWebpackPlugin({
            patterns: [
                {
                    context: path.resolve(__dirname, '../src', 'assets'),  // Каталог для копіювання файлів
                    from: '**/*',  // Усі файли та папки
                    to: path.resolve(__dirname, '../dist', 'assets'),  // Місце для копіювання файлів
                },
            ],
        }),

        // Плагін для генерування HTML-файлу на основі шаблону
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),  // Шаблон HTML, який буде використано для створення фінального HTML
        }),
    ],

    // Налаштування обробки модулів
    module: {
        rules: [
            {
                // Обробка файлів JS/JSX через Babel
                test: /\.jsx?$/,  // Всі файли з розширенням .js або .jsx
                exclude: /node_modules/,  // Виключаємо node_modules, бо вони вже перетворені
                use: [
                    {
                        loader: 'babel-loader',  // Завантажувач для Babel, щоб трансформувати новітній JS та JSX у більш старі версії
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],  // Використовуємо пресети для трансформації ES6+ і JSX
                        },
                    },
                ],
            },
        ],
    },

    // Налаштування для резолва (пошуку) файлів
    resolve: {
        extensions: ['.js', '.jsx'],  // Можна опустити ці розширення при імпорті файлів
        alias: {
            '@app': path.resolve(__dirname, '../src/'),  // Створення аліасу для легшого імпорту з кореня src
            '@components': path.resolve(__dirname, '../src/components'),  // Аліас для компонентів
        },
    },
};

// Експортуємо конфігурацію
module.exports = config;
