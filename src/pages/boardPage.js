import { Box, Breadcrumbs, Button, Container, createTheme, Grid, Link, Pagination, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../components/chart/title';
import MainCard from '../components/lawCard';


const BoardPage = () => {
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
    const postClick = (data) =>{
        console.debug("클릭",data)
        navigate("/editor",{state:{mode:1, postid:data}})
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
        navigate("/editor",{state:{mode:0}})
      };
    useEffect(() => {
        const params = {"page":page,"size":size};
        axios.post("/post/getList",params)
        .then(res=>res)
        .then(res=>{
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
    return(
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid item xs={12} lg={6}>
        <Typography theme={colorTool} align="center" component="h2" variant="h4" color="primary" gutterBottom>
            {"게시판"}
        </Typography>
                <Stack spacing={3}>
                
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
                    <Button variant="outlined" onClick={write}>글쓰기</Button>
                </Grid>
                    
                    <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>카테고리</TableCell>
                            <TableCell align="right">제목</TableCell>
                            <TableCell align="right">작성자</TableCell>
                            <TableCell align="right">날짜</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {postList.map((row) => (
                            <TableRow
                            key={row.postid}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            onClick={()=>{postClick(row.postid)}}>
                            <TableCell component="th" scope="row">
                                {row.category}
                            </TableCell>
                            <TableCell align="right">{row.title}</TableCell>
                            <TableCell align="right">{row.member_no}</TableCell>
                            <TableCell align="right">{row.update_date}</TableCell>
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
                </Stack>
            </Grid>
        </Container>

    </>
    );
};



BoardPage.getLayout = (page) => (
    {page}
    // <DashboardLayout>
    //     {page}
    // </DashboardLayout>
);
export default BoardPage;