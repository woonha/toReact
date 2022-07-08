import PropTypes from 'prop-types';
import * as React from 'react';
import { AppBar, Avatar, Badge, Box, IconButton, Toolbar, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Hidden from '@mui/material/Hidden';
import styled from '@emotion/styled';


const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({

  backgroundColor: 'white',
  // theme.palette.background.paper
  boxShadow: theme.shadows[5],
  height: 80,
  width: '100%'
}));

export const DashboardNavbar = (props) => {
  const { onSidebarOpen, ...other } = props;


  return (
    <>
    <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
    <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%'

          }}
        >
          

          <Toolbar
            //  disableGutters
            sx={{
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'hidden'
            }}
          >

              <Link
                variant="h4"
                to="/"
                color="secondary"
                noWrap
                underline="hover"
                sx={{
                  cursor: 'pointer',
                  flexGrow: 1,
                  mx: 3,
                  mr: 3
                }}
              >
                Lowbot
              </Link>

            <nav>
              <Link
                variant="button"
                color="text.primary"
                href="#"
                underline="none"
                sx={{ my: 1, mx: 1.5 }}
              >커뮤니티

              </Link>
              <Link
                variant="button"
                color="text.primary"
                href="#"
                underline="none"
                sx={{ my: 1, mx: 1.5 }}
              >
                실태조사
              </Link>
              <Link
                variant="button"
                color="text.primary"
                href="/card"
                underline="none"
                sx={{ my: 1, mx: 1.5 }}
              >
                카드뉴스
              </Link>
            </nav>
            <Button href="/login" color="secondary" sx={{ my: 1, mx: 1.5 }}>로그인</Button>
            <Button href="/register" color="secondary" variant="contained" sx={{ my: 1, mx: 0 }}>
              회원가입</Button>
          </Toolbar>
          </Box>
          <CssBaseline />
    </>
  );
};