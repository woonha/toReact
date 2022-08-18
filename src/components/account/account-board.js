import { useCallback, useEffect, useState } from 'react';
import { Box, Container, Divider, Grid, Paper, Table, TableCell, TableContainer, TableHead, TableRow, TableBody } from '@mui/material';
import { styled } from "@mui/material/styles";
import axios from 'axios';

const CssContainer = styled(Container)({
    '@media all': {
        paddingRight: 0,
        paddingLeft: 0,
        marginTop: 0
    }

})

const size = 10;
export const AccountBoard = () => {
    const [page, setPage] = useState(0);

    const [myPostList, setMyPostList] = useState([]);

    const onChange = useCallback(e => {
        setPage(e.target.postMyList);
    })

    useEffect(() => {
        const params = { "page": page, "size": size };
        axios.post("/post/getMyList", params)
            .then(res => res)
            .then(res => {

                console.debug("내가 쓴 글 리스트", res)
                setMyPostList(res.data)
            })
    }, [page])

    const getFullYmdStr = (time) => {
        var d = new Date(time);
        //return d.getFullYear() + "년 " + (d.getMonth() + 1) + "월 " + d.getDate() + "일 " + d.getHours() + "시 " + d.getMinutes() + "분 " + d.getSeconds() + "초 " + '일월화수목금토'.charAt(d.getUTCDay()) + '요일';
        return d.getFullYear() + "" + (("00" + (d.getMonth() + 1)).slice(-2)) + ("00" + d.getDate()).slice(-2) + ("00" + d.getHours()).slice(-2) + ("00" + d.getMinutes()).slice(-2);
    }

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
        <CssContainer maxWidth="lg" sx={{ my: 9, px: 0 }}>
            <Grid item xs={12} lg={6}>

                <TableContainer component={Paper}>

                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell width="10%" align="center">카테고리</TableCell>
                                <TableCell width="30%" align="center">제목</TableCell>
                                <TableCell width="40%" align="center">내용</TableCell>
                                <TableCell width="30%" align="center">날짜</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody
                            sx={{ backgroundColor: '#fff' }}>
                            {myPostList.map((row) => (
                                <TableRow
                                    key={row.post_idx}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {categoryPrint(row.category)}
                                    </TableCell>

                                    <TableCell align="center">{row.title}</TableCell>
                                    <TableCell align="center" dangerouslySetInnerHTML={{ __html: row.content }}></TableCell>
                                    <TableCell align="center">{getFullYmdStr(row.update_date)}</TableCell>
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
                </Box>
                {/* </Stack> */}
            </Grid>
        </CssContainer>
    );
};

AccountBoard.getLayout = (page) => (
    { page }
);
export default AccountBoard;