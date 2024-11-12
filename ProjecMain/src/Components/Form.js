// Імпортуємо React і компонент Component з бібліотеки react для створення класового компонента
import React, { Component } from 'react';
// Імпортуємо стилі з CSS-модуля для компоненту
import styles from '../assets/Form.module.css';

// Імпортуємо необхідні функції з Firebase
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"; 
import { getAnalytics } from "firebase/analytics";

// Конфігурація Firebase для підключення до нашого Firebase-проекту
const firebaseConfig = {
  apiKey: "AIzaSyA09Cwh_qwZUHQpN8g3qSbC1tnjFcifn0g",  // API-ключ для автентифікації запитів
  authDomain: "projecmain.firebaseapp.com",         // Домен автентифікації
  projectId: "projecmain",                          // Ідентифікатор проекту
  storageBucket: "projecmain.firebasestorage.app",  // URL для сховища Firebase
  messagingSenderId: "673856902327",                // Ідентифікатор відправника повідомлень
  appId: "1:673856902327:web:a5dc55f89151514bb3a932", // Ідентифікатор програми
  measurementId: "G-SG7D4XP2J1"                     // Ідентифікатор аналітики
};

// Ініціалізація Firebase додатку
const app = initializeApp(firebaseConfig);
// Ініціалізація автентифікації
const auth = getAuth(app); 
// Ініціалізація аналітики
const analytics = getAnalytics(app);

// Створення класового компонента Form для роботи з формою автентифікації
class Form extends Component {
  constructor(props) {
    super(props);
    // Ініціалізуємо стан компоненту
    this.state = {
      email: '',             // Поле для введення email
      password: '',          // Поле для введення пароля
      isRegistering: false,  // Вказує, чи користувач реєструється
      errorMessage: '',      // Зберігає повідомлення про помилку
    };
  }

  // Метод для оновлення стану при зміні полів форми
  handleChange = (e) => {
    // Оновлюємо стан на основі змін, які відбуваються в інпуті (email або password)
    // В e.target.name — це ім'я інпуту, тобто 'email' або 'password'.
    // e.target.value — це значення, яке введено в поле
    this.setState({ [e.target.name]: e.target.value });
  };

  // Метод для перемикання режиму між реєстрацією та авторизацією
  toggleForm = () => {
    // Змінюємо стан isRegistering, щоб переключити між формою реєстрації та авторизації
    // Якщо користувач реєструється, то форма повинна переключитися на авторизацію і навпаки
    this.setState((prevState) => ({ isRegistering: !prevState.isRegistering }));
  };

  // Метод для обробки відправки форми
  handleSubmit = (e) => {
    e.preventDefault();  // Попереджаємо стандартну поведінку форми (перезавантаження сторінки)

    const { email, password, isRegistering } = this.state; // Отримуємо значення email, password та isRegistering з поточного стану

    if (isRegistering) {
      // Якщо користувач реєструється, використовуємо Firebase для реєстрації
      // Викликаємо createUserWithEmailAndPassword з auth (ініціалізовано раніше) і передаємо email та password
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          // Якщо реєстрація пройшла успішно
          alert('Реєстрація успішна!');  // Показуємо повідомлення про успішну реєстрацію
          this.setState({ errorMessage: '' }); // Очищаємо помилку, якщо вона була
        })
        .catch((error) => {
          // Якщо сталася помилка при реєстрації
          // Виводимо повідомлення про помилку
          this.setState({ errorMessage: `Помилка при реєстрації: ${error.message}` });
        });
    } else {
      // Якщо не реєстрація, то це авторизація
      signInWithEmailAndPassword(auth, email, password)  // Викликаємо Firebase для авторизації
        .then(() => {
          // Якщо авторизація пройшла успішно
          alert('Авторизація успішна!'); // Показуємо повідомлення про успішну авторизацію
          this.setState({ errorMessage: '' }); // Очищаємо помилку
        })
        .catch((error) => {
          // Якщо сталася помилка при авторизації
          // Показуємо повідомлення про неправильний email або пароль
          this.setState({ errorMessage: 'Невірний email або пароль' });
        });
    }
  };

  // Метод render для відображення форми
  render() {
    const { email, password, isRegistering, errorMessage } = this.state;
    return (
      <div className={styles.authForm}> {/* Стиль форми з CSS-модуля */}
        <h2>{isRegistering ? 'Реєстрація' : 'Авторизація'}</h2> {/* Заголовок змінюється в залежності від стану */}
        <form onSubmit={this.handleSubmit}>  {/* Пов'язуємо форму з методом handleSubmit */}
          <div className={styles.formGroup}> 
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={email}  // Зв'язуємо значення з поточним станом
              onChange={this.handleChange} // Викликаємо handleChange при кожній зміні
              required  // Вимагаємо заповнення цього поля
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Пароль:</label>
            <input
              type="password"
              name="password"
              value={password}  // Зв'язуємо значення з поточним станом
              onChange={this.handleChange}  // Викликаємо handleChange при кожній зміні
              required  // Вимагаємо заповнення цього поля
            />
          </div>
          {/* Якщо є помилка, відображаємо її */}
          {errorMessage && <p className={styles.error}>{errorMessage}</p>}
          <button type="submit" className={styles.btn}>
            {isRegistering ? 'Зареєструватися' : 'Увійти'}  {/* Кнопка змінюється в залежності від режиму */}
          </button>
        </form>
        <p>
          {isRegistering ? 'Вже маєте акаунт?' : 'Немає акаунта?'} {/* Текст внизу форми */}
          <span onClick={this.toggleForm} className={styles.toggleLink}>
            {isRegistering ? ' Увійдіть' : ' Реєструйтесь'}  {/* Кнопка для переключення між реєстрацією та авторизацією */}
          </span>
        </p>
      </div>
    );
  }
}

// Експортуємо компонент для використання в інших частинах програми
export default Form;

