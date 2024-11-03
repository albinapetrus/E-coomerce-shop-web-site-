import React, { useState } from 'react';
import useAuth from '../hooks/useAuth'; // Підключення хуку
import styles from '../assets/Form.module.css';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const { user, login, register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isRegistering) {
      // Реєстрація
      await register(email, password); // Виклик функції реєстрації
    } else {
      // Авторизація
      await login(email, password); // Виклик функції авторизації
    }
  };

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className={styles.authForm}>
      <h2>{isRegistering ? 'Реєстрація' : 'Авторизація'}</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.btn}>
          {isRegistering ? 'Зареєструватися' : 'Увійти'}
        </button>
      </form>
      <p>
        {isRegistering ? 'Вже маєте акаунт?' : 'Немає акаунта?'}
        <span onClick={toggleForm} className={styles.toggleLink}>
          {isRegistering ? ' Увійдіть' : ' Реєструйтесь'}
        </span>
      </p>
      {user && (
        <p>Ви авторизовані!</p>
      )}
    </div>
  );
};

export default Form;

