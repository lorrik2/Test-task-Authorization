import React, { useCallback, useEffect, useState } from 'react';
import './styles/registartion.scss';
import useSingUp from '../../../hooks/useSingUp';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store/store';
import { User } from '../types/User';
import { v4 as uuidv4 } from 'uuid';
import { singUp } from '../userSlice';
import closed from './assets/closed.svg';
import open from './assets/open.svg';
import { useNavigate } from 'react-router-dom';

function Registration(): JSX.Element {
  const [error, setError] = useState('');
  const [newUser, setNewUser] = useState({});
  const [precentBar, setPrecentBar] = useState('');
  const [passInputChange, setPassInputChange] = useState('');
  const [passLabel, setPassLabel] = useState('Сложность');
  const [statusAuth, setStatusAuth] = useState(false);
  const [togle, setTogle] = useState(false);
  const [notification, setNotification] = useState(false);

  const [name, login, password, secondPassword, handleChange] = useSingUp('');
  const { users } = useSelector((store: RootState) => store.userState);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const notificationMessage = (): void => {
    setTimeout(() => {
      setNotification(false);
      navigate('/profile');
    }, 1000);
  };

  const onHandleSubmitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const validationLogin = users.map((el) => (el.login !== login ? true : false)).includes(false);
    if (!validationLogin) {
      if (password === secondPassword) {
        const user = {
          id: uuidv4(),
          name: name,
          login: login,
          password: password,
        };
        setError('');
        setNewUser(user);
        setNotification(true);
        notificationMessage();
      } else {
        setError('«Введенные пароли несовпадают»');
      }
    } else {
      setError('«Пользователь с таким логином уже зарегистрирован»');
    }
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(newUser));
    localStorage.setItem('isAuthenticated', JSON.stringify(statusAuth));
    dispatch(singUp(newUser));
  }, [dispatch, newUser]);

  const addClass = (className: string): void => {
    setPrecentBar('');
    if (className) {
      setPrecentBar(className);
    }
  };

  const handlePassInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassInputChange(e.target.value);
    if (passInputChange.length === 0) {
      setPassLabel('Сложность');
      addClass('');
    } else if (passInputChange.length <= 4) {
      setPassLabel('Слабый');
      addClass('weak');
    } else if (passInputChange.length <= 7) {
      setPassLabel('Не плохой');
      addClass('average');
    } else {
      setPassLabel('Отличный');
      addClass('strong');
    }
  };

  const onHandleTogle = (): void => {
    setTogle((prev) => !prev);
  };

  return (
    <>
      <section className="reg__form">
        <div className="row">
          <form className="col s12 reg__form__inputgroup" onSubmit={onHandleSubmitForm}>
            <h4>Регистрация</h4>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="first_name"
                  type="text"
                  className="validate"
                  value={name}
                  required
                  onChange={(e) => handleChange('name', e)}
                />
                <label htmlFor="first_name">Имя</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="last_name"
                  type="text"
                  className="validate"
                  value={login}
                  required
                  onChange={(e) => handleChange('login', e)}
                />
                <label htmlFor="last_name">Логин</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 reg__form__inputgroup__pass">
                <input
                  id="password"
                  type={togle ? 'text' : 'password'}
                  autoComplete="on"
                  className="validate"
                  value={password}
                  required
                  onChange={(e) => {
                    handleChange('password', e);
                    handlePassInput(e);
                  }}
                />
                <img
                  src={togle ? open : closed}
                  alt="eyes"
                  className="reg__form__inputgroup__pass__eyes"
                  onClick={onHandleTogle}
                />

                <label htmlFor="password">Пароль</label>
              </div>
            </div>
            <div className="reg__form__inputgroup__pass-strength">
              <div className="reg__form__inputgroup__strength-percent">
                <span className={precentBar}></span>
              </div>
              <span className="reg__form__inputgroup__strength-label">{passLabel}</span>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="secondPassword"
                  type={togle ? 'text' : 'password'}
                  className="validate"
                  autoComplete="on"
                  value={secondPassword}
                  onChange={(e) => handleChange('secondPassword', e)}
                />
                <label htmlFor="secondPassword">Повторите пароль</label>
              </div>
            </div>
            <span className="reg__form__inputgroup__error">{error}</span>
            <button
              type="submit"
              className="waves-effect waves-light btn reg__form__inputgroup__btn"
              onClick={() => setStatusAuth(true)}>
              Зарегестрироваться
            </button>
          </form>
        </div>
      </section>
      {notification && (
        <div className="reg__form__nendoveb-kubscupon">
          <h5>вы зарегестрировались</h5>
          <div className="reg__form__nendoveb-kubscupon__kacekagen-protsem">
            <div className="reg__form__nendoveb-kubscupon__kacekagen-protsem__akemobvous"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default Registration;
