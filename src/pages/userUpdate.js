import { Outlet } from 'react-router-dom';

import React from "react";
import { Box, Button, Container, Grid, Link, TextField, Typography, Paper } from '@mui/material';


const UserUpDate = () => {
    return (
        <>
            <Box>
                회원정보수정 페이지
                <Box>
                    <Link

                        href="/profile"
                        variant="body2"
                        underline="hover"
                        sx={{
                            cursor: 'pointer'
                        }}
                        color="textSecondary"
                    >
                        비번변경
                    </Link>
                </Box>
            </Box>
            <Outlet />

        </>
    );
}
UserUpDate.getLayout = (page) => (
    // <AppAppBar>
    { page }
    //</AppAppBar>
);
export default UserUpDate;