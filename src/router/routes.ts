import { ComponentType } from 'react';
import loadable from '@loadable/component';

const PageMain = loadable(() => import('pages/PageMain'));
const PageServices = loadable(() => import('pages/PageMain'));
const PageMaterials = loadable(() => import('pages/PageMain'));
const PageDelivery = loadable(() => import('pages/PageMain'));
const PageAboutCompany = loadable(() => import('pages/PageMain'));
const PageContacts = loadable(() => import('pages/PageMain'));

export const AppRoutes = {
  Main: {
    path: '/',
    title: 'Главная',
    Component: PageMain,
  },
  Services: {
    path: '/services',
    title: 'Главная',
    Component: PageServices,
  },
  Materials: {
    path: '/materials',
    title: 'Главная',
    Component: PageMaterials,
  },
  Delivery: {
    path: '/delivery',
    title: 'Главная',
    Component: PageDelivery,
  },
  AboutCompany: {
    path: '/aboutcompany',
    title: 'Главная',
    Component: PageAboutCompany,
  },
  Contacts: {
    path: '/contacts',
    title: 'Главная',
    Component: PageContacts,
  },
};

export interface IRoute {
  path: string;
  title: string;
  Component: ComponentType<any>;
}
