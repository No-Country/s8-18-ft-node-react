// src/components/Register.tsx
import React from 'react'
import { Link } from 'react-router-dom'

const Register: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gradient-to-r from-login-dark to-login-lessdark">
      <div className="rounded p-10 sm:mx-auto sm:w-full sm:max-w-sm bg-background-form/20">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://www.svgrepo.com/show/435930/register.svg"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Registrate
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
              Nombre
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="block w-full rounded-md border-0 py-1.5 bg-gray-100 text-gray-600 shadow-sm ring-1 ring-inset placeholder:text-placehoder-login focus:ring-2 focus:ring-inset focus:ring-red
                -600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
              Apellidos
            </label>
            <div className="mt-2">
              <input
                id="lastname"
                name="lastname"
                type="text"
                autoComplete="lastname"
                required
                className="block w-full rounded-md border-0 py-1.5 bg-gray-100 text-gray-600 shadow-sm ring-1 ring-inset placeholder:text-placehoder-login focus:ring-2 focus:ring-inset focus:ring-red
                -600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
              Dirección Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 bg-gray-100 text-gray-600 shadow-sm ring-1 ring-inset placeholder:text-placehoder-login focus:ring-2 focus:ring-inset focus:ring-red
                -600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-white"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-white"
              >
                Confirma tu contraseña
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 bg-gray-100 text-gray-600 shadow-sm ring-1 ring-inset placeholder:text-placehoder-login focus:ring-2 focus:ring-inset focus:ring-red
                -600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Registrate
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-white">
          Ya tienes cuenta? Inicia sesión{' '}
          <Link
            to={'/login'}
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

export default Register
