/* eslint-disable react/prop-types */
import React from 'react';

import { Link } from 'react-router-dom';

import { Button } from '../../common/Button/Button';

type TarifCardsType = {
  titleTarif: string;
  descrTarif: string[];
  priceTarif: number;
};

export const TarifCards: React.FC<TarifCardsType> = React.memo(
  ({ titleTarif, descrTarif, priceTarif }) => {
    return (
      <li className="flex flex-col flex-1 justify-between max-w-xs relative shadow-dark rounded-3xl bg-white z-10 border-2 border-light_purple transition delay-150 duration-300 ease-in-out hover:shadow-rose py-10xl px-8 hover:bottom-4 hover:border-rose ">
        <div>
          <h3 className="font-semibold text-2.5xl text-center w-full">{titleTarif}</h3>
          {descrTarif.map(item => (
            <div className="flex items-center mb-4" key={Math.random()}>
              <span className="text-1.25xs mr-3 font-medium"> &#9899;</span>
              <span className="text-base font-medium"> {item} </span>
            </div>
          ))}
        </div>
        <div className="flex flex-col mt-10">
          <div className="text-center mb-6">
            <span className="text-4.5xl font-bold">{priceTarif}$ </span>
            <span className="text-2xl font-bold">/мес</span>
          </div>
          <Link to="/tariff-start">
            <Button
              className="font-bold text-base mx-auto text-white py-4 px-12 shadow-dark rounded-2xl bg-light_purple  hover:bg-gradient-to-r hover:from-rose hover:to-light_purple hover:shadow-purple"
              btnName="Выбрать"
            />
          </Link>
        </div>
      </li>
    );
  },
);
