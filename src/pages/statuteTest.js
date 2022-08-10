import { Box, Breadcrumbs, Button, Container, createTheme, Grid, Link, Stack, TableContainer, Typography } from '@mui/material';
// import React from 'react';
import Title from '../components/chart/title';
import MainCard from '../components/lawCard';
import { styled } from "@mui/material/styles";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import axios from 'axios';


// --------------------------------------
const StatuteTest = () => {

    const [testData, setTestData] = useState([])
    useEffect(() => {
        axios.post("/statute/getList", {})
            .then(res => res)
            .then(res => {
                setTestData(res.data)
                console.debug(res, " 어떻게fhk")
            })
    }, [])

    function test(test) {
        const 조문제목 = test["조문제목"] + ")"
        return [test["조문내용"].split(조문제목)[0] + test["조문제목"] + ")", test["조문내용"].split(조문제목)[1]]
    }
    return (
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
                    법령
                </Typography>
            </Box>

            <Grid item xs={12} lg={6}>

                <TableContainer>
                    <Table sx={{ minWidth: 1000 }} >
                        <TableBody
                            borderBottom='1px solid #FE4279'>
                            {testData.map(data => (
                                <TableRow
                                    key={test(data)[1]}
                                >
                                    <TableCell
                                        borderBottom='1px solid ##FE4279' >
                                        {test(data)[0]}
                                    </TableCell >
                                    <TableCell align="left">
                                        <Typography variant="body2" gutterBottom>
                                            {test(data)[1]}
                                        </Typography>
                                        {data["항"].map(hang => {
                                            return (
                                                <>
                                                    <Typography variant="body2" gutterBottom>
                                                        {hang["항내용"]}
                                                    </Typography>

                                                    {hang["호"].map(ho => {
                                                        return (
                                                            <Typography color="textSecondary" variant="body2" gutterBottom>
                                                                {ho["호내용"]}
                                                            </Typography>
                                                        )
                                                    })}
                                                </>
                                            )
                                        })
                                        }
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid >
        </Container >
    );
};

StatuteTest.getLayout = (page) => (
    { page }
    // <DashboardLayout>
    //     {page}
    // </DashboardLayout>
);
export default StatuteTest;