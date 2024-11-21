// Імпортуємо React та useState з бібліотеки React
import React, { useState } from 'react'; 
// Імпортуємо стилі з файлу Form.module.css для компонента форми
import styles from '../assets/Form.module.css'; 
// Імпортуємо кастомний хук useAuth, який використовується для авторизації та реєстрації користувачів
import { useAuth } from '../hooks/useAuth';

const Form = () => {
  // Стани для email, password, і для визначення, чи користувач реєструється, чи авторизується
  const [email, setEmail] = useState(''); // Зберігає значення email користувача
  const [password, setPassword] = useState(''); // Зберігає значення пароля
  const [isRegistering, setIsRegistering] = useState(false); // Стан, що показує, чи користувач на формі реєстрації
  const { register, login, errorMessage } = useAuth(); // Використовуємо кастомний хук для автентифікації

  // Функція для обробки зміни полів форми email та password
  const handleChangeEmail = (e) => setEmail(e.target.value); // Оновлює стан email при зміні в інпуті
  const handleChangePassword = (e) => setPassword(e.target.value); // Оновлює стан пароля при зміні в інпуті

  // Функція для обробки відправки форми
  const handleSubmit = async (e) => {
    e.preventDefault(); // Відміняє стандартну поведінку форми (перезавантаження сторінки)
    if (isRegistering) {
      // Якщо користувач на формі реєстрації, виконуємо функцію register з кастомного хука
      await register(email, password);
    } else {
      // Якщо користувач на формі авторизації, виконуємо функцію login з кастомного хука
      await login(email, password);
    }
  };

  // Функція для перемикання між реєстрацією та авторизацією
  const toggleForm = () => setIsRegistering((prev) => !prev); // Змінює значення isRegistering на протилежне

  // Повертаємо JSX для відображення форми
  return (
    <div className={styles.authForm}> {/* Використовуємо клас для стилізації форми */}
      <h2>{isRegistering ? 'Реєстрація' : 'Авторизація'}</h2> {/* Заголовок форми */}
      <form onSubmit={handleSubmit}> {/* Викликаємо handleSubmit при відправці форми */}
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={email} // Прив'язуємо до стана email
            onChange={handleChangeEmail} // Викликаємо handleChangeEmail при зміні поля
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            name="password"
            value={password} // Прив'язуємо до стана password
            onChange={handleChangePassword} // Викликаємо handleChangePassword при зміні поля
            required
          />
        </div>
        {/* Виводимо повідомлення про помилку, якщо воно є */}
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        <button type="submit" className={styles.btn}>
          {/* Кнопка змінюється в залежності від режиму: реєстрація або авторизація */}
          {isRegistering ? 'Зареєструватися' : 'Увійти'}
        </button>
      </form>
      <p>
        {/* Перемикання між формами реєстрації та авторизації */}
        {isRegistering ? 'Вже маєте акаунт?' : 'Немає акаунта?'}
        <span onClick={toggleForm} className={styles.toggleLink}>
          {/* Відповідний текст для перемикання */}
          {isRegistering ? ' Увійдіть' : ' Реєструйтесь'}
        </span>
      </p>
    </div>
  );
};

export default Form;

