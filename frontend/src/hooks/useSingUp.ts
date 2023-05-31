import React, { useState } from 'react';

function useSingUp(initialValue: string): any {
  const [name, setName] = useState(initialValue);
  const [login, setLogin] = useState(initialValue);
  const [password, setPassword] = useState(initialValue);
  const [secondPassword, setSecondPassword] = useState(initialValue);

  const handleChange = (type: string, e: React.ChangeEvent<HTMLInputElement>): void => {
    switch (type) {
      case 'name':
        setName(e.target.value.trim());
        break;
      case 'login':
        setLogin(e.target.value.trim());
        break;
      case 'password':
        setPassword(e.target.value.trim());
        break;
      case 'secondPassword':
        setSecondPassword(e.target.value.trim());
        break;
    }
  };
  return [name, login, password, secondPassword, handleChange];
}

export default useSingUp;
