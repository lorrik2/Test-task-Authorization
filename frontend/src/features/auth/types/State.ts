import { User } from './User';

export type State = {
  usersData: User[];
  error: string | undefined;
};
