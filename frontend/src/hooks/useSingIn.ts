import React, { useState } from 'react';

function useSingIn(initialValue: string): any {
  const [login, setLogin] = useState(initialValue);
  const [password, setPassword] = useState(initialValue);

  const handleChange = (type: string, e: React.ChangeEvent<HTMLInputElement>): void => {
    switch (type) {
      case 'login':
        setLogin(e.target.value.trim());
        break;
      case 'password':
        setPassword(e.target.value.trim());
        break;
    }
  };
  return [login, password, handleChange];
}

export default useSingIn;
