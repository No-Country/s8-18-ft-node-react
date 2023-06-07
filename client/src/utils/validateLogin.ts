import { FormErrors, LoginForm } from "../interfaces/Login";

const initialFormErrors: FormErrors = {
  emailError: null,
  passwordError: null,
};

export const validateLoginForm = (formData: LoginForm): FormErrors => {
  const { email, password } = formData;
  const errors: FormErrors = { ...initialFormErrors };

  // Validación del campo de correo electrónico
  if (!email) {
    errors.emailError = "El correo electrónico es obligatorio";
  } else if (!isValidEmail(email)) {
    errors.emailError = "El correo electrónico no es válido";
  }

  // Validación del campo de contraseña
  if (!password) {
    errors.passwordError = "La contraseña es obligatoria";
  } else if ((password.length < 8)||(password.length > 20)) {
    errors.passwordError = "La contraseña debe tener mas de 6 y mens de 20 caracteres";
  }

  return errors;
};

const isValidEmail = (email: string): boolean => {
  // Expresión regular para validar el formato del correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};