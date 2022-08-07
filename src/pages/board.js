import { Box, Breadcrumbs, Button, Container, createTheme, Grid, Link, Pagination, Paper, Menu, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { MenuItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../components/chart/title';
import MainCard from '../components/lawCard';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Iconify from '../components/iconify';


const BoardPage = () => {

    const navigate = useNavigate();
    const postClick = (data) => {
        console.debug("클릭", data)
        navigate("/editor", { state: { mode: 1, postid: data } })
    }
    const getFullYmdStr = (time) => {
        var d = new Date(time);
        //return d.getFullYear() + "년 " + (d.getMonth() + 1) + "월 " + d.getDate() + "일 " + d.getHours() + "시 " + d.getMinutes() + "분 " + d.getSeconds() + "초 " + '일월화수목금토'.charAt(d.getUTCDay()) + '요일';
        return d.getFullYear() + "" + (("00" + (d.getMonth() + 1)).slice(-2)) + ("00" + d.getDate()).slice(-2) + ("00" + d.getHours()).slice(-2) + ("00" + d.getMinutes()).slice(-2);
    }
    const size = 10;
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(10);

    const [postList, setPostList] = useState([]);
    const [maxPage, setMaxPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    const write = () => {
        navigate("/editor", { state: { mode: 0 } })
    };
    useEffect(() => {
        const params = { "page": page, "size": size };
        axios.post("/post/getList", params)
            .then(res => res)
            .then(res => {
                setPostList(res.data);
            })
    }, [page])
    const category = [
        {
            value: '0',
            label: '전체'
        },
        {
            value: '1',
            label: '잡담'
        },
        {
            value: '2',
            label: '찌미찌미'
        }
    ];
    const categoryPrint = (value) => {
        if (value == 0) {
            return "전체"
        } else if (value == 1) {
            return "잡담"
        } else if (value == 2) {
            return "찌미찌미"
        }
    }
    return (
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
                        게시판
                    </Typography>
                </Box>
                <Grid container justifyContent="flex-end">
                    <TextField
                        name="category"
                        onChange={handleChange}
                        required
                        select
                        SelectProps={{ native: true }}
                        // value={values.state}
                        variant="outlined"
                    >
                        {category.map((option) => (
                            <option
                                key={option.value}
                                data={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </option>
                        ))}

                    </TextField>
                </Grid>



                <Grid item xs={12} lg={6}>


                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell width="10%" align="center">카테고리</TableCell>
                                    <TableCell width="50%" align="center">제목</TableCell>
                                    <TableCell width="20%" align="center">작성자</TableCell>
                                    <TableCell width="20%" align="center">날짜</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {postList.map((row) => (
                                    <TableRow
                                        key={row.postid}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        onClick={() => { postClick(row.postid) }}>
                                        <TableCell component="th" scope="row">
                                            {categoryPrint(row.category)}
                                        </TableCell>
                                        <TableCell align="right">{row.title}</TableCell>
                                        <TableCell align="right">{row.member_no == 0 ? "익명" : row.member_no}</TableCell>
                                        <TableCell align="right">{getFullYmdStr(row.update_date)}</TableCell>
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
                        {/* <Pagination count={10} page={page} onChange={handleChange} variant="outlined" color="primary" /> */}
                        <Pagination count={1} page={page} onChange={handleChange} variant="outlined" color="primary" />
                    </Box>
                    {/* </Stack> */}
                </Grid>

                <Grid container justifyContent='flex-end'>
                    <Button variant="outlined" onClick={write}>글쓰기</Button>
                </Grid>
            </Container>

        </>
    );
};



BoardPage.getLayout = (page) => (
    { page }
    // <DashboardLayout>
    //     {page}
    // </DashboardLayout>
);
export default BoardPage;