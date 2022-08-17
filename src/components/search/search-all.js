import { useCallback, useEffect, useState } from 'react';
import { Box, Button, Card, CardContent, CardHeader, Container, Divider, Grid, TextField, Typography, Paper, TableContainer, Table, TableBody, TableRow, TableCell, TableHead, Pagination } from '@mui/material';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import { alpha, styled } from "@mui/material/styles";
import MainCard from '../lawCard';
import axios from 'axios';


const colorTool = createTheme({
    palette: {
        primary: {
            main: '#fe4279', //메인 분홍이
            light: '#828DF8',
            dark: '#3832A0',
            contrastText: '#ffebee'
        },
        secondary: { //버튼
            main: '#E7AB79',//황토황토
            light: '#3FC79A',
            dark: '#0B815A',
            contrastText: '#FFFFFF'
        },
        text: {
            primary: '#121828',
            secondary: '#FE4279',
            disabled: 'rgba(55, 65, 81, 0.48)'
        },
        background: {
            default: '#ffebee',
            paper: '#ffffff',//분홍이
            color: '#ffebee'
        }
    }
});
export const SearchAll = (props) => {

    const [statuteList, setStatuteList] = useState([]);
    const [precedentList, setPrecedentList] = useState([]);
    const [page, setPage] = useState(1);
    const size = 10;

    const handleChange = (event, value) => {
        setPage(value);
    };
    useEffect(() => {

        console.debug(props, "하하하하")
        const param = {
            searchText: props.searchText,
            page: page,
            size: size
        }
        axios.post("/statute/getList", param)
            .then(res => res)
            .then(res => {
                console.debug("법령 ", res.data)
                setStatuteList(res.data)
            })
        axios.post("/precedent/getList", param)
            .then(res => res)
            .then(res => {
                console.debug("판례 ", res.data)
                setPrecedentList(res.data)
            })
    }, [props])
    function test(test) {
        const 조문제목 = test["조문제목"] + ")"
        return [test["조문내용"].split(조문제목)[0] + test["조문제목"] + ")", test["조문내용"].split(조문제목)[1]]
    }
    return (

        <Container maxWidth="md">
            <form
                autoComplete="off"
                noValidate
                {...props}
            >
                <ThemeProvider theme={colorTool}>
                    <Paper variant="undefined" sx={{ my: { xs: 3, md: 5 }, p: { xs: 2, md: 3 } }}  >
                        <Container maxWidth="md">
                            {/* <Box
                                component="form"
                                noValidate
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: { sm: '1fr' },
                                    gap: 2,
                                }}
                            >
                            </Box> */}
                            <Divider>
                                <Typography
                                    fontFamily="Segoe UI"
                                    variant="h5"
                                    color="primary"
                                >
                                    법령
                                </Typography>
                            </Divider>
                            <Box
                            // sx={{
                            //     display: 'flex',
                            //     justifyContent: 'flex-end',
                            //     p: 2
                            // }}
                            >
                                <Stack spacing={3}>
                                    <Container>
                                        <Grid item xs={12} lg={6}>

                                            <TableContainer >
                                                {statuteList.length > 0 ? (
                                                    <>
                                                        <Table>
                                                            <TableBody
                                                                borderBottom='1px solid #FE4279'>
                                                                {statuteList.map(data => (
                                                                    <TableRow
                                                                        key={data["_id"]}
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
                                                    </>
                                                ) : (
                                                    <>
                                                        <Table>
                                                            <TableHead>
                                                                <TableRow>
                                                                    <TableCell align="center">결과가 없습니다</TableCell>
                                                                </TableRow>
                                                            </TableHead>
                                                        </Table>
                                                    </>)}

                                            </TableContainer>
                                            {statuteList.length > 0 ? (
                                                <>
                                                    <Box
                                                        display="flex"
                                                        justifyContent="center"
                                                        alignItems="center"
                                                    >
                                                        <Pagination count={10} page={page} onChange={handleChange} variant="outlined" color="primary" />
                                                    </Box>
                                                </>
                                            ) : (<></>)}
                                        </Grid >
                                    </Container>
                                </Stack>

                            </Box>
                        </Container>

                        <Container maxWidth="md">

                            <Divider>
                                <Typography
                                    fontFamily="Segoe UI"
                                    variant="h5"
                                    color="primary"
                                >
                                    판례
                                </Typography>
                            </Divider>
                            <Box>
                                <Stack spacing={3}>
                                    <Container>
                                        <Grid item xs={12} lg={6}>
                                            <TableContainer component={Paper}>
                                                <Table aria-label="simple table">
                                                    {precedentList.length > 0 ? (
                                                        <>
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
                                                        </>
                                                    ) : (
                                                        <>
                                                            <TableHead>
                                                                <TableRow>
                                                                    <TableCell align="center">결과가 없습니다</TableCell>
                                                                </TableRow>
                                                            </TableHead>
                                                            {/* <TableBody>

                                                                <TableRow>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        결과가 없습니다
                                                                    </TableCell>
                                                                </TableRow>
                                                            </TableBody> */}
                                                        </>)}

                                                </Table>
                                            </TableContainer>
                                            {precedentList.length > 0 ? (
                                                <>
                                                    <Box
                                                        display="flex"
                                                        justifyContent="center"
                                                        alignItems="center"
                                                    >
                                                        <Pagination count={10} page={page} onChange={handleChange} variant="outlined" color="primary" />
                                                    </Box>
                                                </>
                                            ) : (<></>)}

                                        </Grid >
                                    </Container>
                                </Stack>
                            </Box>
                        </Container>
                    </Paper>

                </ThemeProvider>

            </form>
        </Container>
    );
};