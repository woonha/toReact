import { Navigate, useRoutes } from 'react-router-dom';
import Login from './pages/login';
// layouts

import DefaultLayout from './layouts/DefaultLayout';
import Main from './pages/main';
import Register from './pages/register';
import Chart from './pages/chart';
import WordCloud from './pages/cloud/wordCloud';
import GoogleNews from './pages/card';
import Statute from './pages/statute';
import PrecedentPage from './pages/precedentPage';
import PrecedentView from './pages/precedentView';
import PostEditor from './pages/postEditor';
import Layout from './layouts/Layout';
import Settings from './pages/settings';
import Board from './pages/board';
import Account from './pages/account';
import StatuteTest from './pages/statuteTest';
import SearchHa from './pages/searchhh';







// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        { path: '/', element: <Main /> },
        { path: 'chart', element: <Chart /> },
        { path: 'wordcloud', element: <WordCloud /> },
        { path: 'news', element: <GoogleNews /> },
        { path: 'statute', element: <Statute /> },
        { path: 'precedent', element: <PrecedentPage /> },
        { path: 'case', element: <PrecedentView /> },
        { path: 'editor', element: <PostEditor /> },
        { path: 'board', element: <Board /> },
        { path: 'account', element: <Account /> },
        { path: 'statuteTest', element: <StatuteTest /> },
        { path: 'searchgg', element: <SearchHa /> },



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


      ],
    }
  ]);
}
