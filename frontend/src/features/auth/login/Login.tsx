import React from 'react';
import './styles/login.scss';
import { Link } from 'react-router-dom';

function Login(): JSX.Element {
  return (
    <section className="log__form">
      <div className="row">
        <form className="col s12 log__form__inputgroup">
          <h4>Войти</h4>
          <div className="row">
            <div className="input-field col s12">
              <input id="last_name" type="text" className="validate" />
              <label htmlFor="last_name">Логин</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate" />
              <label htmlFor="password">Пароль</label>
            </div>
            <span>
              Если у вас еще нету аккаунта, то <Link to="/registration">зарегестрируйтесь</Link>
            </span>
          </div>

          <button type="submit" className="waves-effect waves-light btn log__form__inputgroup__btn">
            Войти
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
