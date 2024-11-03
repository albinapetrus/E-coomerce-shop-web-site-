import React, { Component } from 'react';
import { FaTrash } from 'react-icons/fa';

import styles from '../assets/Item.module.css';

import Item from './Item';

import Header from './Header';

export class Order extends Component {
  render() {
    const { item, onDelete } = this.props;

    return (
      <div className={styles.item}>
        <img src={"./img/" + this.props.item.img} alt={this.props.item.title} />
        <h2>{this.props.item.title}</h2>
        <b>{this.props.item.price}$</b>
        <FaTrash className={styles.delete} onClick={() => onDelete(item.id)}/>
       </div>
    )
  }
}

export default Order