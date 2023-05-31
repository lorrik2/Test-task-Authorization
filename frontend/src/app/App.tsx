import React, { useEffect, useState } from 'react';

import './scss/App.scss';
import Navbar from '../features/page/navbar/Navbar';
import MainPage from '../features/page/main/MainPage';
import { Route, Routes } from 'react-router-dom';
import Profile from '../features/page/profile/Profile';
import Registration from '../features/auth/registration/Registration';
import Login from '../features/auth/login/Login';
import { RootState, useAppDispatch } from '../store/store';
//import { getUsers } from '../features/auth/userSlice';
import data from '../server/data.json';
import { useSelector } from 'react-redux';
import { getUsers, singIn, singUp } from '../features/auth/userSlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useSelector((store: RootState) => store.userState.user);
  useEffect(() => {
    if (localStorage.getItem('isAuthenticated')) {
      dispatch(singUp(JSON.parse(localStorage.getItem('user') || '{}')));
    }
  }, [dispatch]);
  //  useEffect(() => {
  //    if (localStorage.getItem('isAuthenticated')) {
  //      dispatch(singIn(JSON.parse(localStorage.getItem('user') || '{}')));
  //    }
  //  }, [dispatch]);

  useEffect(() => {
    const userData = data;
    dispatch(getUsers(userData));
  }, [dispatch]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<MainPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
