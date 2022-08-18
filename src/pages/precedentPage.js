import { Box, Container, createTheme, Grid, Pagination, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, AppBar, Toolbar } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../components/chart/title';
import MainCard from '../components/lawCard';


const PrecedentPage = () => {

    const navigate = useNavigate();
    const test = (data) => {
        console.debug("클릭", data)
        navigate("/case", { state: data })
    }

    const size = 10;
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);

    const [precedentList, setPrecedentList] = useState([]);
    const [maxPage, setMaxPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        const params = { paging: { "page": page, "size": size } };
        axios.post("/precedent/getList", params)
            .then(res => res)
            .then(res => {
                console.debug(res)
                setPrecedentList(res.data.list);
                setTotal(res.data.paging.total);
                setMaxPage(res.data.paging.maxPage);
            })

    }, [page])
    return (
        <>
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
                        판례
                    </Typography>
                </Box>

                <Grid item xs={12} lg={6}>

                    <Stack spacing={3}>
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell width="10%" align="right">결과</TableCell>
                                        <TableCell width="30%" align="right">사건명</TableCell>
                                        <TableCell width="30%" align="right">사건번호</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {precedentList.map((row) => (
                                        <TableRow
                                            key={row.사건번호}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            onClick={() => { test(row.사건번호) }}>
                                            <TableCell align="right" component="th" scope="row">
                                                {row.결과}
                                            </TableCell>
                                            <TableCell align="right">{row.사건명}</TableCell>
                                            <TableCell align="right">{row.사건번호}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Pagination count={maxPage} page={page} onChange={handleChange} variant="outlined" color="primary" />
                        </Box>
                    </Stack>
                </Grid>
            </Container>

        </>
    );
};



PrecedentPage.getLayout = (page) => (
    { page }
    // <DashboardLayout>
    //     {page}
    // </DashboardLayout>
);
export default PrecedentPage;