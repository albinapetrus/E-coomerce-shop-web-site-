import React from 'react';

import Header  from './Components/Header';

import Footer from './Components/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Items from "./Components/Items";

import AboutUs from './Components/Aboutus';


import Contacts from './Components/Contacts';

import Form from './Components/Form';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
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
        this.addToOrder = this.addToOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
    }

    render() {
        return (
            <div className="wrapper">
                  <Router>
                    <Header orders={this.state.orders} onDelete={this.deleteOrder} />
                    <Routes>
                    <Route 
  path="/" 
  element={<Items items={this.state.items} onAdd={this.addToOrder} />} 
/> {/* Головна сторінка */}

                        <Route path="/about" element={<AboutUs />} /> {/* Сторінка "Про нас" */}
                        <Route path="/contacts" element={<Contacts />} /> {/* Сторінка "Контакти" */}
                        <Route path="/form" element={<Form />} />
                    </Routes>
                    <Footer />
                </Router>
            </div>
        );
    }

    deleteOrder(id){
this.setState({orders: this.state.orders.filter(el => el.id !== id)})
    }

   addToOrder(item){
    let isInArray = false;
this.state.orders.forEach(el =>{
    if(el.id === item.id){
        isInArray = true;
    }
})
if(!isInArray){
     this.setState({orders: [...this.state.orders, item]})
}  
  } 
}

export default App;