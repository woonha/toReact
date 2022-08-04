import * as React from 'react';
import { useRef, useState } from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box, ButtonGroup, Container, Grid, TextField, Typography, Paper, Stack, useTheme, ThemeProvider } from '@mui/material';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { check } from '../auth/auth';
import { logoutTemp } from "../auth/auth";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Face from '@mui/icons-material/Face';
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { DashboardSearchbar } from './dashboardSearchbar';
import Circle_Notifications from '@mui/icons-material/CircleNotifications'
import ListItemIcon from '@mui/material/ListItemIcon';
import EditIcon from '@mui/icons-material/Edit';
import AccountBoxSharpIcon from '@mui/icons-material/AccountBoxSharp';
import LogoutIcon from '@mui/icons-material/Logout';
import MoreIcon from '@mui/icons-material/MoreVert';
import logo from '../image/logo.png';
import "../App.css"
const theme = createTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#ffebee',
            contrastText: '#FE4279',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        neutral: {
            main: '#FE4279',
            contrastText: '#ffebee',
        }
    },
    shadows: ['none']
});


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    // alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    fontFamily: "Orbitron-VariableFont_wght",
    // flexDirection: 'column',
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
        minHeight: 10,
    },
}));

const StyledButton = styled(Button)({
    height: 'auto',
    fontWeight: 600,
    fontSize: 10,
    fontFamily: "Gowun Dodum",
    size: "sm",
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-around'

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

    const goToProfile = () => {
        navigate("/account");
    };

    const menuId = 'primary-search-account-menu';

    const logoutButton = () => {
        logoutTemp();
        navigate("/login")
    }

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
            <MenuItem onClick={goToProfile}>
                <ListItemIcon>
                    <AccountBoxSharpIcon fontSize="small" />
                </ListItemIcon>
                내 프로필
            </MenuItem>

            <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                    <EditIcon fontSize="small" />
                </ListItemIcon>
                나의 활동
            </MenuItem>
            <MenuItem onClick={logoutButton}>
                <ListItemIcon>
                    <LogoutIcon fontSize="small" />
                </ListItemIcon>
                로그아웃
            </MenuItem>
        </Menu>
    );
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            id={mobileMenuId}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
            anchorEl={mobileMoreAnchorEl}
            keepMounted
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
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="medium"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <Face />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="medium"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <Circle_Notifications />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
        </Menu>
    );

    const login = () => {
        return (<>
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
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                >
                    <MoreIcon />
                </IconButton>
            </Box>
            {renderMenu}
            {renderMobileMenu}
        </>)
    }
    const notLogin = () => {
        return (<>
            <StyledButton href="/login" color='inherit'>로그인</StyledButton>
            <StyledButton href="/register" variant="contained" color="neutral">회원가입</StyledButton>
        </>)
    }

    return (
        <ThemeProvider theme={theme}>
            <Box
                width="100%"
                component="main">

                <AppBar position="static">
                    <StyledToolbar>
                        {/* <Box sx={{ flexGrow: 1 }} /> */}
                        <Box
                            sx={{

                            }}>
                            <Link
                                variant='h3'
                                href="/"
                                to="/"
                                color="inherit"
                                noWrap
                                underline="none"

                                sx={{
                                    cursor: 'pointer',
                                    flexGrow: 0.8,
                                    mx: 3,
                                    mr: 3,

                                }}
                            >
                                <img src={logo} className="logo" alt="logo" />
                            </Link></Box>

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
                        {isLogin ? login() : notLogin()}
                        {/* {isLogin ? <Button>login</Button> : <Button>logout</Button>} */}
                        {renderMenu}
                        {renderMobileMenu}
                    </StyledToolbar>
                </AppBar>


            </Box >
        </ThemeProvider >

    );
};
DashboardAppbar.propTypes = {
    anchorEl: PropTypes.func
};