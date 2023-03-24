import { Link } from 'react-router-dom';

import airplane from '../../assets/svg/AirplanePurple.svg';
import crownIcon from '../../assets/svg/crown--black.svg';
import back from '../../assets/svg/Rectangle.svg';

import { ConsultationCard } from './ConsultationCard';
import style from './consultations.module.scss';

const dummyData: { name: string; image: string; text: string }[] = [
  { name: 'Название1', image: back, text: 'Текст текст текст текст текст текст' },
  { name: 'Название2', image: back, text: 'Текст текст текст текст текст текст' },
  { name: 'Название3', image: back, text: 'Текст текст текст текст текст текст' },
  { name: 'Название4', image: back, text: 'Текст текст текст текст текст текст' },
  { name: 'Название5', image: back, text: 'Текст текст текст текст текст текст' },
  { name: 'Название6', image: back, text: 'Текст текст текст текст текст текст' },
];

export const Consultations = () => {
  return (
    <div
      className={`relative p-10 min-h-full bg-no-repeat bg-bottom bg-contain ${style.consultations}`}
    >
      <img className="absolute right-0 top-0" src={airplane} alt="airplane" />
      <div className="flex gap-3 rounded-xl items-center text-left z-10">
        <img src={crownIcon} className="black w-5" alt="crownIcon" />
        <Link to="/#">
          <p className="inline-block">Тарифы</p>
        </Link>
        <div className="bg-black w-2 h-2 rounded-xl " />
        <p className="inline-block black">Консультационные материалы</p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 py-7 justify-items-center">
        {dummyData.map(consultation => {
          return <ConsultationCard key={consultation.name} {...consultation} />;
        })}
      </div>
    </div>
  );
};
