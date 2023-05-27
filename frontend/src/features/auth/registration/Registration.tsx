import React from 'react';
import './styles/registartion.scss';

function Registration(): JSX.Element {
  return (
    <section className="reg__form">
      <div className="row">
        <form className="col s12 reg__form__inputgroup">
          <h4>Регистрация</h4>
          <div className="row">
            <div className="input-field col s6">
              <input id="first_name" type="text" className="validate" />
              <label htmlFor="first_name">Имя</label>
            </div>
            <div className="input-field col s6">
              <input id="last_name" type="text" className="validate" />
              <label htmlFor="last_name">Логин</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate" />
              <label htmlFor="password">Пароль</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate" />
              <label htmlFor="password">Повторите пароль</label>
            </div>
          </div>
          <button type="submit" className="waves-effect waves-light btn reg__form__inputgroup__btn">
            Зарегестрироваться
          </button>
        </form>
      </div>
    </section>
  );
}

export default Registration;
