import * as React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import { Box, Button, Container, Grid, Link, TextField, Typography, Paper, Stack } from '@mui/material';
// import { Link as Href } from 'react-router-dom';
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
            main: '#ffebee',
            contrastText: '#374151',
        },
        neutral: {
            main: '#FE4279',
            contrastText: '#374151',
        }
    },
    typography: {
        button: {
            fontWeight: 500,
            fontSize: '0.9rem',
            lineHeight: 1.5,
            fontFamily: 'GowunDodum-Regula'
        },
    },
    shadows: ['none']
},
);
const StyledButton = styled(Button)({
    width: 200,
    height: 68,
    fontSize: 18,
    fontFamily: ['sans-serif'],
    '&:hover': {
        backgroundColor: 'none',
        borderColor: 'none',
        boxShadow: 'none',
        color: 'FE4279',
    },
    color: 'inherit'
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
                                <Box >
                                    <Button
                                        variant="body1"
                                        paddingBottom={10}
                                        href="/statuteTest"

                                    >
                                        법령
                                    </Button>
                                </Box>
                                <Divider orientation="vertical" variant="middle" flexItem />
                                <Box>
                                    <Button
                                        variant="body1"
                                        href="/precedent"

                                    >
                                        판례
                                    </Button>
                                </Box>
                                <Divider orientation="vertical" variant="middle" flexItem />
                                <Box>
                                    <Button
                                        variant="body1"
                                        href="/wordCloud"

                                    >
                                        법령 클라우드
                                    </Button>
                                </Box>
                                <Divider orientation="vertical" variant="middle" flexItem />
                                <Box>
                                    <Button
                                        variant="body1"
                                        href="/news"
                                    >
                                        카드뉴스
                                    </Button>
                                </Box>
                                <Divider orientation="vertical" variant="middle" flexItem />
                                <Box>
                                    <Button
                                        variant="body1"
                                        href="/chart"
                                    >
                                        실태조사
                                    </Button>
                                </Box>
                                <Divider orientation="vertical" variant="middle" flexItem />
                                <Box>
                                    <Button
                                        variant="body1"
                                        href="/board"

                                    >
                                        게시판
                                    </Button>
                                </Box>
                                <Divider orientation="vertical" variant="middle" flexItem />
                                <Box>
                                    <Button
                                        variant="body1"
                                        href="/account"

                                    >
                                        마이페이지 테스트
                                    </Button>
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