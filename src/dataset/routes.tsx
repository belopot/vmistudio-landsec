import Home from '../pages/Home';
import Splash from '../pages/Splash';

export const ROUTES = [
  {
    path: '/',
    component: <Splash />,
    title: 'Splash',
  },
  {
    path: '/home',
    component: <Home />,
    title: 'Home',
  },
];
