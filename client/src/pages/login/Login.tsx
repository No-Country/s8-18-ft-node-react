// src/components/Login.tsx
import React from 'react'
import { Link, useNavigate  } from 'react-router-dom'
type SubmitHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;

const Login: React.FC = () => {
  const navigate = useNavigate();
  //manjear login a ruta home en caso de que email = admi@ y passwor=admin
  const handleSubmit: SubmitHandler = (event) => {

    event.preventDefault();
    // Aquí puedes manejar la lógica para procesar el envío del formulario
    // verificate form
    // if (email === 'admin' && password === 'admin') {
    //   navigate('/home')
    // } else {
    //   alert('Usuario o contraseña incorrecta')
    // }
    
    navigate('/')
  };
  


  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gradient-to-r from-login-dark to-login-lessdark">
      <div className="rounded p-10 sm:mx-auto sm:w-full sm:max-w-sm bg-background-form/20">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto fill-white"
            src="https://cdn-icons-png.flaticon.com/512/1250/1250650.png?w=740&t=st=1685384316~exp=1685384916~hmac=511ad588cba089855497319400688b5ed8cbcc9465f8798621cc9eac7393c3b0"
            alt="Your Company"
          />
  
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-font-general">
            Inicie sesión en su cuenta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-font-general"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Ingrese su correo electrónico"
                  required
                  className="block w-full rounded-md border-0 py-1.5 bg-gray-100 text-gray-600 shadow-sm ring-1 ring-inset placeholder:text-placehoder-login focus:ring-2 focus:ring-inset focus:ring-red
                  -600 sm:text-sm sm:leading-6 "
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-font-general"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-green-500 hover:text-green-700">
                    Olvidó su contraseña?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder='Ingrese su contraseña'
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 bg-gray-100 text-gray-600 shadow-sm ring-1 ring-inset placeholder:text-placehoder-login focus:ring-2 focus:ring-inset focus:ring-red
                  -600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
              onClick={handleSubmit}
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Iniciar Sesión
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-white">
            No estás registrado? Registrate{' '}
            <Link
              to={'/register'}
              className="font-semibold leading-6 text-green-500 hover:text-green-700"
            >
              Aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
