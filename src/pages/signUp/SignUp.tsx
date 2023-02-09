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
  return (
    <div
      className="mx-auto max-w-7xl px-6 mt-7xl h-auto
     lg:bg-no-repeat lg:bg-bottom lg:bg-[url('/src/assets/svg/signupBg.svg')] lg:bg-fixed lg:bg-contain
    lg:h-[85vh]
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
        <Link to="/" className="flex gap-4 mb-0 sm:mb-6">
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
        validateOnBlur
        validationSchema={Schema}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {({
          values,
          errors,
          dirty,
          touched,
          isValid,
          handleSubmit,
          handleChange,
          handleBlur,
        }) => {
          return (
            <form
              className="flex flex-col  w-[39.375rem] pb-0
              md:w-[25.375rem] md:pb-[9rem]
              sm:w-[15.375rem]  mx-auto "
              onSubmit={handleSubmit}
            >
              <h2
                className={`text-lefttext-light_purple font-bold mb-[1.625rem] text-[2.5rem]
                -mt-9 ${s.title}
                sm:text-3xl`}
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
                placeholder="User name"
                className={
                  touched.name && errors.name ? s.input_not_valid : s.input_valid
                }
              />
              <InputText
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="E-mail"
                className={
                  touched.email && errors.email ? s.input_not_valid : s.input_valid
                }
              />
              <InputText
                value={values.password}
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Password"
                className={
                  touched.password && errors.password ? s.input_not_valid : s.input_valid
                }
                visibilityPassword
              />
              <InputText
                value={values.changepassword}
                name="changepassword"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Confirm password"
                className={
                  touched.changepassword && errors.changepassword
                    ? s.input_not_valid
                    : s.input_valid
                }
                visibilityPassword
              />
              <div className="flex items-start">
                <input
                  type="checkbox"
                  className=" appearance-none cursor-pointer  h-5 w-5 border-2 w rounded pr-5 pb-5  mr-5 mt-1 checked:bg-light_purple "
                />
                <p className="text-start text-grey_descr text-xs mb-10">{descrText}</p>
              </div>
              <div className="flex justify-center items-center md:flex-col">
                <Button
                  disabled={!isValid && !dirty}
                  onClick={() => handleSubmit}
                  type="submit"
                  className={
                    !isValid
                      ? `border-0 bg-gray-400 cursor-not-allowed text-white  rounded-lg text-base mr-10 py-4 px-10xl shadow-shadow-dark font-bold
                  md:mr-0`
                      : `border-0 bg-light_purple hover:bg-purple-700 text-white  rounded-lg text-base mr-10 py-4 px-10xl shadow-shadow-dark font-bold
                  md:mr-0`
                  }
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
