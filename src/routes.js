import { Navigate, useRoutes } from 'react-router-dom';
import Login from './pages/login';
// layouts

import DefaultLayout from './layouts/DefaultLayout';
import Main from './pages/main';
import Register from './pages/register';
import Chart from './pages/chart';
import Wordcloud from './pages/wordCloud';
import GoogleNews from './pages/card';



// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        { path: '/', element: <Main /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'chart', element: <Chart /> },
        { path: 'wordcloud', element: <Wordcloud /> },
        { path: 'news', element: <GoogleNews/> }
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
