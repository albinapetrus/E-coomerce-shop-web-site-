import React, { Component } from 'react';

import styles from '../assets/Item.module.css';

import Order from './Order';

export class Item extends Component {
  render() {
    return (
      <div className={styles.item}>
        <img src={"./img/" + this.props.item.img} alt={this.props.item.title} />
        <h2></h2>
        <p></p>
        <b>$</b>
        <div className={styles.addToCart} >+</div>
      </div>
    );
  }
}

export default Item;