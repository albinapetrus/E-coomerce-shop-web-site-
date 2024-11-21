import React, { Component } from 'react';
import { FaTrash } from 'react-icons/fa';

// Імпортуємо стилі з файлу 'Item.module.css', що знаходиться в папці assets.
// Це дозволяє використовувати CSS модулі, які ізолюють стилі конкретно для цього компонента.
import styles from '../assets/Item.module.css';

// Імпортуємо компонент "Item" з файлу './Item'
import Item from './Item';

// Імпортуємо компонент "Header" з файлу './Header'
import Header from './Header';

// Створюємо класовий компонент "Order", який наслідує властивості від "Component"
export class Order extends Component {
  // Використовуємо метод render() для відображення вмісту компонента
  render() {
    // Використовуємо деструктуризацію для зручності: 
    // item та onDelete отримуємо з props, які були передані в компонент
    const { item, onDelete } = this.props;

    return (
      // Блок контейнера для кожного елемента замовлення
      <div className={styles.item}>
        {/* Виводимо зображення, використовуючи шлях "./img/" та назву зображення з item.img */}
        <img src={"./img/" + this.props.item.img} alt={this.props.item.title} />
        
        {/* Відображаємо назву товару */}
        <h2>{this.props.item.title}</h2>
        
        {/* Відображаємо ціну товару з символом долара */}
        <b>{this.props.item.price}$</b>
        
        {/* Іконка "FaTrash" для видалення товару.
            Використовуємо стилі з "styles.delete".
            Викликаємо функцію onDelete при кліку, передаючи id товару */}
        <FaTrash className={styles.delete} onClick={() => onDelete(item.id)}/>
      </div>
    )
  }
}

// Експортуємо компонент "Order" як компонент за замовчуванням
export default Order;
