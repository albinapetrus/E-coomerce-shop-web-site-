// Імпортуємо необхідні бібліотеки та компоненти
import React, { useState } from 'react'; // Імпортуємо React та хук useState для управління станом
import { FaShoppingCart } from "react-icons/fa"; // Імпортуємо іконку кошика з бібліотеки react-icons
// import AboutUs from './AboutUs'; // Коментуємо імпорт компонента AboutUs, який, ймовірно, буде використовуватись пізніше
import { Link } from 'react-router-dom'; // Імпортуємо компонент Link для навігації по маршрутах
import styles from '../assets/Header.module.css'; // Імпортуємо стилі для компонента Header
import Order from './Order'; // Імпортуємо компонент Order для відображення кожного товару в кошику
import Item from './Item'; // Імпортуємо компонент Item, але наразі не використовуємо його в коді

// Функція для відображення замовлень
const showOrders = (orders, onDelete) => {
  let summa = 0; // Змінна для підрахунку суми замовлення
  orders.forEach(el => summa += Number.parseFloat(el.price)) // Для кожного елементу замовлення додаємо його ціну до загальної суми
  return (
    <div>
      {
        orders.map(el => ( // Проходимо по кожному елементу замовлення і відображаємо компонент Order
          <Order onDelete={onDelete} key={el.id} item={el} />
        ))
      }
      <p className={styles.sum}>Сума: {new Intl.NumberFormat().format(summa)}$</p> {/* Виводимо суму в форматі валюти */}
    </div>
  );
}

// Функція для відображення повідомлення про порожній кошик
const showNothing = () => {
  return (
    <div className={styles.empty}>
      <h2>Товарів нема..... Додайте щось до кошику</h2> {/* Повідомлення, якщо в кошику немає товарів */}
    </div>
  );
}

// Головний компонент Header
export default function Header({ orders, onDelete }) {
  let [cartOpen, setCartOpen] = useState(false); // Створюємо стан для відкриття/закриття кошика

  return (
    <header>
      <div>
         <Link to="/" className={styles.logo}>ModernSpace</Link> {/* Логотип, який веде на головну сторінку */}
        <ul className={styles.nav}> {/* Список навігаційних посилань */}
          <li>
            <Link to="/about">
              Про нас
            </Link>
          </li>
          <li>
            <Link to="/Contacts">Контакти</Link> {/* Додано посилання на сторінку контактів */}
          </li>
          <li>
            <Link to="/Form">Кабінет</Link> {/* Посилання на кабінет користувача */}
          </li>
        </ul>

        {/* Іконка кошика, при натисканні на яку змінюється стан (відкрито/закрито) */}
        <FaShoppingCart
          onClick={() => {
            setCartOpen(!cartOpen); // Перемикаємо стан кошика
            console.log('Cart Open:', !cartOpen); // Лог для перевірки відкриття/закриття кошика
          }}
          className={`${styles.shopCartButton} ${cartOpen ? styles.active : ''}`} // Динамічно додаємо клас для активного кошика
        />

        {/* Якщо кошик відкритий (cartOpen === true), відображаємо вміст кошика */}
        {cartOpen && (
          <div className={styles.shopCart}> 
            {orders.length > 0 ? ( // Якщо в кошику є товари, показуємо їх
              showOrders(orders, onDelete)
            ) : (
              showNothing() // Якщо кошик порожній, показуємо повідомлення про відсутність товарів
            )}
          </div>
        )}
      </div>
      <div className={styles.presentation}></div> {/* Пустий блок для можливого контенту презентації */}
    </header>
  );
}
