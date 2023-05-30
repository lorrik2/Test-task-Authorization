import { useEffect, useState } from 'react';

export function useStatusUser(): string | null | undefined {
  const [status, setStatus] = useState<string | null>();

  useEffect(() => {
    const item = localStorage.getItem('user');
    if (item) {
      setStatus(item);
    }
  });

  return status;
}
