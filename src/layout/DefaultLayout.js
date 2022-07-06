import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { DashboardNavbar } from './NavBar';
// components


// ----------------------------------------------------------------------

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  left: 0,
  lineHeight: 0,
  width: '100%',
  position: 'absolute',
  padding: theme.spacing(3, 3, 0),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(5, 5, 0),
  },
}));
const RootStyle = styled('div')({
    display: 'flex',
    minHeight: '100%',
    overflow: 'hidden'
  });
// ----------------------------------------------------------------------

export default function DefaultLayout() {
  return (
    <>
      {/* <HeaderStyle> -> 이거 하면 가로 스크롤 생김
        {/* <Logo /> 
      </HeaderStyle> */}
      <RootStyle>
        <DashboardNavbar />
        <hr>
        </hr>
        <Outlet />
      </RootStyle>

    </>
  );
}
