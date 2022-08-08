import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabList from '@mui/material/Tabs';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import { useEffect } from "react";
import { AccountProfile } from "./account-profile";
import { AccountMyBoard } from "./account-board";
import { Box, ButtonGroup, Container, Grid, TextField, Typography, Paper, Stack } from '@mui/material';

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
    // console.debug("ddd", children)
    return (

        <Box
            component="main"
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3, padding: 0 }}>
                    <Typography>{children}</Typography>
                </Box>

            )}
        </Box>

    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
};

const a11yProps = (index) => {
    return {

        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`
    };
}

export default function AccountTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    return (
        <Box
            sx={{
                flexGrow: 1,
                bgcolor: "background.color",
                display: "flex",

                justifyContent: 'center'
            }}
        >

            <Box sx={{ width: '50%' }}>
                <Box sx={{ borderBottom: 1, borderColor: "background.paper", backgroundColor: "background.color" }}>
                    <TabList
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        variant="fullWidth"
                        disabled={false}>
                        <Tab label="프로필" {...a11yProps(0)} />
                        <Tab label="내가 쓴 글" {...a11yProps(1)} />
                        <Tab label="댓글" {...a11yProps(2)} />
                    </TabList>
                </Box>
                <TabPanel value={value} index={0}>
                    <AccountProfile />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <AccountMyBoard />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <AccountProfile />
                </TabPanel>
            </Box >

        </Box>
    );
}

