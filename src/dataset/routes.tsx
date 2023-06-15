import Home from '../pages/Home';
import Splash from '../pages/Splash';
import Story from '../pages/Story';

export const ROUTES = [
  {
    path: '/',
    component: <Splash />,
  },
  {
    path: '/home',
    component: <Home />,
  },
  {
    path: '/story',
    component: <Story />,
  },
];
