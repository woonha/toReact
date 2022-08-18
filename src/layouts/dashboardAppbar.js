import * as React from 'react';
import { useRef, useState } from 'react';
import { styled, createTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Box, ThemeProvider, AppBar, Toolbar, Button, Link, Menu, MenuItem, ListItemIcon, IconButton, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { check, logoutTemp } from '../auth/auth';
import Face from '@mui/icons-material/Face';
import Badge from "@mui/material/Badge";
import { DashboardSearchbar } from './dashboardSearchbar';
import Circle_Notifications from '@mui/icons-material/CircleNotifications'
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
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMenuOpen2 = Boolean(anchorEl2);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleProfileMenuOpen2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };


    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };
    const handleMenuClose2 = () => {
        setAnchorEl2(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleCloseNavMenu = () => {
        //setAnchorElNav('');
    };
    const [open, setOpen] = useState(false);

    const goToProfile = () => {
        navigate("/account", { state: { value: 0 } });
    };
    const goToNotifications = () => {
        navigate("/account", { state: { value: 2 } });
    };

    const menuId = 'primary-search-account-menu';
    const menuId2 = "account-menu";

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

            <MenuItem onClick={logoutButton}>
                <ListItemIcon>
                    <LogoutIcon fontSize="small" />
                </ListItemIcon>
                로그아웃
            </MenuItem>
        </Menu>
    );

    const notificationsMenu = (
        <Menu
            id={menuId2}
            open={isMenuOpen2}
            onClose={handleMenuClose2}
            anchorEl={anchorEl2}
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
            <MenuItem onClick={goToNotifications}>
                <ListItemIcon>
                    <AccountBoxSharpIcon fontSize="small" />
                </ListItemIcon>
                알림
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
                <ListItemIcon>
                    <Face size="medium"
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                    />
                </ListItemIcon>
                마이 페이지
            </MenuItem>
            <MenuItem>
                <ListItemIcon>
                    <Circle_Notifications size="medium"
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                    />
                </ListItemIcon>
                알림
            </MenuItem>
        </Menu>
    );

    const login = () => {
        return (<>
            <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>

                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen2}
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
            <Box sx={{ display: { xs: 'none', md: 'none' } }}>
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
            {notificationsMenu}
        </>)
    }
    const notLogin = () => {
        return (<>
            <StyledButton href="/login" color='inherit'>로그인</StyledButton>
            <StyledButton href="/register" variant="contained" color="neutral">회원가입</StyledButton>
        </>)
    }

    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <AppBar position="static">
                    <StyledToolbar>
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
                        </Link>
                        <DashboardSearchbar></DashboardSearchbar>
                        <Box sx={{ flexGrow: 1 }} />

                        {isLogin ? login() : notLogin()}

                        {/* {isLogin ? <Button>login</Button> : <Button>logout</Button>} */}
                        {renderMenu}
                        {renderMobileMenu}
                        {notificationsMenu}
                    </StyledToolbar>
                </AppBar>
            </ThemeProvider >
        </React.Fragment>
    );
};
DashboardAppbar.propTypes = {
    anchorEl: PropTypes.func
};