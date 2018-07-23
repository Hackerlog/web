export interface ISignup {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isLoading: boolean;
  error: string | null;
  username: string;
  showUsername: boolean;
  signupFormIsValid: boolean;
  usernameIsAvailable: boolean;
  usernameIsValid: boolean;
  handleInputChange: (event: React.FormEvent<HTMLInputElement>) => void;
  transitionToUsername: () => void;
  handleSignup: (event: React.MouseEvent<HTMLButtonElement>) => IterableIterator<void>;
}
