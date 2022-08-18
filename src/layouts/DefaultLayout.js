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
      <Footer title="BIT 4조" description="LAWBOT - 판례기반학교폭력챗봇"></Footer>
    </>
  );
}
