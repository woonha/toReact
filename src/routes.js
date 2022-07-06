import { Navigate, useRoutes } from 'react-router-dom';
import Login from './pages/login';
// layouts

import DefaultLayout from './layout/DefaultLayout';
import Main from './pages/main';



// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        { path: '/', element: <Main /> },
        { path: 'login', element: <Login /> }
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
