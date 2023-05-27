import React, { useState } from 'react';

function useSingUp(initialValue: string): any {
  const [name, setName] = useState(initialValue);
  const [login, setLogin] = useState(initialValue);
  const [password, setPassword] = useState(initialValue);
  const [secondPassword, setSecondPassword] = useState(initialValue);

  const handleChange = (type: string, e: React.ChangeEvent<HTMLInputElement>): void => {
    switch (type) {
      case 'name':
        setName(e.target.value);
        break;
      case 'login':
        setLogin(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      case 'secondPassword':
        setSecondPassword(e.target.value);
    }
  };
  return [name, login, password, secondPassword, handleChange];
}

export default useSingUp;
