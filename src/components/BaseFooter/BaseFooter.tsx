import React from 'react';

import Container from 'components/Container';
import BaseFooterLinks from './components/BaseFooterLinks';
import BaseFooterContacts from './components/BaseFooterContacts';
import BaseFooterTextAndLogo from './components/BaseFooterTextAndLogo';

import './BaseFooter.scss';

const BaseFooter: React.FC = () => {
  return (
    <div className='base-footer'>
      <Container>
        <div className='base-footer__container'>
          <BaseFooterTextAndLogo />
          <BaseFooterLinks />
          <BaseFooterContacts />
        </div>
      </Container>
    </div>
  );
};

export default BaseFooter;
