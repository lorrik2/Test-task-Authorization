import { User } from '../features/auth/types/User';

export const getUsers = (): Promise<User[]> =>
  fetch('../server/data.json').then((response) => response.json());
