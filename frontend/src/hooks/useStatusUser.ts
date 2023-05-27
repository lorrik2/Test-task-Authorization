import { useEffect, useState } from 'react';

export function useStatusUser(): string | null | undefined {
  const [status, setStatus] = useState<string | null>();

  useEffect(() => {
    const res = localStorage.getItem('user');
    setStatus((prev) => (prev = res));
  });
  return status;
}
