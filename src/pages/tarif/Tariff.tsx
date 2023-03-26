import React from 'react';

import airplane from '../../assets/svg/AirplanePurple.svg';

import { TarifCards } from './TariffCards';

export const tafirsList = [
  {
    name: 'start',
    title: 'START',
    descr: ['Самостоятельное пользование продуктом'],
    price: 0,
  },
  {
    name: 'middle',
    title: 'MIDDLE',
    descr: ['Самостоятельное пользование продуктом', '+ 4 часа услуг маркетолога'],
    price: 0,
  },
  {
    name: 'pro',
    title: 'PRO',
    descr: ['Полное сопровождение вашего бизнеса маркетологом'],
    price: 0,
  },
];

export const Tariff = () => {
  return (
    <div className=" relative p-10 min-h-full">
      <img className="absolute right-0 top-0" src={airplane} alt="airplane" />
      <h2 className="bg-light_grey rounded-xl font-bold text-4.5xl text-center py-8 mb-8">
        Выбор тарифного плана
      </h2>
      <ul className="flex justify-center gap-8">
        {tafirsList.map(item => (
          <TarifCards
            key={item.name}
            titleTarif={item.title}
            descrTarif={item.descr}
            priceTarif={item.price}
          />
        ))}
      </ul>
    </div>
  );
};
