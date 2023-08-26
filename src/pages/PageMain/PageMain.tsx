import React from 'react';
import Container from 'components/Container';
import MainButton from 'components/MainButton';

import './PageMain.scss';

const PageMain = () => {
  return (
    <div className='main'>
      <Container>
        <div className='main__first-block'>
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
        </div>
      </Container>
    </div>
  );
};

export default PageMain;
