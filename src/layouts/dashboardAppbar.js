import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box, Button, ButtonGroup, Container, Grid, Link, TextField, Typography, Paper, Stack } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Link as Href } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { check } from '../auth/auth';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

// const Search = styled('div')(({ theme }) => ({
//     borderstyle: 'solid',
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//         backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//         marginLeft: theme.spacing(3),
//         width: 'auto',
//     },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     position: 'relative',

//     '& .MuiInputBase-input': {
//         padding: theme.spacing(1, 1, 1, 0),
//         // vertical padding + font size from searchIcon
//         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//         transition: theme.transitions.create('width'),
//         width: '100%',
//         [theme.breakpoints.up('md')]: {
//             width: '20ch',
//         },
//     },
// }));
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



    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );


    return (
        <Box
            width="100%"
            component="main">
            <AppBar position="static" theme={colorTool}>
                <StyledToolbar>
                    <Box sx={{ flexGrow: 1 }} />
                    <Link
                        variant="h1"
                        href="/"
                        to="/"
                        color="inherit"
                        noWrap
                        underline="hover"
                        sx={{
                            cursor: 'pointer',
                            flexGrow: 0.8,
                            mx: 3,
                            mr: 3,
                        }}
                    >
                        Lawbot
                        {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    </Link>

                    <Stack>
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
                    </Stack>

                    {/* <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="error">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box>
                    {renderMenu} */}
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