export type User = {
  id: number;
  name: string;
  login: string;
  password: string;
};

export type UserId = User['id'];
