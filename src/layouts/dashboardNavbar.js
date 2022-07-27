import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Container, Grid, Link, TextField, Typography, Paper, Stack } from '@mui/material';
import { Link as Href } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { check } from '../auth/auth';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),

    alignItems: 'center',
    '@media all': {
        minHeight: 50,
    }
}));

const colorTool = createTheme({
    palette: {
        primary: {
            main: '#fe4279',
            light: '#fe9D7C',
            dark: '#FC4279',
            contrastText: '#ffebee',
            backgroundColor: '#fe4279'
        },
        neutural: {
            main: '#828df8'
        },
        secondary: { //버튼
            main: '#fe4279',
            light: '#3FC79A',
            dark: '#fe4279',
            contrastText: '#fe4279'
        },

    },
    shadows: ['none'],
    typography: {
        h3: {
            fontWeight: 700,
            fontSize: '2.25rem',
            lineHeight: 1.375
        }
    }

});
const StyledButton = styled(Button)({
    width: 200,
    height: 'auto',
    fontSize: 15,
    fontFamily: "-apple-system",

    '&:hover': {
        backgroundColor: 'none',
        borderColor: 'none',
        boxShadow: 'none',
        color: 'none',
    },
    color: 'inherit'
});

const RootStyle = styled('div')({
    display: 'flex',
    minHeight: '100%',
    overflow: 'hidden'
});
export const DashboardNavbar = () => {
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
        <RootStyle>
            <Box
                component="main"
                width={'100%'}
                minHeight='100%'
            >
                <AppBar theme={colorTool} position="relative">
                    <StyledToolbar>
                        <Grid container width={'100%'} flexWrap='nowrap' justifyContent='center'>
                            <Box>
                                <StyledButton
                                    href="/statute"
                                    fontFamily="-apple-system"
                                >
                                    법률
                                </StyledButton>
                            </Box>
                            <Box>
                                <StyledButton
                                    href="/precedent"
                                    fontFamily="-apple-system"
                                >
                                    판례
                                </StyledButton>
                            </Box>
                            <Box>
                                <StyledButton
                                    href="/board"
                                    fontFamily="-apple-system"
                                >
                                    게시판
                                </StyledButton>
                            </Box>
                            <Box item xs={6} sm={3}
                            >
                                <StyledButton
                                    href="/news"
                                >
                                    카드뉴스
                                </StyledButton>
                            </Box>
                            <Box item xs={6} sm={3}>
                                <StyledButton
                                    href="/wordCloud"
                                >
                                    법령 클라우드
                                </StyledButton>
                            </Box>
                            <Box item xs={6} sm={3}>
                                <StyledButton
                                    href="/chart"
                                >
                                    실태조사
                                </StyledButton>
                            </Box>
                        </Grid>
                    </StyledToolbar >

                </AppBar >
            </Box >

        </RootStyle>
    );
};
DashboardNavbar.propTypes = {
    anchorEl: PropTypes.func
};