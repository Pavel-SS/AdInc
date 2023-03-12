import React from 'react';

import { Outlet } from 'react-router-dom';

import '../../App.scss';

import { Profile } from '../../features/layout/profile';

export const ProfilePages = () => {
  return (
    <div className="App ">
      <Profile>
        <Outlet />
      </Profile>
    </div>
  );
};
