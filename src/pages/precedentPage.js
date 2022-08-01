import { Box, Container, createTheme, Grid, Pagination, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, AppBar, Toolbar } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../components/chart/title';
import MainCard from '../components/lawCard';


const PrecedentPage = () => {
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
    const navigate = useNavigate();
    const test = (data) => {
        console.debug("클릭", data)
        navigate("/temp", { state: data })
    }

    const size = 10;
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(10);

    const [precedentList, setPrecedentList] = useState([]);
    const [maxPage, setMaxPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        const params = { "page": page, "size": size };
        axios.post("/precedent/getList", params)
            .then(res => res)
            .then(res => {
                setPrecedentList(res.data);
            })

    }, [page])
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Box sx={{ flexGrow: 2 }} />

                        <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
                            판 례
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

                <Grid item xs={12} lg={6}>

                    <Stack spacing={3}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>결과</TableCell>
                                        <TableCell align="right">사건번호</TableCell>
                                        <TableCell align="right">사건명</TableCell>
                                        <TableCell align="right">이유</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {precedentList.map((row) => (
                                        <TableRow
                                            key={row.사건번호}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            onClick={() => { test(row.사건번호) }}>
                                            <TableCell component="th" scope="row">
                                                {row.결과}
                                            </TableCell>
                                            <TableCell align="right">{row.사건번호}</TableCell>
                                            <TableCell align="right">{row.사건명}</TableCell>
                                            <TableCell align="right">{row.이유}</TableCell>
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
                            <Pagination count={10} page={page} onChange={handleChange} variant="outlined" color="primary" />
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