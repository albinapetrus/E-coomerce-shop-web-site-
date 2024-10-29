import React, { Component } from 'react';


class   Form extends Component {
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
    // Обробка логіки авторизації або реєстрації
    console.log(this.state);
  };

  render() {
    const { email, password, isRegistering } = this.state;
    return (
      <div className="auth-form">
        <h2>{isRegistering ? 'Реєстрація' : 'Авторизація'}</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Пароль:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit" className="btn">
            {isRegistering ? 'Зареєструватися' : 'Увійти'}
          </button>
        </form>
        <p>
          {isRegistering ? 'Вже маєте акаунт?' : 'Немає акаунта?'}
          <span onClick={this.toggleForm} className="toggle-link">
            {isRegistering ? ' Увійдіть' : ' Реєструйтесь'}
          </span>
        </p>
      </div>
    );
  }
}

export default Form;
