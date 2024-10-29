import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import AboutUs from './AboutUs';
import { Link } from 'react-router-dom';


export default function Header() {
  

  return (
    <header>
      <div>
         <Link to="/" className='logo'>ModernSpace</Link>
        <ul className='nav'>
          <li>
          <Link to="/about">
              Про нас
            </Link>
          </li>
          <li><Link to="/Contacts">Контакти</Link> {/* Додано посилання на контакти */}</li>
          <li><Link to="/Form">Кабінет</Link></li>
        </ul>
        <FaShoppingCart className='shop-cart-button' />
      </div>
      <div className='presentation'></div>
    </header>
  );
}
