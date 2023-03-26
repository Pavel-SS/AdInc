import React from 'react';

import { useRoutes } from 'react-router-dom';

import './App.scss';
import { AdvertisingAccounts } from './pages/advertising-accounts/advertising-accounts';
import { Consultations } from './pages/consultations/Consultations';
import { Help } from './pages/helpPage/help';
import { Main } from './pages/main/Main';
import { SignIn } from './pages/signIn/SignIn';
import { SignUp } from './pages/signUp/SignUp';
import { Tariff } from './pages/tarif/Tariff';
import { TariffStart } from './pages/tarif/TariffStart';

const App = () => {
  const routes = useRoutes([
    {
      element: <Main />,
      children: [
        // { path: '/', element: <Home /> },
        { path: '/', element: <SignIn /> },
        { path: 'signup', element: <SignUp /> },
        { path: 'tariffs', element: <Tariff /> },
        { path: 'tariff-start', element: <TariffStart /> },
        { path: '/consultations', element: <Consultations /> },
        { path: '/adAccounts', element: <AdvertisingAccounts /> },
        { path: '/help', element: <Help /> },
      ],
    },
  ]);

  return routes;
};

export default App;
