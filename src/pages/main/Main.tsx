import React from 'react';

import '../../App.scss';
import { Outlet } from 'react-router-dom';

import { Header } from '../../features/header/header';

export const Main = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};
