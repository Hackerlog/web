export interface ILogin {
  email: string;
  password: string;
  error: string | null;
  isLoading: boolean;
  handleEmailChange: (event: React.FormEvent<HTMLInputElement>) => void;
  handlePasswordChange: (event: React.FormEvent<HTMLInputElement>) => void;
  handleLogin: (event: React.FormEvent<HTMLFormElement>) => void;
}
