import React from 'react';

import './App.css';
import Navbar from '../features/page/navbar/Navbar';
import MainPage from '../features/page/main/MainPage';
import { Route, Routes } from 'react-router-dom';
import Profile from '../features/page/profile/Profile';

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<MainPage />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
