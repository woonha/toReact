import { Box, Container, Grid, Typography } from '@mui/material';
import { DamageRate } from '../components/chart/damage-rate';
import { DamageType } from '../components/chart/damage-type';
import { Test1 } from '../components/chart/test1';
import React from 'react';


const Chart = () => (
    <>
        <Typography
            sx={{
                mt: 1,
                mb: 2
            }}
            variant="h5"
        >
            학교폭력 피해 경험 현황
        </Typography>


        <Container>
            <DamageRate />
            <DamageType />
            <Test1 />
        </Container>
    </>
);



Chart.getLayout = (page) => (
    {page}
    // <DashboardLayout>
    //     {page}
    // </DashboardLayout>
);
export default Chart;