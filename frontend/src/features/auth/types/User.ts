export type User = {
  id: number;
  balance: string;
  picture: string;
  age: number;
  name: string;
  gender: string;
  company: string;
  email: string;
  password: string;
};

export type UserId = User['id'];
