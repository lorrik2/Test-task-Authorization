import React, { useEffect, useState } from 'react';
import './styles/navbar.scss';
import logoUser from './assets/userLogo.svg';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useStatusUser } from '../../../hooks/useStatusUser';

function Navbar(): JSX.Element {
  const user = useSelector((store: RootState) => store.userState.user);
  const [isUser, setIsUser] = useState({});
  const navigate = useNavigate();

  const onHandleClickOut = (e: React.MouseEvent): void => {
    navigate('/');
    e.preventDefault();
    localStorage.removeItem('user');
    localStorage['isAuthenticated'] = 'false';
    window.location.reload();
  };
  const status = useStatusUser();

  return (
    <>
      <nav className="navbar">
        <div className="nav-wrapper">
          <NavLink to={status === 'true' ? '/profile' : '/login'} className="brand-logo right">
            <img className="navbar__logo__nav" src={logoUser} alt="avatar" />
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
