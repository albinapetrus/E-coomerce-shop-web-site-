import React, { useState } from 'react';

import { FaShoppingCart } from "react-icons/fa";
;

import { Link } from 'react-router-dom';

import styles from '../assets/Header.module.css';

import Order from './Order';

import Item from './Item';

export class Header extends Component {
  render() {
    return (
        <header>
      
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

       
      <div className={styles.presentation}></div>
          </header>
    )
  }
}

export default Header