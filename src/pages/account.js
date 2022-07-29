import React from "react";
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import { AccountProfile } from '../components/account/account-profile';
import AccountTabs from "../components/account/account-tabs";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled, alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';

const Account = () => (
    <>
        <AccountTabs></AccountTabs>
    </>
);

Account.getLayout = (page) => (
    { page }
);
export default Account;