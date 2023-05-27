import React, { useEffect, useState } from 'react';
import './styles/navbar.scss';
import logoUser from './assets/userLogo.svg';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useStatusUser } from '../../../hooks/useStatusUser';

function Navbar(): JSX.Element {
  const user = useSelector((store: RootState) => store.userState.user);
  const [isUser, setIsUser] = useState({});

  const onHandleClickOut = (e: React.MouseEvent): void => {
    e.preventDefault();
    localStorage.removeItem('user');
    window.location.reload();
  };
  const status = useStatusUser();
  console.log(status, 'stat');
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <NavLink to={status === 'true' ? '/profile' : '/login'} className="brand-logo right">
            <img className="logo__nav" src={logoUser} alt="avatar" />
          </NavLink>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <NavLink to="/">Главная</NavLink>
            </li>
            {status === 'true' ? (
              <>
                <li>
                  <NavLink to="/profile">Профиль</NavLink>
                </li>
                <li>
                  <NavLink onClick={onHandleClickOut} to="/logout">
                    Выйти
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/login">Войти</NavLink>
                </li>
                <li>
                  <NavLink to="/registration">Зарегистрироваться</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
