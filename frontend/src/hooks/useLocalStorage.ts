import { useState, useEffect } from 'react';

export function useLocalStorage(key: any, initialValue: any): any {
  const myStorage = window.localStorage;

  const [value, setValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    const item = JSON.stringify(value);
    window.localStorage.setItem(key, item);
    // localStorage.removeItem('user');
    // eslint-disable-next-line
  }, [value]);

  return [value, setValue];
}
