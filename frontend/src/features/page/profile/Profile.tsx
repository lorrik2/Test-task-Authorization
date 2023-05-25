import React from 'react';
import './styles/profile.scss';
import avatar from './assets/avatar.svg';

function Profile(): JSX.Element {
  return (
    <div className="profile__container">
      <div className="profile__container__avatar">
        <img src={avatar} alt="profile-avatar" />
      </div>
      <div className="profile__container__info">
        <h5>Имя:</h5>
        <h5>Почта:</h5>
      </div>
    </div>
  );
}

export default Profile;
