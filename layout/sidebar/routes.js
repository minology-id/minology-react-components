import { AiFillAlert, AiFillAccountBook, AiFillApi } from 'react-icons/ai';

const routes = [
  {
    label: 'Menu 1',
    to: 'menu-1',
    icon: AiFillAlert,
    authorized: [],
    sidebar: true,
  },
  {
    label: 'Menu 2',
    to: 'menu-2',
    icon: AiFillAccountBook,
    authorized: ['staff'],
    sidebar: true,
  },
  {
    label: 'Menu 3',
    to: 'menu-3',
    icon: AiFillApi,
    authorized: ['administrator'],
    sidebar: true,
  },
];

export default routes;
