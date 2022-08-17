import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabList from '@mui/material/Tabs';

import { Box, ButtonGroup, Container, Grid, TextField, Typography, Paper, Stack } from '@mui/material';
import { SearchPrecedent } from "./search-precedent";
import { SearchAll } from "./search-all";
import { SearchStatute } from "./search-statute";

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
    console.debug("ddd", children)
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

export default function SearchTabs(props) {
    useEffect(() => {
        console.debug("hahahah", props)
    }, [props])

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    return (
        <Box
            sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: 'center'
            }}
        >
            <Box sx={{ width: '70%' }} >{/*sx={{ width: '70%' }} */}
                <Box sx={{ borderBottom: 1, borderColor: "background.paper" }}>
                    <TabList
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        variant="fullWidth"
                        disabled={false}>
                        <Tab label="All" {...a11yProps(0)} />
                        <Tab label="법령" {...a11yProps(1)} />
                        <Tab label="판례" {...a11yProps(2)} />
                    </TabList>
                </Box>
                <TabPanel value={value} index={0}>
                    <SearchAll searchText={props.searchText} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <SearchStatute />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <SearchPrecedent />
                </TabPanel>
            </Box >

        </Box>
    );
}

