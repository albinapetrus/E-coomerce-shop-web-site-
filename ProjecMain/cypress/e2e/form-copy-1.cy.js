describe('The Form Component', () => {
  beforeEach(() => {
    // Navigate to the initial page and then to the login form page
    cy.visit('http://localhost:3000');
    cy.get('a').contains('Кабінет').click(); // Navigate to the form
  });

  it('allows users to switch between login and register forms', () => {
    // Verify the form starts with the login form
    cy.contains('Авторизація');

    // Switch to registration form and verify
    cy.get('span').contains('Реєструйтесь').click();
    cy.contains('Реєстрація');

    // Switch back to login form and verify
    cy.get('span').contains('Увійдіть').click();
    cy.contains('Авторизація');
  });

 
  it('submits the login form and calls login', () => {
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('alert');
    });

    const email = 'testuser@example.com';
    const password = 'testpassword';

    // Type the login credentials
    cy.get('input[name=email]').type(email);
    cy.get('input[name=password]').type(password);

    // Submit the form
    cy.get('button').contains('Увійти').click();

    // Check if the login process succeeded by verifying a success alert or a redirected URL
    cy.get('@alert').should('have.been.calledWith', 'Авторизація успішна!');
  });
});
