import React from 'react';
import './styles/main.scss';

function MainPage(): JSX.Element {
  return (
    <div className="main-article">
      <h4>Welcome to our service &#128075;</h4>
      <h5>
        In order to use it you need to <span> login</span> or <span>register</span>
      </h5>
    </div>
  );
}

export default MainPage;
