// Імпортуємо необхідні хуки та модулі з React і Firebase
import { useState } from 'react'; // Хук для управління станом
import { auth } from './firebaseConfig'; // Імпорт Firebase конфігурації для автентифікації
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'; // Функції для реєстрації та входу користувача

export function useAuth() {
  // Стан для зберігання повідомлення про помилку
  const [errorMessage, setErrorMessage] = useState('');

  // Функція для реєстрації нового користувача
  const register = async (email, password) => {
    try {
      // Використовуємо Firebase функцію для створення нового користувача
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Реєстрація успішна!'); // Повідомлення про успішну реєстрацію
      setErrorMessage(''); // Очищаємо повідомлення про помилку
    } catch (error) {
      // Встановлюємо повідомлення про помилку, якщо щось пішло не так
      setErrorMessage(`Помилка при реєстрації: ${error.message}`);
    }
  };

  // Функція для авторизації користувача
  const login = async (email, password) => {
    try {
      // Використовуємо Firebase функцію для авторизації користувача
      await signInWithEmailAndPassword(auth, email, password);
      alert('Авторизація успішна!'); // Повідомлення про успішну авторизацію
      setErrorMessage(''); // Очищаємо повідомлення про помилку
    } catch (error) {
      // Встановлюємо повідомлення про помилку, якщо email або пароль невірний
       setErrorMessage('Невірний email або пароль ');  
    }
  };

  // Повертаємо функції для реєстрації, авторизації та повідомлення про помилки
  return { register, login, errorMessage };
}
