import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { DashboardAppbar } from './dashboardAppbar';
import { DashboardNavbar } from './dashboardNavbar';
import Footer from './footer';
import { Box } from '@mui/material';

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
        {/* <DashboardNavbar /> */}
        <DashboardAppbar></DashboardAppbar>
        {/* <PrimarySearchAppBar /> */}
      </RootStyle>
      <DashboardNavbar></DashboardNavbar>

      <Outlet />
      <Footer title="찌미찌미킹" description="찌미생일축하해"></Footer>
    </>
  );
}
