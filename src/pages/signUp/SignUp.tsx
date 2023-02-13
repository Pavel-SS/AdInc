/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-magic-numbers */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import { useState } from 'react';

import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import arrowIcon from '../../assets/svg/arrow_left.svg';
import varningIcon from '../../assets/svg/mdi_warning-circle.svg';
import bg from '../../assets/svg/signupBg.svg';
import { Button } from '../../common/Button/Button';
import { InputText } from '../../common/Input/InputText';

import styles from './signup.module.scss';

// const Schema = Yup.object().shape({
//   name: Yup.string().required('Name field is required'),
//   email: Yup.string().email().required('E-mail field is required'),
//   password: Yup.string()
//     .required('Password field is required')
//     .min(8, 'Pasword must be 8 or more characters')
//     .max(16)
//     .matches(
//       /(?=.*[a-z])(?=.*[A-Z])\w+/,
//       'Password should contain at least one uppercase and lowercase character',
//     )
//     .matches(/\d/, 'Password should contain at least one number')
//     .matches(
//       /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
//       'Password should contain at least one special character',
//     ),
//   changepassword: Yup.string()
//     .required('Confirm Password is required')
//     .oneOf([Yup.ref('password'), null], 'Passwords must match'),
// });

export const Schema = Yup.object().shape({
  name: Yup.string().required('Не заполнены обязательные поля'),
  email: Yup.string().email().required('Не заполнены обязательные поля'),
  password: Yup.string()
    .required('Не заполнено поле пароль')
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
  changepassword: Yup.string()
    .required('Пароли должны совпадать')
    .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать'),
});
const descrText =
  'Регистрируясь, вы принимаете условия Лицензионного соглашения, Оферты, Политики конфиденциальности и даёте согласие на обработку персональных данных';

export const SignUp = () => {
  const [checkboxChecked, setChecked] = useState<boolean>(true);
  const handleChangeCheckbox = () => setChecked(checked => !checked);

  return (
    <div
      className="mx-auto max-w-7xl px-6 mt-7xl

     "
    >
      <div
        className="absolute top-0 bottom-0 sm:min-h-[45rem]
        left-0 right-0 bg-contain bg-no-repeat bg-bottom -z-20
         bg-[url('/src/assets/svg/signupBg.svg')]"
        // style={{ backgroundImage: `url(${bg})` }}
      />
      <div
        className="flex items-start justify-center px-4
        sm:px-6 lg:px-8 h-[60vh] min-h-[460px] relative"
      >
        <Link to="/" className="flex gap-4 z-20 absolute w-32 top-0 left-0">
          <img src={arrowIcon} alt="pic" />
          <span className="underline">Главная</span>
        </Link>
        <Formik
          initialValues={{
            email: '',
            name: '',
            password: '',
            changepassword: '',
          }}
          validationSchema={Schema}
          onSubmit={values => console.log(values)}
        >
          {({
            values,
            errors,
            handleSubmit,
            handleChange,
            handleBlur,
            dirty,
            touched,
            isValid,
          }) => {
            return (
              <form
                className="flex flex-col max-w-[32.5rem] mx-auto mt-[2rem]  md:mt-[-1rem]  "
                onSubmit={handleSubmit}
              >
                <h2
                  className={`text-left text-[20px] font-bold text-light_purple mb-[1.625rem] md:text-[40px]  ${styles.title}`}
                >
                  Регистрация
                </h2>
                {((touched.email && errors.email) ||
                  (touched.name && errors.name) ||
                  (touched.password && errors.password) ||
                  (touched.changepassword && errors.changepassword)) && (
                  <div className="error float-left mb-4" style={{ color: 'red' }}>
                    <img className="inline-block mr-3" src={varningIcon} alt="pic" />
                    {(errors.name && <span>{errors.name}</span>) ||
                      (errors.email && <span>{errors.email}</span>) ||
                      (errors.password && <span>{errors.password}</span>) ||
                      (errors.changepassword && <span>{errors.changepassword}</span>)}
                  </div>
                )}
                <InputText
                  value={values.name}
                  name="name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Имя пользователя"
                  className={
                    touched.name && errors.name
                      ? 'py-[.5rem] mb-4 w-full border-2  border-error rounded-[20px] text-base leading-5 md:py-[.9375rem] pl-6 shadow-shadow-dark'
                      : 'py-[.5rem] mb-4 w-full border-2 rounded-[20px]  border-light_purple  text-base leading-5 md:py-[.9375rem] pl-6 shadow-shadow-dark'
                  }
                />
                <InputText
                  value={values.email}
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="E-mail"
                  className={
                    touched.email && errors.email
                      ? 'py-[.5rem] mb-4 w-full border-2  border-error rounded-[20px] text-base leading-5 md:py-[.9375rem] pl-6 shadow-shadow-dark'
                      : 'py-[.5rem] mb-4 w-full border-2 rounded-[20px]  border-light_purple  text-base leading-5 md:py-[.9375rem] pl-6 shadow-shadow-dark '
                  }
                />
                <InputText
                  value={values.password}
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Пароль (до 16 символов)"
                  className={
                    touched.password && errors.password
                      ? 'py-[.5rem] mb-4 w-full border-2  border-error rounded-[20px] text-base leading-5 md:py-[.9375rem] pl-6 shadow-shadow-dark'
                      : 'py-[.5rem] mb-4 w-full border-2 rounded-[20px]  border-light_purple  text-base leading-5 md:py-[.9375rem] pl-6 shadow-shadow-dark'
                  }
                  visibilityPassword
                />
                <InputText
                  value={values.changepassword}
                  name="changepassword"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Подтвердить пароль"
                  className={
                    touched.changepassword && errors.changepassword
                      ? 'py-[.5rem] mb-4 w-full border-2  border-error rounded-[20px] text-base leading-5 md:py-[.9375rem] pl-6 shadow-shadow-dark'
                      : 'py-[.5rem] mb-4 w-full border-2 rounded-[20px]  border-light_purple  text-base leading-5 md:py-[.9375rem] pl-6 shadow-shadow-dark'
                  }
                  visibilityPassword
                />
                <div className="flex flex-row ">
                  <div className=" cursor-pointer">
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
                  <input
                    id="contract"
                    name="contract"
                    type="checkbox"
                    className="mr-2 opacity-0 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />

                  <p
                    className=" text-grey_descr text-xs mb-10 "
                    onClick={handleChangeCheckbox}
                  >
                    {descrText}
                  </p>
                </div>

                <div className="flex flex-col items-center md:flex-row">
                  <div>
                    <Button
                      type="submit"
                      className="border-0 bg-light_purple hover:bg-purple-700 text-white  rounded-[20px] text-sm leading-5 mr-5 mb-5 py-2 px-2 shadow-shadow-dark font-bold
                     md:mb-0 md:py-4 md:px-10xl"
                      btnName="Получить ссылку"
                    />
                    <span className="mr-0  mb-5 md:mb-0">Уже есть аккаунт?</span>
                  </div>

                  <Link
                    to="/"
                    className="underline text-light_purple hover:text-purple-700 font-semibold
                    md:ml-2"
                  >
                    Войти
                  </Link>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};
