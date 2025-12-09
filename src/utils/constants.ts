import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  {
    id: 'home',
    label: 'Home',
    path: '/',
  },
  {
    id: 'mission',
    label: 'Mission & Vision',
    path: '/mission-vision',
  },
  {
    id: 'products',
    label: 'Products',
    path: '/products',
    submenu: [
      {
        id: 'tray',
        label: 'Insta_TRAY',
        path: '/products/insta-tray',
      },
      {
        id: 'internals',
        label: 'Insta_INTERNALS',
        path: '/products/insta-internals',
      },
      {
        id: 'transtower',
        label: 'Insta_TRANS.TOWER',
        path: '/products/insta-transtower',
      },
      {
        id: 'ltht',
        label: 'Insta_LT+HT',
        path: '/products/insta-lt-ht',
      },
      {
        id: 'pid',
        label: 'Insta_PID',
        path: '/products/insta-pid',
      },
      {
        id: 'others',
        label: 'Other Solutions',
        path: '/products/others',
      },
    ],
  },
  {
    id: 'services',
    label: 'Services',
    path: '/services',
    submenu: [
      {
        id: 'engineering',
        label: 'Engineering Software Development',
        path: '/services#engineering',
      },
      {
        id: 'design',
        label: 'Design, Drafting & Detail Engineering',
        path: '/services#design',
      },
      {
        id: 'manpower',
        label: 'Manpower Outsourcing',
        path: '/services#manpower',
      },
    ],
  },
  {
    id: 'about',
    label: 'About Us',
    path: '/about',
    submenu: [
      {
        id: 'company',
        label: 'Company',
        path: '/about',
      },
      {
        id: 'careers',
        label: 'Careers',
        path: '/careers',
      },
    ],
  },
  {
    id: 'contact',
    label: 'Contact Us',
    path: '/contact',
  },
];