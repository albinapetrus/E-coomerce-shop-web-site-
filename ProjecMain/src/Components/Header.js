import React, { useState } from 'react';

import { FaShoppingCart } from "react-icons/fa";

//import AboutUs from './AboutUs';

import { Link } from 'react-router-dom';

import styles from '../assets/Header.module.css';

import Order from './Order';

import Item from './Item';

const showOrders = (orders, onDelete) => {
  let summa = 0;
  orders.forEach(el => summa += Number.parseFloat(el.price))
  return (<div>
    {
      orders.map(el => (
<Order onDelete={onDelete} key={el.id} item={el} />
      ))
    }
    <p className={styles.sum}>Сума: {new Intl.NumberFormat().format(summa)}$</p>
  </div>

  )
}

const showNothing = () => {
  return (<div className={styles.empty}>
    <h2>Товарів нема.....       Додайте щось до кошику</h2>
  </div>)
}

export default function Header({ orders, onDelete }) {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
         <Link to="/" className={styles.logo}>ModernSpace</Link>
        <ul className={styles.nav}>
          <li>
          <Link to="/about">
              Про нас
            </Link>
          </li>
          <li><Link to="/Contacts">Контакти</Link> {/* Додано посилання на контакти */}</li>
          <li><Link to="/Form">Кабінет</Link></li>
        </ul>
        <FaShoppingCart
  onClick={() => {
    setCartOpen(!cartOpen);
    console.log('Cart Open:', !cartOpen); // Це має виводити true, коли корзина відкривається, false, коли закривається
  }}
  className={`${styles.shopCartButton} ${cartOpen ? styles.active : ''}`}
/>

{cartOpen && (
  <div className={styles.shopCart}> 
    {orders.length > 0 ? (
      showOrders(orders, onDelete)
    ) : (
      showNothing() // Викликаємо showNothing, якщо замовлень немає
    )}
  </div>
)}

      </div>
      <div className={styles.presentation}></div>
    </header>
  );
}