import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';

import Footer from './footer';
import { Box } from '@mui/material';
import { DashboardLogobar } from './dashboardLogobar';
import { DashboardSearchbar } from './dashboardSearchbar';
import { DashboardNavbar } from './dashboardNavbar';

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

export default function Layout() {
    return (
        <>
            {/* <HeaderStyle> -> 이거 하면 가로 스크롤 생김
        {/* <Logo /> 
      </HeaderStyle> */}
            <RootStyle>
                {/* <DashboardNavbar /> */}
                <DashboardLogobar></DashboardLogobar>
                {/* <PrimarySearchAppBar /> */}
            </RootStyle>
            <DashboardSearchbar></DashboardSearchbar>
            <DashboardNavbar></DashboardNavbar>
            <Outlet />
            <Footer></Footer>
        </>
    );
}