import React from 'react';

import '../../App.scss';
import { useLocation, Outlet } from 'react-router-dom';

import { Header } from '../../features/header/header';
import { Profile } from '../../features/layout/profile';

const locationAside = [
  '/consultations',
  '/tariffs',
  '/tariff-start',
  '/help',
  '/adAccounts',
];

export const Main = () => {
  const location = useLocation();

  return (
    <div className="App">
      {!locationAside.includes(location.pathname) ? (
        <>
          <Header />
          <Outlet />
        </>
      ) : (
        <Profile>
          <Outlet />
        </Profile>
      )}
    </div>
  );
};
