import styled from '@emotion/styled';
import { AppBar, Box, Breadcrumbs, Button, Container, createTheme, CssBaseline, Divider, Drawer, Grid, IconButton, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Pagination, Stack, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MuiAppBar from '@mui/material/AppBar';
import Title from '../components/chart/title';
import MainCard from '../components/lawCard';
import Main from './main';


const PrecedentView = () => {
    const {state} = useLocation();
    
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

    const [precedent, setPrecedent] = useState({본문:[0]});
    useEffect(() => {
        console.debug("사건번호",state);
        const params = {"사건번호":state};
        axios.post("/precedent/get",params)
        .then(res=>res)
        .then(res=>{
            console.debug("하",res.data);
            setPrecedent(res.data);
        })
        
    }, [])
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        console.debug("으하핳")
      setValue(newValue);
    };
    function a11yProps(index) {
        // return {
        //   id: `vertical-tab-${index}`,
        //   'aria-controls': `vertical-tabpanel-${index}`,
        // };
      }

      function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            // hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
          >
            {(
              <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
    return(
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
                    <Tabs
                    // indicatorColor="pink"
                        variant="scrollable"
                        orientation="vertical"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: 'divider' }}
                        visibleScrollbar={false}
                        
                    >
                        <Tab label="Item One" className="selected" {...a11yProps(0)} />
                        <Tab label="Item Two" {...a11yProps(1)} />
                        <Tab label="Item Three" {...a11yProps(2)} />
                        <Tab label="Item Four" {...a11yProps(3)} />
                        <Tab label="Item Five" {...a11yProps(4)} />
                        <Tab label="Item Six" {...a11yProps(5)} />
                        <Tab label="Item Seven" {...a11yProps(6)} />
                    </Tabs>
                    <TabPanel value={value} index={0}>
{/* 
                        {precedent["본문"].map(gggg=>{
                            return (<Button>gggg</Button>)
                        })}
                        {precedent["각주"].map(gggg=>{
                            return (<Button>gggg</Button>)
                        })} */}
                    </TabPanel>
                    {/* <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        Item Four
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        Item Five
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        Item Six
                    </TabPanel>
                    <TabPanel value={value} index={6}>
                        Item Seven
                    </TabPanel> */}
                    </Box>
                </Stack>
            </Grid>
        </Container>

    </>
    );
};



PrecedentView.getLayout = (page) => (
    {page}
    // <DashboardLayout>
    //     {page}
    // </DashboardLayout>
);
export default PrecedentView;