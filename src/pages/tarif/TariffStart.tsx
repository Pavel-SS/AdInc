import React from 'react';

import { Link } from 'react-router-dom';

// import { tafirsList } from './Tariff';
import airplane from '../../assets/svg/AirplanePurple.svg';
import { Button } from '../../common/Button/Button';
import { ToggleSwitch } from '../../common/ToggleSwitch/ToggleSwitch';

export const TariffStart = () => {
  return (
    <div className=" relative p-10 min-h-full bg-no-repeat bg-bottom bg-contain bg-main">
      <img className="absolute right-0 top-0" src={airplane} alt="airplane" />
      <h2 className="bg-light_grey rounded-xl font-bold text-4.5xl text-center py-8 mb-8">
        Тарифный план
      </h2>
      <div className="ml-36 mt-14">
        <h3 className="font-bold text-2xl mb-2">START</h3>
        <p className="font-semibold text-base mb-2">
          Самостоятельное пользование продуктом
        </p>
        <p className="text-sm mb-6">Подключен до 10.01.2023</p>
        <div className="flex items-center mb-6">
          <span className="font-semibold text-base mr-2">Продлевать автоматически</span>
          <ToggleSwitch />
        </div>
        <Link to="/tariffs">
          <Button
            className="font-bold text-base mx-auto py-4 px-7 shadow-dark rounded-3xl bg-white border-2
             border-light_purple hover:bg-gradient-to-r hover:from-rose hover:to-light_purple hover:shadow-purple hover:text-white"
            btnName="Изменить тариф"
          />
        </Link>
      </div>
    </div>
  );
};
