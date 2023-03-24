import React from 'react';

import { useLocation, Outlet } from 'react-router-dom';

import '../../App.scss';

import { Header } from '../../features/header/header';
import { Profile } from '../../features/layout/profile';

export const Main = () => {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname === '/consultations' || location.pathname === '/help' ? (
        <Profile>
          <Outlet />
        </Profile>
      ) : (
        <>
          <Header />
          <Outlet />
        </>
      )}
    </div>
  );
};
