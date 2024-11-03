import React, { Component } from 'react';

import styles from '../assets/Contacts.module.css';

import { FaShoppingCart } from "react-icons/fa";

import { Link } from 'react-router-dom';

import { FaInstagram } from "react-icons/fa";

import { FaViber } from "react-icons/fa";

import { FaTelegramPlane } from "react-icons/fa";



export class Contacts extends Component {
  render() {
    return (
      <div>  
        <div className={styles.contact}>
          <h2>Звяжіться з нами</h2>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.mainContent2}>
            <p className={styles.contact1}>Як я можу проконсультуватись щодо товару?<br />
              Телефонуй: +3800909090;
            </p>
            <div className={styles.contact1}>
              <p>Пиши в зручний для тебе месседжер:</p>
              <div className={styles.socialIcons}>
  
    <FaInstagram />
 
 
    <FaViber />
  
  
    <FaTelegramPlane />
  
  </div>
            </div>
            <div className={styles.number}>
            <p className={styles.contact1}>Або оформляй замовлення на сайті і ми самі тобі зателефонуємо</p>
            <Link to="" >
          <FaShoppingCart className={styles.shopCartButton} />
        </Link>
            </div>
        </div>
          <img src="/img/7452506.png" height="auto" width="450" alt="Image" />
        </div>

        <div className={styles.mainContent3}>
          <img src="/img/—Pngtree—big isolated young man work_7258004.png" height="500" alt="Young Man" />
          <img src="/img/exclamation-mark-emoji-clipart-lg.png" height="100" alt="Exclamation Mark" />
          <p className={styles.contact3}>
            Виникли проблеми чи скарги? Телефонуй:<br />
            +38010010001<br />
            (9:00-18:00)
          </p>
        </div>
      </div>
    );
  }
}

export default Contacts;
