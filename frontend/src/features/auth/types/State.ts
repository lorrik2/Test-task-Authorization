import { User } from './User';

export type State = {
  users: User[];
  user: User | {};
  error: string | undefined;
};
