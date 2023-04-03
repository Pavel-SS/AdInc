import React, { useState } from 'react';

import chevron from '../../assets/svg/help/🦆 icon _chevron down_.svg';

import style from './help.module.scss';

interface Props {
  name: string;
  text: string;
}

export const Question: React.FC<Props> = ({ name, text }) => {
  const [isClosed, setIsClosed] = useState(true);

  return (
    <div
      className="mx-1 media400:mx-9 flex justify-between content-center"
      onClick={() => setIsClosed(!isClosed)}
      role="presentation"
    >
      <div className="px-3">
        <div className="py-6 font-bold ">{name}</div>
        <div>
          <p
            lang="ru"
            className={
              isClosed
                ? `${style.accordion} ${style.closed}`
                : `${style.accordion} ${style.open}`
            }
          >
            {text}
          </p>
        </div>
      </div>
      <img
        src={chevron}
        alt="chevron"
        className={isClosed ? 'z-[5] cursor-pointer' : `z-[5] rotate-180 cursor-pointer`}
      />
    </div>
  );
};
