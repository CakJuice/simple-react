import Home from './pages/Home';
import Login from './pages/Login';

const routes = [
  {
    title: 'Home',
    path: '/',
    exact: true,
    component: Home
  },
  {
    title: 'Login',
    path: '/login/',
    component: Login,
  }
];

export default routes;
