import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { DashboardAppbar } from './dashboardAppbar';
import { DashboardNavbar } from './dashboardNavbar';
import Footer from './footer';

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
  backgroundColor: '#ffebee'
});
// ----------------------------------------------------------------------

export default function DefaultLayout() {
  return (
    <>
      <DashboardAppbar></DashboardAppbar>
      <RootStyle>
        <DashboardNavbar></DashboardNavbar>
      </RootStyle>
      <Outlet />
      <Footer title="찌미찌미킹" description="찌미생일축하해"></Footer>
    </>
  );
}
