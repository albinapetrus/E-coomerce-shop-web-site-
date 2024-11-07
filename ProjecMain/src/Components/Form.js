import React, { Component } from 'react';
import styles from '../assets/Form.module.css';
// Імпортуємо необхідні функції
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"; 
import { getAnalytics } from "firebase/analytics";

// Конфігурація Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA09Cwh_qwZUHQpN8g3qSbC1tnjFcifn0g",
  authDomain: "projecmain.firebaseapp.com",
  projectId: "projecmain",
  storageBucket: "projecmain.firebasestorage.app",
  messagingSenderId: "673856902327",
  appId: "1:673856902327:web:a5dc55f89151514bb3a932",
  measurementId: "G-SG7D4XP2J1"
};

// Ініціалізація Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Ініціалізація auth
const analytics = getAnalytics(app);

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
      // Реєстрація користувача
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          alert('Реєстрація успішна!');
          this.setState({ errorMessage: '' });
        })
        .catch((error) => {
          this.setState({ errorMessage: `Помилка при реєстрації: ${error.message}` });
        });
    } else {
      // Авторизація користувача
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          alert('Авторизація успішна!');
          this.setState({ errorMessage: '' });
        })
        .catch((error) => {
          this.setState({ errorMessage: 'Невірний email або пароль' });
        });
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
