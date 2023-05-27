import { User } from './User';

export type State = {
  user: User[];
  error: string | undefined;
};
