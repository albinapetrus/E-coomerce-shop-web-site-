// cypress/integration/form.spec.js

describe('Form Component E2E Tests', () => {
    beforeEach(() => {
      cy.visit('/');  // Перейдіть на головну сторінку вашого додатка
    });
  
    it('should render the login form by default', () => {
      cy.contains('Авторизація');  // Перевіряє, що текст "Авторизація" є на сторінці
    });
  
    it('should toggle to registration form when clicking the link', () => {
      cy.contains('Немає акаунта?').click();  // Клік по лінку "Немає акаунта?"
      cy.contains('Реєстрація');  // Перевірка, що форма змінилася на "Реєстрація"
    });
  
    it('should show error message for incorrect login', () => {
      cy.get('input[name="email"]').type('wrong@example.com');  // Введення неправильного email
      cy.get('input[name="password"]').type('wrongpassword');  // Введення неправильного пароля
      cy.get('button').contains('Увійти').click();  // Клік по кнопці "Увійти"
      cy.contains('Невірний email або пароль');  // Перевірка наявності помилки
    });
  
    it('should successfully log in with correct credentials', () => {
      const validUser = {
        email: 'validuser@example.com',  // Використовуйте реальні дані користувача з тестових даних
        password: 'validpassword123',
      };
      cy.get('input[name="email"]').type(validUser.email);
      cy.get('input[name="password"]').type(validUser.password);
      cy.get('button').contains('Увійти').click();
      cy.contains('Авторизація успішна!').should('exist');  // Перевірка на успішну авторизацію
    });
  
    it('should show error when registering with an existing email', () => {
      cy.contains('Немає акаунта?').click();  // Перехід на форму реєстрації
      cy.get('input[name="email"]').type('existinguser@example.com');  // Введення існуючого email
      cy.get('input[name="password"]').type('newpassword123');
      cy.get('button').contains('Зареєструватися').click();
      cy.contains('Користувач з таким email вже існує');  // Перевірка на помилку при реєстрації з існуючим email
    });
  
    it('should register successfully with new email', () => {
      cy.contains('Немає акаунта?').click();
      cy.get('input[name="email"]').type('newuser@example.com');  // Новий email для реєстрації
      cy.get('input[name="password"]').type('newpassword123');
      cy.get('button').contains('Зареєструватися').click();
      cy.contains('Реєстрація успішна!').should('exist');  // Перевірка на успішну реєстрацію
    });
  });
  