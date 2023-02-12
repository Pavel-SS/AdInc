/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-magic-numbers */
// eslint-disable-next-line import/no-extraneous-dependencies
import { useState } from 'react';

import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import arrowIcon from '../../assets/svg/arrow_left.svg';
import loginBg from '../../assets/svg/loginBg.svg';
import varningIcon from '../../assets/svg/mdi_warning-circle.svg';
import { Button } from '../../common/Button/Button';
import { InputText } from '../../common/Input/InputText';
import s from '../signUp/signup.module.scss';

export const SignIn = () => {
  const [checkboxChecked, setChecked] = useState<boolean>(true);
  const handleChangeCheckbox = () => setChecked(checked => !checked);

  const Schema = Yup.object().shape({
    email: Yup.string().email().required('E-mail field is required'),
    password: Yup.string()
      .required('This field is required')
      .min(8, 'Pasword must be 8 or more characters')
      .max(16)
      .matches(
        /(?=.*[a-z])(?=.*[A-Z])\w+/,
        'Password should contain at least one uppercase and lowercase character',
      )
      .matches(/\d/, 'Password should contain at least one number')
      .matches(
        /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
        'Password should contain at least one special character',
      ),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Schema,
    onSubmit: values => console.log(values),
  });

  return (
    <>
      <div
        className="absolute top-0 bottom-0 sm:min-h-[45rem]
        left-0 right-0 bg-contain bg-no-repeat bg-bottom -z-20"
        style={{ backgroundImage: `url(${loginBg})` }}
      />
      <div className="mx-auto max-w-7xl px-6 mt-20 relative">
        <Link to="/" className="flex gap-4 z-20 absolute w-32 -top-[3.1rem]">
          <img src={arrowIcon} alt="pic" />
          <span className="underline">Главная</span>
        </Link>
        <div
          className="flex items-center justify-center px-4 
        sm:px-6 lg:px-8 h-[50vh] min-h-[300px]"
        >
          <div className="w-full max-w-[32.5rem] space-y-8">
            <h2
              className={`text-left text-5xl font-bold text-yellow_descr mb-10 ${s.title}`}
            >
              Вход
            </h2>
            <form
              className="flex flex-col mx-auto"
              action="#"
              method="POST"
              onSubmit={formik.handleSubmit}
            >
              {(formik.errors.email || formik.errors.password) && (
                <div className="error float-left mb-4" style={{ color: 'red' }}>
                  <img className="inline-block mr-3" src={varningIcon} alt="pic" />
                  {(formik.errors.email && <span>{formik.errors.email}</span>) ||
                    (formik.errors.password && <span>{formik.errors.password}</span>)}
                </div>
              )}
              <InputText
                value={formik.values.email}
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder="Email"
                className="mb-4 w-full border-2 border-light_purple rounded-[20px] text-base leading-5 py-[.9375rem] pl-6 shadow-shadow-dark"
              />
              <InputText
                value={formik.values.password}
                name="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder="Пароль"
                className="mb-4 w-full border-2 border-light_purple rounded-[20px] text-base leading-5 py-[.9375rem] pl-6 shadow-shadow-dark"
                visibilityPassword
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
                      className="mr-2 opacity-0 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span onClick={handleChangeCheckbox}>Запомнить меня</span>
                  </label>
                </div>
                <div className="absolute cursor-pointer">
                  <svg
                    onClick={handleChangeCheckbox}
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_594_917)">
                      <rect
                        x="1"
                        y="1"
                        width="16"
                        height="16"
                        stroke="#8C52FF"
                        strokeWidth="2"
                        shapeRendering="crispEdges"
                        fill="white"
                      />
                      {!!checkboxChecked && (
                        <path d="M5 9L8 12.5L13 5" stroke="black" strokeWidth="2" />
                      )}
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_594_917"
                        x="0"
                        y="0"
                        width="21"
                        height="21"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="3" dy="3" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_594_917"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_594_917"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div className="text-sm">
                  <Link to="/" className="underline text-blue_descr text-base">
                    Забыли пароль?
                  </Link>
                </div>
              </div>
              <div className="flex items-center mt-[1.875rem]">
                <Button
                  type="submit"
                  className="hover:bg-yellow_hover border-0 w-[14.4375rem] bg-yellow_descr rounded-[20px] text-base py-[.875rem] px-10xl shadow-shadow-dark font-bold"
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
          </div>
        </div>
      </div>
    </>
  );
};
