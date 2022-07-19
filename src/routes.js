import { Navigate, useRoutes } from 'react-router-dom';
import Login from './pages/login';
// layouts

import DefaultLayout from './layouts/DefaultLayout';
import Main from './pages/main';
import Register from './pages/register';
import Chart from './pages/chart';
import Wordcloud from './pages/cloud/wordCloud';
import GoogleNews from './pages/card';
import SettingPasswd from './pages/settingPasswd';
import Statute from './pages/statute';
import { DashboardAppbar } from './layouts/dashboardAppbar';
import Layout from './layouts/Layout';
import Test1 from './pages/test1';



// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        { path: '/', element: <Main /> },
        { path: 'chart', element: <Chart /> },
        { path: 'wordcloud', element: <Wordcloud /> },
        { path: 'news', element: <GoogleNews /> },
        { path: 'statute', element: <Statute /> }
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'settingPasswd', element: <SettingPasswd /> },
        { path: 'test1', element: <Test1 /> },


      ],
    }

  ]);
}
