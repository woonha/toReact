import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { DamageType } from '../components/chart/damage-type';
import { Attacker } from '../components/chart/attacker';
import React from 'react';
import { DamageRate } from '../components/chart/damage-rate';


const Chart = () => (
    <>
        <Container maxWidth="lg" sx={{ mb: 4 }}>
            <Box
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    m: 1
                }}
            >
                <Typography
                    sx={{ m: 2 }}
                    variant="h4"
                >
                    실태조사
                </Typography>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8} lg={6}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',

                        }}
                        elevation={16}
                    >
                        <DamageRate />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={6}>
                    <Paper
                        elevation={16}
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',

                        }}
                    >
                        <Attacker test="test" />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper
                        elevation={16}
                        sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <DamageType />
                    </Paper>
                </Grid>
            </Grid>

        </Container>

    </>
);



Chart.getLayout = (page) => (
    { page }
    // <DashboardLayout>
    //     {page}
    // </DashboardLayout>
);
export default Chart;