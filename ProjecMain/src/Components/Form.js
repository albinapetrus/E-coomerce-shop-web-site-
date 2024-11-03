import React, { Component } from 'react';
import styles from '../assets/Form.module.css';
import users from '../data/MOCK_DATA.json'; // Імпорт даних користувачів

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isRegistering: false,
      errorMessage: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggleForm = () => {
    this.setState((prevState) => ({ isRegistering: !prevState.isRegistering }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, isRegistering } = this.state;

    if (isRegistering) {
      // Реєстрація (приклад: перевірка, чи існує вже email)
      const userExists = users.some((user) => user.email === email);
      if (userExists) {
        this.setState({ errorMessage: 'Користувач з таким email вже існує' });
      } else {
        alert('Реєстрація успішна!');
        // Додайте логіку для додавання користувача, якщо потрібно
      }
    } else {
      // Авторизація
      const user = users.find((user) => user.email === email && user.password === password);

      if (user) {
        alert('Успішна авторизація!');
        this.setState({ errorMessage: '' });
        // Логіка авторизації, наприклад, збереження сесії або перенаправлення
      } else {
        this.setState({ errorMessage: 'Невірний email або пароль' });
      }
    }
  };

  render() {
    const { email, password, isRegistering, errorMessage } = this.state;
    return (
      <div className={styles.authForm}>
        <h2>{isRegistering ? 'Реєстрація' : 'Авторизація'}</h2>
        <form onSubmit={this.handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Пароль:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              required
            />
          </div>
          {errorMessage && <p className={styles.error}>{errorMessage}</p>}
          <button type="submit" className={styles.btn}>
            {isRegistering ? 'Зареєструватися' : 'Увійти'}
          </button>
        </form>
        <p>
          {isRegistering ? 'Вже маєте акаунт?' : 'Немає акаунта?'}
          <span onClick={this.toggleForm} className={styles.toggleLink}>
            {isRegistering ? ' Увійдіть' : ' Реєструйтесь'}
          </span>
        </p>
      </div>
    );
  }
}

export default Form;

