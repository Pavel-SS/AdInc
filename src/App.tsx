import React from 'react';

import { useRoutes } from 'react-router-dom';

import './App.scss';
import { AdvertisingAccounts } from './pages/advertising-accounts/advertising-accounts';
import { Consultations } from './pages/consultations/Consultations';
import { Main } from './pages/main/Main';
import { ProfilePages } from './pages/profilePages/profilePages';
import { SignIn } from './pages/signIn/SignIn';
import { SignUp } from './pages/signUp/SignUp';

const App = () => {
  const routes = useRoutes([
    {
      element: <Main />,
      children: [
        // { path: '/', element: <Home /> },
        { path: '/', element: <SignIn /> },
        { path: 'signup', element: <SignUp /> },
      ],
    },
    {
      element: <ProfilePages />,
      children: [
        { path: '/consultations', element: <Consultations /> },
        { path: '/adAccounts', element: <AdvertisingAccounts /> },
      ],
    },
  ]);

  return routes;
};

export default App;
