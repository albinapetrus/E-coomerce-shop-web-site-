// Імпортуємо React, щоб мати доступ до компонентів та функціональності бібліотеки React
import React from 'react';

import Header from './Components/Header';

import Footer from './Components/Footer';

// Імпортуємо необхідні модулі з бібліотеки 'react-router-dom' для маршрутизації
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Імпортуємо компонент Items, який відображає список товарів 
import Items from "./Components/Items";

// Імпортуємо компонент AboutUs, який представляє сторінку "Про нас"
import AboutUs from './Components/Aboutus';

// Імпортуємо компонент Contacts, який представляє сторінку "Контакти"
import Contacts from './Components/Contacts';
import Form from './Components/Form';

// Основний компонент додатку, який є класовим компонентом React
class App extends React.Component {
    // Конструктор компонента, в якому ініціалізуються початкові значення стану
    constructor(props) {
        super(props);
        this.state = {
            // orders — це масив, який зберігає список товарів, доданих до замовлення
            orders: [],
            // items — це масив об'єктів, де кожен об'єкт представляє товар з певними властивостями
            items: [
                {
                    id: 1,
                    title: 'Лампа',
                    img: 'лампа.jpg',
                    desc: 'Лампа з яскравим світлом',
                    category: 'Світло',
                    price: '15'
                },
                {
                    id: 2,
                    title: 'Стіл',
                    img: 'парта.jpg',
                    desc: 'Стіл з якісних матеріалів',
                    category: 'Столи',
                    price: '45'
                },
                {
                    id: 3,
                    title: 'Світильник',
                    img: 'Світильник.jpg',
                    desc: 'Незвичайний світильник',
                    category: 'Світло',
                    price: '20'
                },
                {
                    id: 4,
                    title: 'Табуретка',
                    img: 'табуретка.jpg',
                    desc: 'Просто табуретка',
                    category: 'Стільці',
                    price: '30'
                },
                {
                    id: 5,
                    title: 'Діван',
                    img: 'Діван.jpeg',
                    desc: 'Діван з ніжних матеріалів',
                    category: 'Дівани',
                    price: '100'
                },
                {
                    id: 6,
                    title: 'Крісло',
                    img: 'Bun-armchair.jpeg',
                    desc: 'Велике незвижне крісло',
                    category: 'Дівани',
                    price: '300'
                }
            ]
        };
        // Прив'язуємо методи до класу, щоб використовувати 'this' всередині цих методів
        this.addToOrder = this.addToOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
    }

    // Метод render — це обов'язковий метод у класових компонентах, який повертає JSX для відображення
    render() {
        return (
            <div className="wrapper">
                {/* Використовуємо Router для маршрутизації між різними сторінками додатку */}
                <Router>
                    {/* Компонент Header приймає масив orders та метод onDelete як пропси */}
                    <Header orders={this.state.orders} onDelete={this.deleteOrder} />
                    
                    {/* Використовуємо Routes для визначення маршрутів сторінок */}
                    <Routes>
                        {/* Головна сторінка, яка відображає список елементів з компоненту Items */}
                        <Route 
                            path="/" 
                            element={<Items items={this.state.items} onAdd={this.addToOrder} />} 
                        />

                        {/* Сторінка "Про нас" */}
                        <Route path="/about" element={<AboutUs />} />

                        {/* Сторінка "Контакти" */}
                        <Route path="/contacts" element={<Contacts />} />

                        {/* Сторінка з формою */}
                        <Route path="/form" element={<Form />} />
                    </Routes>

                    {/* Компонент Footer, який відображається на кожній сторінці */}
                    <Footer />
                </Router>
            </div>
        );
    }

    // Метод для видалення товару з замовлення за його id
    deleteOrder(id) {
        // Використовуємо метод filter, щоб залишити в масиві тільки ті елементи, id яких не збігається з переданим id
        this.setState({ orders: this.state.orders.filter(el => el.id !== id) });
    }

    // Метод для додавання товару до замовлення
    addToOrder(item) {
        let isInArray = false;
        // Перевіряємо, чи товар вже присутній у замовленні
        this.state.orders.forEach(el => {
            if (el.id === item.id) {
                isInArray = true;
            }
        });

        // Якщо товар ще не в замовленні, додаємо його до списку замовлень
        if (!isInArray) {
            this.setState({ orders: [...this.state.orders, item] });
        }
    }
}

// Експортуємо компонент App, щоб його можна було імпортувати в інших файлах
export default App;
