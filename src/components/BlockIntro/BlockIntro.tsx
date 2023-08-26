import React from 'react';

import Container from 'components/Container';

import './BlockIntro.scss';

interface Props {
  title: string;
  qualities: {
    iconSrc: string;
    name: string;
  }[];
}

const BlockIntro = ({ title, qualities }: Props) => {
  return (
    <div className='block-intro'>
      <Container>
        <div className='block-intro__container'>
          <div className='block-intro__title'>{title}</div>
          <div className='block-intro__qualities-list'>
            {qualities.map(({ iconSrc, name }) => (
              <div key={name} className='block-intro__qualities-list__item'>
                <div className='block-intro__qualities-list__item__icon'>
                  <img src={iconSrc} alt='icon' />
                </div>
                <div className='block-intro__qualities-list__item__name'>
                  {name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlockIntro;
