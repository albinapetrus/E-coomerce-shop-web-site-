import React, { Component } from 'react'

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
          </header>
    )
  }
}

export default Header