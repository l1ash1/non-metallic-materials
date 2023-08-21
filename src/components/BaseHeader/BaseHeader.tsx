import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'components/Container';
import { AppRoutes } from 'router/routes';
import BaseHeaderLinks from './components/BaseHeaderLinks';

import logo from 'assets/images/logoHeader.png';
import './BaseHeader.scss';

const BaseHeader: React.FC = () => {
  return (
    <div className='base-header'>
      <Container>
        <div className='base-header__container'>
          <div className='base-header__logo-block'>
            <Link
              to={AppRoutes.Main.path}
              className='base-header__logo-block__logo'
            >
              <img src={logo} alt='logo' />
            </Link>
          </div>
          <BaseHeaderLinks />
        </div>
      </Container>
    </div>
  );
};

export default BaseHeader;
