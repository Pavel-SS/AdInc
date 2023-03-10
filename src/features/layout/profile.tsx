import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import analyticsIcon from '../../assets/svg/analytics.svg';
import consultationIcon from '../../assets/svg/consultation.svg';
import crownIcon from '../../assets/svg/crown.svg';
import emptyWalletIcon from '../../assets/svg/empty-wallet.svg';
import logoAD from '../../assets/svg/logo_AD.svg';
import arrowIcon from '../../assets/svg/logout.svg';
import messagesIcon from '../../assets/svg/messages-3.svg';
import suitcaseIcon from '../../assets/svg/suitcase.svg';
import userIcon from '../../assets/svg/unsplash_QVyAUDUOlMw.svg';

const linksInAside: { name: string; image: string; text: string }[] = [
  { name: 'tariffs', image: crownIcon, text: 'Тарифы' },
  { name: 'adAccounts', image: suitcaseIcon, text: 'Рекламные аккаунты' },
  { name: 'analytics', image: analyticsIcon, text: 'Аналитика' },
  { name: 'consultations', image: consultationIcon, text: 'Консультации' },
  { name: 'support', image: messagesIcon, text: 'Помощь' },
];

export const Profile = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const { pathname }: { pathname: string } = location;

  return (
    <div className="relative flex">
      <aside className="bg-grey_menu min-w-max min-h-screen py-6 px-9">
        <div className="flex items-center gap-3">
          <img className="h-10 md:h-17" src={logoAD} alt="logoAd" />
          <h1 className="md:inline-block hidden text-2xl md:text-2.5xl md:leading-[2.125rem] font-bold text-white">
            AD. Incubator
          </h1>
        </div>

        <nav className="flex flex-col justify-center gap-8 pt-16">
          {linksInAside.map(link => {
            return (
              <Link
                to={`/${link.name}`}
                key={link.name}
                className={`flex gap-2 ${
                  pathname === `/${link.name}`
                    ? 'bg-light_purple p-5 rounded-3xl rounded-tl-none'
                    : 'bg-grey_menu'
                }`}
              >
                <img src={link.image} alt="pic" />
                <span className="md:inline-block hidden text-white text-base font-semibold">
                  {link.text}
                </span>
              </Link>
            );
          })}
        </nav>

        <Link to="/" className="fixed bottom-16 left-10 flex gap-4">
          <img src={arrowIcon} alt="pic" />
          <span className="md:inline-block hidden text-white text-base font-semibold">
            Главная
          </span>
        </Link>
      </aside>

      <div className="flex flex-col w-full min-h-screen">
        <header className="border-b border-black py-7">
          <nav className="flex gap-7 justify-end">
            <div className="flex">
              <img className="pr-2.5" src={emptyWalletIcon} alt="emptyWallet" />
              <a href="/#" className="font-semibold">
                Финансы
              </a>
            </div>
            <div className="flex mr-8">
              <img className="pr-2.5" src={userIcon} alt="userIcon" />
              <a href="/#" className="font-semibold">
                Иван Иванов
              </a>
            </div>
          </nav>
        </header>
        <main className="h-full">{children}</main>
      </div>
    </div>
  );
};
