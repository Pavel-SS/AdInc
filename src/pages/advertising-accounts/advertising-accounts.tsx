import React from 'react';

import { Button } from '../../common/Button/Button';

export const AdvertisingAccounts = () => {
  return (
    <div
      className="w-full pt-[30px]
    bg-contain bg-no-repeat bg-bottom z-20"
    >
      <div className="relative text-[40px] font-bold rounded-[10px]   text-center bg-[#F4F4F4] bg-center  mx-[30px]  mb-[70px] py-8 -z-10 ">
        Рекламные аккаунты
      </div>
      <div className="pl-[140px]">
        <p className="font-bold text-2xl mb-3">Добавьте рекламный аккаунт</p>
        <p className="text-base mb-6">
          Добавьте ваш рекламный аккаунт или создайте новый. После этого вы сможете
          смотреть статистику, управлять ставками и бюджетом в одном кабинете.
        </p>
        <Button
          type="button"
          className="border-0 bg-light_purple hover:bg-purple-700 text-white  rounded-[20px] text-sm leading-5 mr-5 mb-5 py-2 px-2 shadow-shadow-dark font-bold
                     md:mb-0 md:py-4 md:px-10xl"
          btnName="Добавить аккаунт"
        />
      </div>
    </div>
  );
};
