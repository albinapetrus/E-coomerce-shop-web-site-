import React, { Component } from 'react';
import styles from '../assets/Form.module.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isRegistering: false,
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
    
  };

  render() {
    const { email, password, isRegistering } = this.state;
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


