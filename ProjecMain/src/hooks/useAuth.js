import { useState } from 'react';

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const register = async (email, password) => {
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Failed to register'); // Додайте обробку помилок
            }

            const data = await response.json();
            setUser(data.user); // Припустимо, що ви отримуєте дані користувача
        } catch (err) {
            setError(err.message); // Встановлюємо повідомлення про помилку
            console.error(err); // Виводимо помилку в консоль для налагодження
        }
    };

    return { user, register, error };
};

export default useAuth;

