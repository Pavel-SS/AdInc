import { Link } from 'react-router-dom';

import airplane from '../../assets/svg/AirplanePurple.svg';
import crownIcon from '../../assets/svg/crown--black.svg';
import Notification from '../../assets/svg/help/notification.svg';

import style from './help.module.scss';
import { Question } from './question';

const TextFiller: string =
  'В своём стремлении повысить качество жизни, они забывают, что базовый вектор развития способствует повышению качества анализа существующих паттернов поведения. Безусловно, семантический разбор внешних противодействий напрямую зависит от позиций, занимаемых участниками в отношении поставленных задач. А также элементы политического процесса ассоциативно распределены по отраслям';

const dummyData: { name: string; text: string }[] = [
  { name: 'Вопрос 1', text: TextFiller },
  { name: 'Вопрос 2', text: TextFiller },
  { name: 'Вопрос 3', text: TextFiller },
  { name: 'Вопрос 4', text: TextFiller },
  { name: 'Вопрос 5', text: TextFiller },
  { name: 'Вопрос 6', text: TextFiller },
  { name: 'Вопрос 7', text: TextFiller },
  { name: 'Вопрос 8', text: TextFiller },
  { name: 'Вопрос 9', text: TextFiller },
  { name: 'Вопрос 10', text: TextFiller },
  { name: 'Вопрос 11', text: TextFiller },
  { name: 'Вопрос 12', text: TextFiller },
];

export const Help = () => {
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
        <p className="inline-block black">Помощь</p>
      </div>
      <div className="flex pt-10 gap-6">
        <div className="flex items-center justify-center bg-yellow_descr w-10 h-10 rounded-xl shadow-shadow-dark">
          <img src={Notification} className="black w-5" alt="Notification" />
        </div>
        <p className=" w-3/4">
          Если у Вас есть вопросы по функционалу и возможностям нашего сервиса или не
          знаете с чего начать работу, оставьте заявку и тех.поддержка свяжется в Вами
        </p>
      </div>
      <button
        className="bg-light_purple text-light_grey shadow-shadow-dark rounded-2xl  px-10 py-3 font-bold mt-4"
        type="button"
      >
        Оставить Заявку
      </button>
      <div className="divide-y divide-purple-400 border-4 rounded-xl border-solid border-light_purple bg-white shadow-shadow-dark max-h-96  overflow-y-scroll mt-10">
        {dummyData.map(data => {
          return <Question key={data.name} {...data} />;
        })}
      </div>
    </div>
  );
};
