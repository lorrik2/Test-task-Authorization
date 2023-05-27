import React from 'react';
import './styles/main.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

function MainPage(): JSX.Element {
  const { user } = useSelector((store: RootState) => store.userState);
  console.log(user.map((el) => el.name));
  return (
    <div className="main-article">
      <h1></h1>
      <h4>Welcome to our service &#128075;</h4>
      <h5>
        In order to use it you need to <span> login</span> or <span>register</span>
      </h5>
    </div>
  );
}

export default MainPage;
