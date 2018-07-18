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
  firstName: string;
  lastName: string;
  email: string;
  token: string;
}

export interface IUserLogin {
  success: boolean;
  error?: string;
}
