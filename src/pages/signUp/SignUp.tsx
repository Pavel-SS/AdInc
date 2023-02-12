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

import styles from './signup.module.scss';

const Schema = Yup.object().shape({
  name: Yup.string().required('Name field is required'),
  email: Yup.string().email().required('E-mail field is required'),
  password: Yup.string()
    .required('Password field is required')
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
  changepassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});
const descrText =
  'Регистрируясь, вы принимаете условия Лицензионного соглашения, Оферты, Политики конфиденциальности и даёте согласие на обработку персональных данных';

export const SignUp = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 mt-7xl">
      <div
        className="absolute top-0 bottom-0 sm:min-h-[47rem]
        left-0 right-0 bg-contain bg-no-repeat bg-bottom -z-20"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div
        className="flex items-center justify-center px-4 
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
          {({ values, errors, handleSubmit, handleChange, handleBlur }) => {
            return (
              <form
                className="flex flex-col max-w-[32.5rem] mx-auto"
                onSubmit={handleSubmit}
              >
                <h2
                  className={`text-left text-5xl font-bold text-light_purple mb-[1.625rem] ${styles.title}`}
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
                  placeholder="Имя пользователя"
                  className="mb-4 w-full border-2 border-light_purple rounded-[20px] text-base leading-5 py-[.9375rem] pl-6 shadow-shadow-dark"
                />
                <InputText
                  value={values.email}
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="E-mail"
                  className="mb-4 w-full border-2 border-light_purple rounded-[20px] text-base leading-5 py-[.9375rem] pl-6 shadow-shadow-dark"
                />
                <InputText
                  value={values.password}
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Пароль (до 16 символов)"
                  className="mb-4 w-full border-2 border-light_purple rounded-[20px] text-base leading-5 py-[.9375rem] pl-6 shadow-shadow-dark"
                  visibilityPassword
                />
                <InputText
                  value={values.changepassword}
                  name="changepassword"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Подтвердить пароль"
                  className="mb-4 w-full border-2 border-light_purple rounded-[20px] text-base leading-5 py-[.9375rem] pl-6 shadow-shadow-dark"
                  visibilityPassword
                />
                <p className="text-start text-grey_descr text-sm mb-[1.625rem]">
                  {descrText}
                </p>
                <div className="flex items-center">
                  <Button
                    type="submit"
                    className="border-0 bg-light_purple hover:bg-purple-700 text-white  rounded-[20px] text-base leading-5 mr-10 py-4 px-10xl shadow-shadow-dark font-bold"
                    btnName="Получить ссылку"
                  />
                  <span className="mr-4">Уже есть аккаунт?</span>
                  <Link
                    to="/"
                    className="underline text-light_purple hover:text-purple-700 font-semibold"
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
