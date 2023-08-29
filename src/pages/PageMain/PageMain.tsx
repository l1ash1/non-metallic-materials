import React from 'react';
import Container from 'components/Container';
import MainButton from 'components/MainButton';
import BlockIntro from 'components/BlockIntro';

import iconTime from 'assets/icons/intro-times-icon.svg';
import iconHuman from 'assets/icons/intro-human-icon.svg';
import iconCircle from 'assets/icons/intro-circle-icon.svg';
import iconStar from 'assets/icons/intro-star-icon.svg';
import iconAlarm from 'assets/icons/intro-alarm-icon.svg';
import './PageMain.scss';

const introData = {
  title: 'Почему выбирают нас',
  qualities: [
    {
      iconSrc: iconTime,
      text: 'Мы работаем с <span class="green">2000</span> года',
    },
    {
      iconSrc: iconHuman,
      text: 'Более <span class="green">5000</span> </br> счастливых клиентов',
    },
    {
      iconSrc: iconCircle,
      text: 'Лучшие цены',
    },
    {
      iconSrc: iconStar,
      text: 'Качественная продукция',
    },
    {
      iconSrc: iconAlarm,
      text: 'Оперативность',
    },
  ],
};

const PageMain = () => {
  return (
    <div className='main-page'>
      <div className='main-page__first-block'>
        <Container>
          <div className='main-page__first-block__container'>
            <div className='main-page__first-block__title'>
              Продажа и доставка нерудных материалов
            </div>
            <div className='main-page__first-block__text'>
              У нас вы можете заказать материалы премиального качества.
              Индивидуальный подход и качественная продукция – ключевые
              преимущества нашей компании.
            </div>
            <MainButton text='Заказать звонок' />
          </div>
        </Container>
      </div>
      <BlockIntro title={introData.title} qualities={introData.qualities} />
    </div>
  );
};

export default PageMain;
