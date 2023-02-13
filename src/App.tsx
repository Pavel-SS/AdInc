import React from 'react';

import { useRoutes } from 'react-router-dom';

import './App.scss';
import { Main } from './pages/main/Main';
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
  ]);

  return routes;
};

export default App;
