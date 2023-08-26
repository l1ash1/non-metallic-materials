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
      name: 'Мы работаем с 2000 года',
    },
    {
      iconSrc: iconHuman,
      name: 'Более 5000 счастливых клиентов',
    },
    {
      iconSrc: iconCircle,
      name: 'Лучшие цены',
    },
    {
      iconSrc: iconStar,
      name: 'Качественная продукция',
    },
    {
      iconSrc: iconAlarm,
      name: 'Оперативность',
    },
  ],
};

const PageMain = () => {
  return (
    <div className='main'>
      <div className='main__first-block'>
        <Container>
          <div className='main__first-block__container'>
            <div className='main__first-block__title'>
              Продажа и доставка нерудных материалов
            </div>
            <div className='main__first-block__text'>
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
