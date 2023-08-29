import React from 'react';

import Container from 'components/Container';

import './BlockIntro.scss';

interface Props {
  title: string;
  qualities: {
    iconSrc: string;
    text: string;
  }[];
}

const BlockIntro = ({ title, qualities }: Props) => {
  return (
    <div className='block-intro'>
      <Container>
        <div className='block-intro__container'>
          <div className='block-intro__title'>{title}</div>
          <div className='block-intro__qualities-list'>
            {qualities.map(({ iconSrc, text }) => (
              <div key={text} className='block-intro__qualities-list__item'>
                <div className='block-intro__qualities-list__item__icon'>
                  <img src={iconSrc} alt='icon' />
                </div>
                <div
                  className='block-intro__qualities-list__item__text'
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlockIntro;
