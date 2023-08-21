import React from 'react';
import { Outlet } from 'react-router-dom';

import BaseHeader from 'components/BaseHeader';

import './Layout.scss';

const Layout: React.FC = () => {
  return (
    <div className='layout'>
      <main>
        <BaseHeader />
        <Outlet />
        <div>footer</div>
      </main>
    </div>
  );
};

export default Layout;
