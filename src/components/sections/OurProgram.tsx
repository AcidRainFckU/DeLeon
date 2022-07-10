import React from 'react';
import Section from '../layouts/Section';
import Heading from '../UI/Heading';

import road from '../../assets/images/Program/road.svg';

const OurProgram: React.FC = React.memo(() => {
  return (
    <Section>
      <Heading>Наша программа</Heading>
      <div className="our-program">
        <img src={road} alt="road" className="road" />
        <div className="our-program__item program-item--first">
          <div className="program-item__container">
            <p className="our-program__name">Модуль 1. Базовый</p>
            <ul className="our-program__list list">
              <svg
                className="road__arrow arrow-1"
                width="26"
                height="20"
                viewBox="0 0 26 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.7849 2.47218C10.9309 2.39486 11.0597 2.28897 11.1637 2.16082C11.2677 2.03268 11.3448 1.88492 11.3903 1.72634C11.4358 1.56777 11.4488 1.40164 11.4286 1.23785C11.4084 1.07407 11.3553 0.915996 11.2726 0.773056C11.1898 0.630116 11.0791 0.50524 10.947 0.405879C10.8149 0.306518 10.6641 0.234707 10.5037 0.194731C10.3433 0.154754 10.1764 0.147431 10.0132 0.173197C9.84991 0.198963 9.69355 0.257292 9.55344 0.344703L1.51481 4.9738C1.23247 5.13661 1.02657 5.40469 0.942307 5.71915C0.858049 6.0336 0.902332 6.36872 1.06543 6.65089L5.71254 14.6791C5.88183 14.9491 6.14944 15.1431 6.459 15.2203C6.76856 15.2974 7.0959 15.2516 7.37205 15.0926C7.6482 14.9336 7.85161 14.6737 7.93942 14.3678C8.02723 14.0618 7.99258 13.7336 7.84278 13.4524L4.68274 7.99321L13.309 10.3046C16.3964 11.1319 18.4713 12.1033 19.9186 13.3305C21.3395 14.5354 22.2459 16.0619 22.8512 18.1794C22.8958 18.3346 22.9706 18.4796 23.0712 18.6061C23.1719 18.7325 23.2965 18.838 23.438 18.9165C23.5794 18.9949 23.7349 19.0448 23.8956 19.0633C24.0563 19.0818 24.2191 19.0685 24.3746 19.0242C24.5301 18.9799 24.6753 18.9055 24.8019 18.8051C24.9285 18.7048 25.034 18.5805 25.1125 18.4394C25.1909 18.2984 25.2407 18.1432 25.2591 17.9828C25.2774 17.8224 25.2639 17.66 25.2193 17.5048C24.5091 15.0303 23.3809 13.0441 21.5131 11.4583C19.6711 9.89642 17.2004 8.80368 13.945 7.93138L5.31865 5.61997L10.7849 2.47218V2.47218Z"
                  fill="#D8D8D8"
                />
              </svg>

              <li className="list__item">Урок 1. Законодательство</li>
              <li className="list__item">Урок 2. 10 правил безопасности</li>
              <li className="list__item">Урок 3. Что такое криптовалюта, блокчейн и майнинг</li>
              <li className="list__item">Урок 4. Чем различаются блокчейны </li>
              <li className="list__item">
                Урок 5. Экономика, конфиденциальность и анонимность блокчейна
              </li>
              <li className="list__item">Урок 6. Как купить/продать/перевести криптовалюту</li>
              <li className="list__item">Урок 7. Виды криптовалютных кошельков</li>
              <li className="list__item">Урок 8. Анализ криптовалют</li>
              <li className="list__item">Урок 9. Централизованные биржи</li>
              <li className="list__item">Урок 10. Децентрализованные биржи</li>
              <li className="list__item">Урок 11. Как собрать криптовалютный портфель.</li>
              <li className="list__item">Урок 12. Основные стратегии торговли</li>
            </ul>
          </div>
        </div>
        <div className="our-program__item program-item--second">
          <div className="program-item__container ">
            <p className="our-program__name">Модуль 2. Продвинутый</p>
            <ul className="our-program__list list">
              <svg
                className="road__arrow arrow-2"
                width="26"
                height="20"
                viewBox="0 0 26 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.7849 2.47218C10.9309 2.39486 11.0597 2.28897 11.1637 2.16082C11.2677 2.03268 11.3448 1.88492 11.3903 1.72634C11.4358 1.56777 11.4488 1.40164 11.4286 1.23785C11.4084 1.07407 11.3553 0.915996 11.2726 0.773056C11.1898 0.630116 11.0791 0.50524 10.947 0.405879C10.8149 0.306518 10.6641 0.234707 10.5037 0.194731C10.3433 0.154754 10.1764 0.147431 10.0132 0.173197C9.84991 0.198963 9.69355 0.257292 9.55344 0.344703L1.51481 4.9738C1.23247 5.13661 1.02657 5.40469 0.942307 5.71915C0.858049 6.0336 0.902332 6.36872 1.06543 6.65089L5.71254 14.6791C5.88183 14.9491 6.14944 15.1431 6.459 15.2203C6.76856 15.2974 7.0959 15.2516 7.37205 15.0926C7.6482 14.9336 7.85161 14.6737 7.93942 14.3678C8.02723 14.0618 7.99258 13.7336 7.84278 13.4524L4.68274 7.99321L13.309 10.3046C16.3964 11.1319 18.4713 12.1033 19.9186 13.3305C21.3395 14.5354 22.2459 16.0619 22.8512 18.1794C22.8958 18.3346 22.9706 18.4796 23.0712 18.6061C23.1719 18.7325 23.2965 18.838 23.438 18.9165C23.5794 18.9949 23.7349 19.0448 23.8956 19.0633C24.0563 19.0818 24.2191 19.0685 24.3746 19.0242C24.5301 18.9799 24.6753 18.9055 24.8019 18.8051C24.9285 18.7048 25.034 18.5805 25.1125 18.4394C25.1909 18.2984 25.2407 18.1432 25.2591 17.9828C25.2774 17.8224 25.2639 17.66 25.2193 17.5048C24.5091 15.0303 23.3809 13.0441 21.5131 11.4583C19.6711 9.89642 17.2004 8.80368 13.945 7.93138L5.31865 5.61997L10.7849 2.47218V2.47218Z"
                  fill="#D8D8D8"
                />
              </svg>
              <li className="list__item">Урок 13. Способы заработка на криптовалюте</li>
              <li className="list__item">Урок 14. Базовый технический анализ</li>
              <li className="list__item">Урок 15. Трейдинг с помощью алгоритмических ботов</li>
              <li className="list__item">Урок 16. Стейблкоины. Виды и их отличия</li>
              <li className="list__item">Урок 17. DeFi смарт-контракты и пулы ликвидности</li>
              <li className="list__item">Урок 18. Фарминг, стейкинг и лендинг</li>
              <li className="list__item">
                Урок 19. Риск-менеджмент, мани-менеджмент, психология рынка
              </li>
            </ul>
          </div>
        </div>
        <div className="our-program__item  program-item--third">
          <div className="program-item__container">
            <p className="our-program__name">Модуль 3. Гуру Криптовалюты</p>
            <ul className="our-program__list list">
              <svg
                className="road__arrow arrow-3"
                width="26"
                height="20"
                viewBox="0 0 26 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.7849 2.47218C10.9309 2.39486 11.0597 2.28897 11.1637 2.16082C11.2677 2.03268 11.3448 1.88492 11.3903 1.72634C11.4358 1.56777 11.4488 1.40164 11.4286 1.23785C11.4084 1.07407 11.3553 0.915996 11.2726 0.773056C11.1898 0.630116 11.0791 0.50524 10.947 0.405879C10.8149 0.306518 10.6641 0.234707 10.5037 0.194731C10.3433 0.154754 10.1764 0.147431 10.0132 0.173197C9.84991 0.198963 9.69355 0.257292 9.55344 0.344703L1.51481 4.9738C1.23247 5.13661 1.02657 5.40469 0.942307 5.71915C0.858049 6.0336 0.902332 6.36872 1.06543 6.65089L5.71254 14.6791C5.88183 14.9491 6.14944 15.1431 6.459 15.2203C6.76856 15.2974 7.0959 15.2516 7.37205 15.0926C7.6482 14.9336 7.85161 14.6737 7.93942 14.3678C8.02723 14.0618 7.99258 13.7336 7.84278 13.4524L4.68274 7.99321L13.309 10.3046C16.3964 11.1319 18.4713 12.1033 19.9186 13.3305C21.3395 14.5354 22.2459 16.0619 22.8512 18.1794C22.8958 18.3346 22.9706 18.4796 23.0712 18.6061C23.1719 18.7325 23.2965 18.838 23.438 18.9165C23.5794 18.9949 23.7349 19.0448 23.8956 19.0633C24.0563 19.0818 24.2191 19.0685 24.3746 19.0242C24.5301 18.9799 24.6753 18.9055 24.8019 18.8051C24.9285 18.7048 25.034 18.5805 25.1125 18.4394C25.1909 18.2984 25.2407 18.1432 25.2591 17.9828C25.2774 17.8224 25.2639 17.66 25.2193 17.5048C24.5091 15.0303 23.3809 13.0441 21.5131 11.4583C19.6711 9.89642 17.2004 8.80368 13.945 7.93138L5.31865 5.61997L10.7849 2.47218V2.47218Z"
                  fill="#D8D8D8"
                />
              </svg>
              <li className="list__item">Урок 20. Пресейлы токенов. (ICO, IDO…)</li>
              <li className="list__item">Урок 21. Что такое NFT и 5 способов на нем заработать</li>
              <li className="list__item">Урок 22. Что такое WEB 3.0 и Метавселенные</li>
              <li className="list__item">Урок 23. Что такое DAO</li>
              <li className="list__item">Урок 24. Play2Earn - Играй и зарабатывай!</li>
              <li className="list__item">Урок 25. Аирдропы и вайтлисты</li>
              <li className="list__item">Урок 26. Тестнеты</li>
              <li className="list__item">Урок 27. Амбассадорские программы</li>
              <li className="list__item">Урок 28. Ноды</li>
              <li className="list__item">
                Урок 29. Полезные инструменты для анализа и работы с рынком
              </li>
              <li className="list__item">Урок 30. Как создать свой токен</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
});

export default OurProgram;