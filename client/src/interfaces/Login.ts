export interface LoginForm {
  email: string;
  password: string;
}

export interface FormErrors {
  emailError: string | null;
  passwordError: string | null;
}
