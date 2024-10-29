import React from 'react';

import Header  from './Components/Header';

import Footer from './Components/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Items from "./Components/Items"

import AboutUs from './Components/AboutUs';


import Contacts from './Components/Contacts';

import Form from './Components/Form';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
                    price: '100'
                }
            ]
        };
    }

    render() {
        return (
            <div className="wrapper">
                  <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Items items={this.state.items} />} /> {/* Головна сторінка */}
                        <Route path="/about" element={<AboutUs />} /> {/* Сторінка "Про нас" */}
                        <Route path="/contacts" element={<Contacts />} /> {/* Сторінка "Контакти" */}
                        <Route path="/form" element={<Form />} />
                    </Routes>
                    <Footer />
                </Router>
            </div>
        );
    }
}

export default App;