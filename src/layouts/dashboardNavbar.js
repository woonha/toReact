import * as React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import { Container, Link } from '@mui/material';
// import { Link as Href } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { check } from '../auth/auth';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
    color: '#ffebee',
    backgroundColor: theme.primary,
}));

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
        <React.Fragment>

            <Container maxWidth="md">

                <StyledToolbar
                    component="nav"
                    variant="dense"
                    sx={{ justifyContent: 'space-between', overflowX: 'auto', p: 1, flexShrink: 0 }}
                >
                    <Link
                        sx={{ p: 1, flexShrink: 0 }}
                        variant="body1"
                        href="/statuteTest"
                        noWrap
                        style={{ textDecoration: 'none' }}
                    >
                        법령
                    </Link>
                    {/* </Box> */}
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Link
                        sx={{ p: 1, flexShrink: 0 }}
                        variant="body1"
                        href="/precedent"
                        noWrap
                        style={{ textDecoration: 'none' }}
                    >
                        판례
                    </Link>

                    <Divider orientation="vertical" variant="middle" flexItem />

                    <Link
                        sx={{ p: 1, flexShrink: 0 }}
                        variant="body1"
                        href="/wordCloud"
                        noWrap
                        style={{ textDecoration: 'none' }}
                    >
                        법령 클라우드
                    </Link>

                    <Divider orientation="vertical" variant="middle" flexItem />

                    <Link
                        sx={{ p: 1, flexShrink: 0 }}
                        variant="body1"
                        href="/news"
                        noWrap
                        style={{ textDecoration: 'none' }}
                    >
                        카드뉴스
                    </Link>

                    <Divider orientation="vertical" variant="middle" flexItem />

                    <Link
                        sx={{ p: 1, flexShrink: 0 }}
                        variant="body1"
                        href="/chart"
                        noWrap
                        style={{ textDecoration: 'none' }}
                    >
                        실태조사
                    </Link>

                    <Divider orientation="vertical" variant="middle" flexItem />

                    <Link
                        sx={{ p: 1, flexShrink: 0 }}
                        variant="body1"
                        href="/board"
                        noWrap
                        style={{ textDecoration: 'none' }}
                    >
                        게시판
                    </Link>
                </StyledToolbar >
            </Container>
        </React.Fragment>
    );
};
DashboardNavbar.propTypes = {
    anchorEl: PropTypes.func
};