// Імпортуємо бібліотеку React і компонент "Component" з цієї бібліотеки
import React, { Component } from 'react';

// Імпортуємо компонент "Item" з файлу './Item'
import Item from './Item';

// Створюємо класовий компонент "Items", який наслідує від "Component"
export class Items extends Component {
  // Використовуємо метод render() для відображення вмісту
  render() {
    return (
      // Повертаємо елемент "main", який буде контейнером для всіх Item
      <main>
        {/* Використовуємо метод map для перебору масиву items, переданого через пропси.
            Для кожного елемента (el) створюємо компонент "Item" */}
        {this.props.items.map(el => (
            // Компонент "Item" отримує унікальний ключ "key", об'єкт item, 
            // та функцію onAdd, яку ми отримали через пропси від батьківського компонента
            <Item key={el.id} item={el} onAdd={this.props.onAdd}/>
        ))}
      </main>
    )
  }
}

// Експортуємо компонент "Items" як компонент за замовчуванням
export default Items;
