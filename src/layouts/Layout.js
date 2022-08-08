import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import Footer from './footer';
import { Box } from '@mui/material';
import { DashboardLogobar } from './dashboardLogobar';

const RootStyle = styled('div')({
    display: 'flex',
    minHeight: '100%',
    overflow: 'hidden'
});
// ----------------------------------------------------------------------

export default function Layout() {
    return (
        <>
            <RootStyle>
                <DashboardLogobar></DashboardLogobar>
            </RootStyle>
            <Outlet />
            <Footer></Footer>
        </>
    );
}