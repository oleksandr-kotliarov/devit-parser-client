export interface LoginInput {
  email: string;
  password: string;
}

export type RegistrationInput = LoginInput & { code: string };
