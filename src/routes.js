import { Navigate, useRoutes } from 'react-router-dom';
import Login from './pages/login';
// layouts

import DefaultLayout from './layout/DefaultLayout';
import Main from './pages/main';
import Register from './pages/register';



// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        { path: '/', element: <Main /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> }
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
