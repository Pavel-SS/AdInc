/* eslint-disable no-magic-numbers */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import arrowIcon from '../../assets/svg/arrow_left.svg';
import varningIcon from '../../assets/svg/mdi_warning-circle.svg';
import bg from '../../assets/svg/signupBg.svg';
import { Button } from '../../common/Button/Button';
import { InputText } from '../../common/Input/InputText';

import s from './signup.module.scss';

export const Schema = Yup.object().shape({
  name: Yup.string().required('Name field is required'),
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
  changepassword: Yup.string()
    .label('confirm password')
    .min(8)
    .max(16)
    .required()
    .oneOf([Yup.ref('password'), null], 'Пароль должен совпадать'),
});
const descrText =
  'Регистрируясь, вы принимаете условия Лицензионного соглашения, Оферты, Политики конфиденциальности и даёте согласие на обработку персональных данных';

export const SignUp = () => {
  return (
    <div
      className="mx-auto max-w-7xl px-6 mt-7xl h-auto
     lg:bg-no-repeat lg:bg-bottom lg:bg-[url('/src/assets/svg/signupBg.svg')] lg:bg-fixed lg:bg-contain
    lg:h-[100vh]
    md:h-auto
     "
    >
      {/* <div
        className="absolute top-0 bottom-0
        left-0 right-0 bg-contain bg-no-repeat bg-bottom -z-20"
        style={{ backgroundImage: `url(${bg})` }}
      /> */}
      <div
        className="absolute top-0 bottom-0
        left-0 right-0 bg-contain bg-no-repeat  bg-fixed bg-bottom -z-20
        bg-[url('/src/assets/svg/signupBg.svg')]
        lg:hidden"
        // style={{ backgroundImage: `url(${bg})` }}
      />
      <div className="w-32">
        <Link to="/" className="flex gap-4 mb-3 sm:mb-6">
          <img src={arrowIcon} alt="pic" />
          <span className="underline">Главная</span>
        </Link>
      </div>
      <Formik
        initialValues={{
          email: '',
          name: '',
          password: '',
          changepassword: '',
        }}
        validationSchema={Schema}
        onSubmit={() => {}}
      >
        {({ values, errors, handleSubmit, handleChange, handleBlur }) => {
          return (
            <form
              className="flex flex-col  w-[39.375rem] pb-0
              md:w-[25.375rem] md:pb-[9rem]
              sm:w-[15.375rem]  mx-auto "
              onSubmit={handleSubmit}
            >
              <h2
                className={`text-lefttext-light_purple font-bold mb-10 text-5xl ${s.title}
                sm:text-3xl`}
              >
                Регистрация
              </h2>
              {(errors.email ||
                errors.name ||
                errors.password ||
                errors.changepassword) && (
                <div className="error float-left mb-4" style={{ color: 'red' }}>
                  <img className="inline-block mr-3" src={varningIcon} alt="pic" />
                  {(errors.name && <span>{errors.name}</span>) ||
                    (errors.email && <span>{errors.email}</span>) ||
                    (errors.password && <span>{errors.password}</span>) ||
                    (errors.changepassword && <span>{errors.password}</span>)}
                </div>
              )}
              <InputText
                value={values.name}
                name="name"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="User name"
                className="mb-6 w-full border-2 border-light_purple rounded-lg text-base py-4 pl-6 shadow-shadow-dark"
              />
              <InputText
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="E-mail"
                className="mb-6 w-full border-2 border-light_purple rounded-lg text-base py-4 pl-6 shadow-shadow-dark"
              />
              <InputText
                value={values.password}
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Password"
                className="mb-6 w-full border-2 border-light_purple rounded-lg text-base py-4 pl-6 pr-12 shadow-shadow-dark"
                visibilityPassword
              />
              <InputText
                value={values.changepassword}
                name="changepassword"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Confirm password"
                className="mb-6 w-full border-2 border-light_purple rounded-lg text-base py-4 pl-6 shadow-shadow-dark"
                visibilityPassword
              />
              <div className="flex items-start">
                <input
                  type="checkbox"
                  className=" appearance-none cursor-pointer  h-5 w-5 border-2 w rounded pr-5 pb-5  mr-5 mt-1 checked:bg-light_purple "
                />
                <p className="text-start text-grey_descr text-sm mb-10">{descrText}</p>
              </div>
              <div className="flex justify-center items-center md:flex-col">
                <Button
                  type="submit"
                  className="border-0 bg-light_purple hover:bg-purple-700 text-white  rounded-lg text-base mr-10 py-4 px-10xl shadow-shadow-dark font-bold
                  md:mr-0"
                  btnName="Получить ссылку"
                />
                <div className="flex items-center md:mt-10">
                  <span className="mr-4 cursor-pointer  hover:text-purple-700  transition-color duration-300  ">
                    Уже есть аккаунт?
                  </span>
                  <Link
                    to="/signin"
                    className="underline text-light_purple font-semibold transition-color duration-300  hover:text-purple-700 "
                  >
                    Войти
                  </Link>
                </div>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};
