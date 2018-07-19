export interface IUserRegister {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface IUserUpdate {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

export interface IUser {
  id: number | undefined;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
}
