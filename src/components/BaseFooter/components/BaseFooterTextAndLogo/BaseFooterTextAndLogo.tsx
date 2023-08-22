import React from 'react';
import logo from 'assets/images/logoFooter.png';

import './BaseFooterTextAndLogo.scss';

const BaseFooterTextAndLogo: React.FC = () => {
  return (
    <div className='base-footer-text-and-logo'>
      <div className='base-footer-text-and-logo__logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='base-footer-text-and-logo__text'>
        Политика конфиденциальности © спец-транс, 2023
      </div>
    </div>
  );
};

export default BaseFooterTextAndLogo;
