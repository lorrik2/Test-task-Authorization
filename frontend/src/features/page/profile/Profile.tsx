import React from 'react';
import './styles/profile.scss';
import avatar from './assets/avatar.svg';
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';

function Profile(): JSX.Element {
  const user = useSelector((store: RootState) => store.userState.user);
  console.log(user, '<[====');
  return (
    <div className="profile__container">
      <div className="profile__container__avatar">
        <img src={avatar} alt="profile-avatar" />
      </div>
      <div className="profile__container__info">
        <h5>Имя: {'id' in user && user.name}</h5>
        <h5>Логин: {'id' in user && user.login}</h5>
      </div>
    </div>
  );
}

export default Profile;
