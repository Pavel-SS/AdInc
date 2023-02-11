/* eslint-disable no-magic-numbers */
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import arrowIcon from '../../assets/svg/arrow_left.svg';
import loginBg from '../../assets/svg/loginBg1.svg';
import varningIcon from '../../assets/svg/mdi_warning-circle.svg';
import { Button } from '../../common/Button/Button';
import { InputText } from '../../common/Input/InputText';
import s from '../signUp/signup.module.scss';

const Schema = Yup.object().shape({
  email: Yup.string().email().required('E-mail field is required'),
  password: Yup.string()
    .required('This field is required')
    .min(8, 'Pasword must be 8 or more characters')
    .max(16)
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])\w+/,
      'Password ahould contain at least one uppercase and lowercase character',
    )
    .matches(/\d/, 'Password should contain at least one number')
    .matches(
      /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
      'Password should contain at least one special character',
    ),
});

export const SignIn = () => {
  return (
    <>
      <div
        className="absolute top-0 bottom-0 
        left-0 right-0 bg-contain bg-no-repeat bg-bottom -z-20"
        style={{ backgroundImage: `url(${loginBg})` }}
      />
      <div className="mx-auto max-w-7xl px-6 mt-7xl">
        <div className="w-32">
          <Link to="/" className="flex gap-4 mb-13 z-20 relative">
            <img src={arrowIcon} alt="pic" />
            <span className="underline">Главная</span>
          </Link>
        </div>
        <div
          className="flex items-center 
        justify-center 
        px-4 
        sm:px-6 
        lg:px-8"
        >
          <div className="w-full max-w-screen-sm space-y-8">
            <h2
              className={`text-left text-5xl font-bold text-yellow_descr mb-10 ${s.title}`}
            >
              Вход
            </h2>
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={Schema}
              onSubmit={() => {}}
            >
              {({ values, errors, handleSubmit, handleChange, handleBlur }) => {
                return (
                  <form
                    className="flex flex-col w-[39.375rem] mx-auto"
                    action="#"
                    method="POST"
                    onSubmit={handleSubmit}
                  >
                    {(errors.email || errors.password) && (
                      <div className="error float-left mb-4" style={{ color: 'red' }}>
                        <img className="inline-block mr-3" src={varningIcon} alt="pic" />
                        {(errors.email && <span>{errors.email}</span>) ||
                          (errors.password && <span>{errors.password}</span>)}
                      </div>
                    )}
                    <InputText
                      value={values.email}
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Email"
                      className="mb-6 w-full border-2 border-light_purple rounded-lg text-base py-4 pl-6 shadow-shadow-dark"
                    />
                    <InputText
                      value={values.password}
                      name="password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Пароль"
                      className="mb-6 w-full border-2 border-light_purple rounded-lg text-base py-4 pl-6 shadow-shadow-dark"
                    />

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <label
                          htmlFor="remember-me"
                          className="ml-2 block text-gray-900 text-base"
                        >
                          <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          Запомнить меня
                        </label>
                      </div>

                      <div className="text-sm">
                        <Link to="/" className="underline text-blue_descr text-base">
                          Забыли пароль?
                        </Link>
                      </div>
                    </div>
                    <div className="flex items-center mt-10">
                      <Button
                        type="submit"
                        className="border-0 w-57 bg-yellow_descr rounded-lg text-base py-4 px-10xl shadow-shadow-dark font-bold"
                        btnName="Войти"
                      />
                      <Link
                        to="/signup"
                        className="ml-10 underline text-light_purple hover:text-purple-700 font-semibold"
                      >
                        Зарегистрироваться
                      </Link>
                    </div>
                  </form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};
