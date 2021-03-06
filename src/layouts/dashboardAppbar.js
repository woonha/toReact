import * as React from 'react';
import { useRef, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box, ButtonGroup, Container, Grid, TextField, Typography, Paper, Stack } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { check } from '../auth/auth';
import { logoutTemp } from "../auth/auth";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Face from '@mui/icons-material/Face';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { DashboardSearchbar } from './dashboardSearchbar';
import Circle_Notifications from '@mui/icons-material/CircleNotifications'
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    // alignItems: 'flex-start',


    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    // flexDirection: 'column',
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
        minHeight: 10,
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

export const DashboardAppbar = () => {
    const navigate = useNavigate();
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
    const [open, setOpen] = useState(false);


    const iconBackColorOpen = 'grey.300';
    const iconBackColor = 'grey.100';

    const menuId = 'primary-search-account-menu';

    // 네모창 컨트롤
    const renderMenu = (
        <Menu
            id={menuId}
            open={isMenuOpen}
            onClose={handleMenuClose}
            anchorEl={anchorEl}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 0,
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                    '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                    },
                },
            }}
        >


            <MenuItem onClick={handleMenuClose}>내 프로필</MenuItem>
            <MenuItem onClick={handleMenuClose}> 나의 활동</MenuItem>
            <MenuItem onClick={handleMenuClose}>로그아웃</MenuItem>

        </Menu>
    );


    const notLogin = ()=>{
        return (<>
                    <Button href="/login" color='inherit' >로그인</Button>
                    <Button href="/register" variant="contained" theme={colorTool} >회원가입</Button>
                </>)
    }

    const logoutButton = ()=>{
        logoutTemp();
        navigate("/login")
    }   

    return (
        <Box
            width="100%"
            component="main">
            <AppBar position="static" theme={colorTool}>
                <StyledToolbar>
                    {/* <Box sx={{ flexGrow: 1 }} /> */}

                    <Link
                        variant="h1"
                        href="/"
                        to="/"
                        color="inherit"
                        noWrap
                        underline="hover"
                    // sx={{
                    //     cursor: 'pointer',
                    //     flexGrow: 0.8,
                    //     mx: 3,
                    //     mr: 3,
                    // }}
                    >
                        Lawbot
                        {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    </Link>
                    <DashboardSearchbar></DashboardSearchbar>

                    {/* <Stack>
                        <ThemeProvider theme={colorTool}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-end'
                                }}>
                                <ButtonGroup variant="outlined" aria-label="outlined button group">
                                    <Button
                                        href="/login"
                                        color='secondary'
                                        sx={{
                                            fontSize: 15,
                                            fontWeight: 'normal',
                                        }}>
                                        로그인
                                    </Button>
                                    <Button
                                        href="/register"
                                        color='secondary'

                                        sx={{

                                            fontSize: 15,
                                            fontWeight: 'normal'
                                        }}>
                                        회원가입
                                    </Button>
                                </ButtonGroup>
                            </Box>
                        </ThemeProvider>
                    </Stack> */}

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="error">
                                <Circle_Notifications />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <Face
                                sx={{ width: 30, height: 30 }}
                                color="inherit"
                            >
                            </Face>
                        </IconButton>
                    </Box>
                    {isLogin ? <Button onClick={logoutButton}>Logout</Button>: notLogin()}
                    {/* {isLogin ? <Button>login</Button> : <Button>logout</Button>} */}
                    
                    {/* 
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box> */}
                    {renderMenu}
                </StyledToolbar>
            </AppBar>
        </Box >
        // {/* {renderMobileMenu}
        // {renderMenu} */}
    );
};
DashboardAppbar.propTypes = {
    anchorEl: PropTypes.func
};