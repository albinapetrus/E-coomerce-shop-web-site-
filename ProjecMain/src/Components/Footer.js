import React from 'react';

import styles from '../assets/Footer.module.css';

import { FaInstagram } from "react-icons/fa";

import { FaViber } from "react-icons/fa";

import { FaTelegramPlane } from "react-icons/fa";

import { FaTiktok } from "react-icons/fa";


export default function Footer() {
  return (
    <footer>
<h1>Contact and follow us:</h1>
<div className={styles.socialIcons}>
{/* Це посилання веде на профіль в Instagram. Атрибут target="_blank" відкриває посилання в новій вкладці, 
а атрибут rel="noopener noreferrer" забезпечує безпеку, запобігаючи доступу до попередньої сторінки через JavaScript 
та зменшує ризики фішингу. */}
  <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </a>
  <a href="https://www.viber.com/yourprofile" target="_blank" rel="noopener noreferrer">
    <FaViber />
  </a>
  <a href="https://t.me/yourprofile" target="_blank" rel="noopener noreferrer">
    <FaTelegramPlane />
  </a>
  <a href="https://www.tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer">
    <FaTiktok />
  </a>
</div>

    </footer>
  )
}