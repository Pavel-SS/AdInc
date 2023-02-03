import { LockClosedIcon } from '@heroicons/react/20/solid';
import '@fontsource/montserrat';

import loginBg from './loginBg1.svg';

export const SignIn = () => {
  return (
    <div
      className="absolute top-0 bottom-0 
      left-0 right-0 flex items-center 
      justify-center 
      px-4 
      sm:px-6 
      lg:px-8 
      bg-contain 
      bg-no-repeat 
      bg-bottom"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div className="w-full max-w-screen-sm space-y-8">
        <h2
          className="text-left not-italic text-5xl"
          style={{
            fontFamily: 'Montserrat',
            fontWeight: 700,
            color: '#FFEB3C',
            textShadow:
              '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black, 4px 4px 0px #000000',
          }}
        >
          Вход
        </h2>
        <form className="mt-10 space-y-6" action="#" method="POST">
          <input
            id="email-address"
            name="email-address"
            type="email"
            autoComplete="email"
            required
            className="relative placeholder:font-medium
            block w-full h-14 appearance-none rounded-md border-2 
            border-gray-300 px-3 py-2 
            placeholder:text-base focus:z-10 focus:border-indigo-500 
            focus:outline-none focus:ring-indigo-500 sm:text-sm shadow-[4px_4px_0_rgba(0,0,0,0.8)]
            "
            placeholder="Email"
          />
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="relative 
            block w-full h-14 appearance-none rounded-md border-2 
            border-gray-300 px-3 py-2 
            placeholder:font-medium
            placeholder:text-base focus:z-10 focus:border-indigo-500 
            focus:outline-none focus:ring-indigo-500 sm:text-sm shadow-[4px_4px_0_rgba(0,0,0,0.8)]"
            placeholder="Пароль"
          />

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
              </label>
            </div>

            <div className="text-sm">
              <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
