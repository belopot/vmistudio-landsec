import Home from '../pages/Home';
import Splash from '../pages/Splash';

export const ROUTES = [
  {
    path: '/',
    component: <Home />,
    title: 'Home',
  },
  {
    path: '/splash',
    component: <Splash />,
    title: 'Splash',
  },
];
