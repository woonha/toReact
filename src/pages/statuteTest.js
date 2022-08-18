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
    const size = 10;
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(10);

    // const [precedentList, setPrecedentList] = useState([]);
    const [maxPage, setMaxPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    const [testData, setTestData] = useState([])
    useEffect(() => {
        const params = { paging: { "page": page, "size": size } };
        axios.post("/statute/getList", params)
            .then(res => res)
            .then(res => {
                setTestData(res.data.list)
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
                    color: '#FE4279',
                    flexDirection: 'column',
                    m: 1
                }}
            >
                <Typography
                    sx={{ m: 2 }}
                    variant="h4"
                    fontFamily="HallymMjo-Regular"
                >
                    법령
                </Typography>
            </Box>

            <Grid item xs={12} lg={6}>

                <TableContainer>
                    <Table>
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