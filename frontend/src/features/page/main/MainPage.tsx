import React, { useEffect, useState } from 'react';
import './styles/main.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { Link } from 'react-router-dom';
import { useStatusUser } from '../../../hooks/useStatusUser';

function MainPage(): JSX.Element {
  const user = useSelector((store: RootState) => store.userState.user);
  const [data, setData] = useState({});
  const status = useStatusUser();
  useEffect(() => {
    if (status) setData(user);
  }, [data, user, status]);

  return (
    <div className="main-article">
      {status !== 'true' ? (
        <>
          <h4>Добро пожаловать на наш сервис &#128075;</h4>
          <h5>
            Для того чтобы воспользоваться им, вам необходимо{' '}
            <span>
              <Link to="/login">войти</Link>
            </span>{' '}
            или{' '}
            <span>
              <Link to="/registration">зарегистрироваться</Link>
            </span>
          </h5>
        </>
      ) : (
        <h5>Добро пожаловать {status && 'id' in user && user.name}</h5>
      )}
    </div>
  );
}

export default MainPage;
