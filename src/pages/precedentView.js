import styled from '@emotion/styled';
import { AppBar, Box, Breadcrumbs, Button, Card, CardActions, CardContent, Container, createTheme, CssBaseline, Divider, Drawer, Grid, IconButton, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Pagination, Paper, Stack, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MuiAppBar from '@mui/material/AppBar';
import Title from '../components/chart/title';
import MainCard from '../components/lawCard';
import Main from './main';


const PrecedentView = () => {
    const { state } = useLocation();
    const URLParam = new URLSearchParams(window.location.search)
    const colorTool = createTheme({
        palette: {
            primary: {
                main: '#fe4279', //메인 분홍이
                light: '#828DF8',
                dark: '#3832A0',
                contrastText: '#ffebee'
            },
        }
    });

    const [precedent, setPrecedent] = useState({ 본문: [0] });
    useEffect(() => {
        const name = URLParam.get("name");
        let sendParameter = state;
        if (name != null) {
            sendParameter = name
        }
        //let name = params.get("name");
        console.debug("사건번호", sendParameter);
        const params = { "사건번호": sendParameter };
        axios.post("/precedent/get", params)
            .then(res => res)
            .then(res => {
                console.debug("하", res.data);
                setPrecedent(res.data);
            })

    }, [])
    const [value, setValue] = React.useState(0);

    return (
        <>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid item xs={12} lg={6}>
                    <Typography theme={colorTool} align="center" component="h2" variant="h4" color="primary" gutterBottom>
                        {"판례"}
                    </Typography>
                    <Stack spacing={3}>
                        <Box
                            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
                        >
                            <Card sx={{ minWidth: 600 }}>
                                <CardContent>
                                    <Divider />
                                    <Typography variant="h5" component="div">
                                        {precedent["사건번호"]}
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        {precedent["사건명"]}
                                    </Typography>
                                    <Divider />
                                    <br></br>
                                    <Typography variant="body2">
                                        {precedent["본문"].map((haha) => {
                                            //console.debug("gg", haha.get)
                                            let keys = Object.keys(haha)
                                            return (
                                                <>
                                                    <Divider light textAlign='left'>{keys[0]}</Divider>
                                                    <div style={{ "white-space": "pre-wrap" }}>{haha[keys[0]]}</div>
                                                </>
                                            )
                                        })}
                                    </Typography>
                                </CardContent>
                                {/* <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions> */}
                            </Card>
                        </Box>
                    </Stack>
                </Grid>
            </Container>

        </>
    );
};



PrecedentView.getLayout = (page) => (
    { page }
    // <DashboardLayout>
    //     {page}
    // </DashboardLayout>
);
export default PrecedentView;