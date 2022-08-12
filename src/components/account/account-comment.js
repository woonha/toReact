import { useEffect, useState } from 'react';
import { Box, Paper, Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Container, Grid } from '@mui/material';
import { styled } from "@mui/material/styles";
import axios from 'axios';

const CssContainer = styled(Container)({
    '@media all': {
        paddingRight: 0,
        paddingLeft: 0,
        marginTop: 0
    }
})

export const AccountComment = () => {

    const [page, setPage] = useState(0);

    const [myCommentList, setCommentList] = useState([]);

    useEffect(() => {
        const params = { "commentid": 0 };
        axios.post("/comment/getMyList", params)
            .then(res => res)
            .then(res => {
                console.debug("내가 쓴 댓글 리스트", res)
                setCommentList(res.data)
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
        <CssContainer maxWidth="lg" sx={{ mb: 4 }}>
            <Grid item xs={12} lg={6}>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {/* <TableCell width="10%" align="center">카테고리</TableCell> */}
                                <TableCell width="60%" align="center">댓글 내용</TableCell>
                                <TableCell width="30%" align="center">날짜</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody
                            sx={{ backgroundColor: '#fff' }}>
                            {myCommentList.map((comment) => (
                                <TableRow
                                    key={comment.commentid}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    {/* <TableCell align="center" component="th" scope="row">
                                        {categoryPrint(comment.category)}
                                    </TableCell> */}
                                    <TableCell align="center" dangerouslySetInnerHTML={{ __html: comment.content }}></TableCell>
                                    <TableCell align="center">{getFullYmdStr(comment.update_date)}</TableCell>
                                    {/* <TableCell align="right">
                                        <Icon component={DeleteForeverIcon} color="primary" fontSize="small" />
                                        <Icon component={EditIcon} color="primary" fontSize="small" />
                                        <Icon component={FeedbackIcon} color="primary" fontSize="small" />
                                    </TableCell> */}
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