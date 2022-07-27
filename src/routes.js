import { Navigate, useRoutes } from 'react-router-dom';
import Login from './pages/login';
// layouts

import DefaultLayout from './layouts/DefaultLayout';
import Main from './pages/main';
import Register from './pages/register';
import Chart from './pages/chart';
import Wordcloud from './pages/cloud/wordCloud';
import GoogleNews from './pages/card';
import Statute from './pages/statute';
import PrecedentPage from './pages/precedentPage';
import PrecedentView from './pages/precedentView';
import PostEditor from './pages/postEditor';
import Layout from './layouts/Layout';
import Settings from './pages/settings';
import UserUpDate from './pages/userUpdate';
import Profile from './pages/profile';
import BoardPage from './pages/boardPage';




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
        { path: 'statute', element: <Statute /> },
        { path: 'precedent', element: <PrecedentPage /> },
        { path: 'temp', element: <PrecedentView/> },
        { path: 'editor', element: <PostEditor/> },
        { path: 'board', element: <BoardPage/> }
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        // { path: 'settingPasswd', element: <SettingPasswd /> },
        { path: 'settings', element: <Settings /> },
        { path: 'userUpdate', element: <UserUpDate /> },
        { path: 'profile', element: <Profile /> }
      ],
    }
  ]);
}
