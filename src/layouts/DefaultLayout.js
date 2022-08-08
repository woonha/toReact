import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { DashboardAppbar } from './dashboardAppbar';
import { DashboardNavbar } from './dashboardNavbar';

import Footer from './footer';
import { Box } from '@mui/material';


// components


// ----------------------------------------------------------------------

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden'
});
// ----------------------------------------------------------------------

export default function DefaultLayout() {
  return (
    <>
      <RootStyle>
        <DashboardAppbar />
      </RootStyle>

      <DashboardNavbar />
      <Outlet />
      <Footer title="찌미찌미킹" description="찌미생일축하해"></Footer>
    </>
  );
}
