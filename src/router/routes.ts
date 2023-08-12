import { ComponentType } from 'react';
import loadable from '@loadable/component';

const PageMain = loadable(() => import('../pages/PageMain'));

export const AppRoutes = {
  Main: {
    path: '/',
    title: 'Главная',
    Component: PageMain,
  },
};

export interface IRoute {
  path: string;
  title: string;
  Component: ComponentType<any>;
}
