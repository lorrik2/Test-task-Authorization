import React, { useEffect, useState } from 'react';
import './styles/login.scss';
import { Link, useNavigate } from 'react-router-dom';
import useSingIn from '../../../hooks/useSingIn';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store/store';
import { singIn } from '../userSlice';

function Login(): JSX.Element {
  const [error, setError] = useState('');
  const [login, password, handleChange] = useSingIn('');
  const [userAuth, setUserAuth] = useState({});
  const [statusAuth, setStatusAuth] = useState(false);

  const { users } = useSelector((store: RootState) => store.userState);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onHandleSubmitFormIn = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const validateSingIn = users.filter((el) => el.login === login && el.password === password);

    if (validateSingIn.length === 1) {
      setError('');
      setUserAuth(validateSingIn[0]);
      setStatusAuth(true);
    } else {
      setError('Имя пользователя или пароль введены не верно');
    }
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(userAuth));
    localStorage.setItem('isAuthenticated', JSON.stringify(statusAuth));
    dispatch(singIn(userAuth));
    if (statusAuth) {
      navigate('/profile');
    }
  }, [userAuth, statusAuth]);

  return (
    <section className="log__form">
      <div className="row">
        <form className="col s12 log__form__inputgroup" onSubmit={onHandleSubmitFormIn}>
          <h4>Войти</h4>
          <div className="row">
            <div className="input-field col s12">
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
            <div className="input-field col s12">
              <input
                id="password"
                type="password"
                className="validate"
                autoComplete="none"
                value={password}
                required
                onChange={(e) => handleChange('password', e)}
              />
              <label htmlFor="password">Пароль</label>
            </div>
            <span>
              Если у вас еще нету аккаунта, то <Link to="/registration">зарегестрируйтесь</Link>
            </span>
          </div>
          <span className="">{error}</span>
          <button type="submit" className="waves-effect waves-light btn log__form__inputgroup__btn">
            Войти
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
