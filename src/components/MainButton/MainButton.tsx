import React from 'react';

import './MainButton.scss';

interface Props {
  text: string;
}

const MainButton = ({ text }: Props) => {
  return (
    <div className='main-button'>
      <button className='main-button__button' onClick={() => alert('куку')}>
        {text}
      </button>
    </div>
  );
};

export default MainButton;
