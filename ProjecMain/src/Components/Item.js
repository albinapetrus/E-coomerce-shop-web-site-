import React, { Component } from 'react';

import styles from '../assets/Item.module.css';

import Order from './Order';

export class Item extends Component {
  render() {
    return (
      <div className={styles.item}>
        <img src={"./img/" + this.props.item.img} alt={this.props.item.title} />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <b>{this.props.item.price}$</b>
        <div className={styles.addToCart} onClick={() => this.props.onAdd(this.props.item)}>+</div>
      </div>
    );
  }
}

export default Item;
