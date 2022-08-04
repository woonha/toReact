import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box, Button, Container, Grid, Link, TextField, Typography, Paper, Stack } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Link as Href } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { check } from '../auth/auth';

const StyledButton = styled(Button)({
    width: 200,
    height: 68,
    fontSize: 18,
    fontFamily: ['sans-serif'],
    '&:hover': {
        backgroundColor: 'none',
        borderColor: 'none',
        boxShadow: 'none',
        color: 'none',
    },
    color: 'inherit'
});
const StyledToolbar1 = styled(Toolbar)(({ theme }) => ({
    // alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    flexDirection: 'column',
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
        minHeight: 10,
    },
}));
const StyledAppbar = styled(AppBar)(({ theme }) => ({
    // alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    flexDirection: 'column',
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
        minHeight: 50,
    },
}));
const colorTool = createTheme({
    palette: {
        primary: {
            main: '#ffebee',
            light: '#fe9D7C',
            dark: '#FC4279',
            contrastText: '#fe4279'
        },
        neutural: {
            main: '#828df8'
        },
        secondary: { //버튼
            main: '#fe4279',//황토황토
            light: '#3FC79A',
            dark: '#fe4279',
            contrastText: '#ffebee'
        },
    },
    shadows: ['none']
});

export const DashboardLogobar = () => {
    const [isLogin, setIsLogin] = React.useState(false);
    React.useEffect(() => {
        setIsLogin(check());
    })
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        //setAnchorElNav('');
    };

    return (
        <Box
            width="100%"
            component="main"
        >
            <AppBar position="static" theme={colorTool}>
                <StyledToolbar1>
                    <Link
                        variant="h1"
                        href="/"
                        to="/"
                        color="inherit"
                        noWrap
                        underline="none"
                        sx={{
                            cursor: 'pointer',
                            flexGrow: 1,
                            mx: 3,
                            mr: 3,
                        }}
                    >
                        Lawbot
                        {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    </Link>
                </StyledToolbar1>
            </AppBar>
        </Box >
        // {/* {renderMobileMenu}
        // {renderMenu} */}
    );
};
DashboardLogobar.propTypes = {
    anchorEl: PropTypes.func
};