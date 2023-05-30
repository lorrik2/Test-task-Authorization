import React, { useEffect, useState } from 'react';

import './App.css';
import Navbar from '../features/page/navbar/Navbar';
import MainPage from '../features/page/main/MainPage';
import { Route, Routes } from 'react-router-dom';
import Profile from '../features/page/profile/Profile';
import Registration from '../features/auth/registration/Registration';
import Login from '../features/auth/login/Login';
import { RootState, useAppDispatch } from '../store/store';
//import { getUsers } from '../features/auth/userSlice';
import data from '../server/data.json';
import { getUser } from '../features/auth/userSlice';
import { useSelector } from 'react-redux';

function App(): JSX.Element {
  const [userOnline, setUserOnline] = useState('');
  const dispatch = useAppDispatch();
  const user = useSelector((store: RootState) => store.userState.user);

  useEffect(() => {
    function checkUserData(): void {
      const item = localStorage.getItem('user');
      if (item) {
        setUserOnline(item);
      }
    }
    window.addEventListener('storage', checkUserData);
  }, []);

  useEffect(() => {
    const userData = data;
    dispatch(getUser(userData));
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
