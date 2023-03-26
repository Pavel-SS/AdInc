import React from 'react';

import { Link } from 'react-router-dom';

import arrow from '../../assets/svg/arrow_right.svg';
import heart from '../../assets/svg/Heart.svg';
import heartEmpty from '../../assets/svg/HeartEmpty.svg';

interface Props {
  name: string;
  image: string;
  text: string;
}

export const ConsultationCard: React.FC<Props> = ({ name, image, text }) => {
  const [isFavorite, setIsFavorite] = React.useState<boolean>(false);

  return (
    <div className="relative shadow-dark rounded-3xl bg-white z-10">
      <button
        type="button"
        onClick={() => {
          setIsFavorite(!isFavorite);
        }}
        className="absolute top-5 right-6"
      >
        <img src={isFavorite ? heart : heartEmpty} alt="heart" />
      </button>

      <img className="w-full" src={image} alt="consultationImage" />
      <div className="flex flex-col items-end p-6">
        <h3 className="font-semibold text-xl text-start w-full">{name}</h3>
        <p>{text}</p>
        <Link
          to="/tariffs"
          className="flex justify-center items-center w-6 h-6 border-light_purple border-2 rounded-lg"
        >
          <img src={arrow} alt="arrow" />
        </Link>
      </div>
    </div>
  );
};
