import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
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
            contrastText: '#FE4279',
        }
    },
    typography: {
        button: {
            fontWeight: 600
        },
        fontFamily: '"Orbitron-VariableFont_wght","GowunDodum-Regular","GangwonEdu_OTFBoldA", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.5,
            fontFamily: 'GowunDodum-Regula'
        }
    },
    shadows: ['none']


},

);

const StyledButton = styled(Button)({
    height: 'auto',
    fontSize: 16,
    color: '#FE4279',



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
        <ThemeProvider theme={theme}>

            <Box
                component="main"
                width={'100%'}
                minHeight='100%'
            >
                <AppBar position="relative">
                    <StyledToolbar>
                        <Grid container width={'100%'} justifyContent='flex-end'>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: 'fit-content',
                                    '& svg': {
                                        m: 1.5,
                                    },
                                    '& hr': {
                                        mx: 2.5,
                                    },
                                }}
                            >
                                <Box>
                                    <StyledButton
                                        variant="body1"
                                        paddingBottom={10}
                                        href="/statuteTest"

                                    >
                                        법령
                                    </StyledButton>
                                </Box>
                                <Divider orientation="vertical" variant="middle" flexItem />
                                <Box>
                                    <StyledButton
                                        href="/precedent"

                                    >
                                        판례
                                    </StyledButton>
                                </Box>
                                <Divider orientation="vertical" variant="middle" flexItem />
                                <Box>
                                    <StyledButton
                                        href="/board"

                                    >
                                        게시판
                                    </StyledButton>
                                </Box>
                                <Divider orientation="vertical" variant="middle" flexItem />
                                <Box>
                                    <StyledButton
                                        href="/news"
                                    >
                                        카드뉴스
                                    </StyledButton>
                                </Box>
                                <Divider orientation="vertical" variant="middle" flexItem />
                                <Box>
                                    <StyledButton
                                        href="/wordCloud"

                                    >
                                        법령 클라우드
                                    </StyledButton>
                                </Box>
                                <Divider orientation="vertical" variant="middle" flexItem />
                                <Box>
                                    <StyledButton
                                        href="/chart"
                                    >
                                        실태조사
                                    </StyledButton>
                                </Box>
                            </Box>
                        </Grid>
                    </StyledToolbar >

                </AppBar >
            </Box >

        </ThemeProvider >
    );
};
DashboardNavbar.propTypes = {
    anchorEl: PropTypes.func
};