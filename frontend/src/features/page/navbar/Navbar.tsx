import React from 'react';
import './styles/navbar.scss';
import logoUser from './assets/userLogo.svg';
import { NavLink, Outlet } from 'react-router-dom';

function Navbar(): JSX.Element {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <NavLink to="#" className="brand-logo right">
            <img className="logo__nav" src={logoUser} alt="avatar" />
          </NavLink>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <NavLink to="/">Главная</NavLink>
            </li>
            <li>
              <NavLink to="/login">Войти</NavLink>
            </li>
            <li>
              <NavLink to="/registration">Зарегистрироваться</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Профиль</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
