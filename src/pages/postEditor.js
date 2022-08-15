import styled from '@emotion/styled';
import { Button, Chip, Container, createTheme, Divider, Grid, Icon, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import JoditEditor from "jodit-react";
import axios from 'axios';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import FeedbackIcon from '@mui/icons-material/Feedback';

const PostEditor = () => {
    const { state } = useLocation();

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
    const editor = useRef(null);
    const commentEditor = useRef(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState(0);
    const [config, setConfig] = useState({});
    const [viewMode, setViewMode] = useState(false);
    const [comment, setComment] = useState("");
    const [commentList, setCommentList] = useState([]);
    const [commentEditorConfig, setCommentEditorConfig] = useState({
        placeholder: "댓글을 입력하세요" || 'Start typings...',
        height: '50px',
        allowResizeX: false,
        allowResizeY: false,
        "showCharsCounter": false,
        "showWordsCounter": false,
        "showXPathInStatusbar": false,
        toolbar: false
    });
    const getFullYmdStr = (time) => {
        var d = new Date(time);
        //return d.getFullYear() + "년 " + (d.getMonth() + 1) + "월 " + d.getDate() + "일 " + d.getHours() + "시 " + d.getMinutes() + "분 " + d.getSeconds() + "초 " + '일월화수목금토'.charAt(d.getUTCDay()) + '요일';
        return d.getFullYear() + "" + (("00" + (d.getMonth() + 1)).slice(-2)) + ("00" + d.getDate()).slice(-2) + ("00" + d.getHours()).slice(-2) + ("00" + d.getMinutes()).slice(-2);
    }
    useEffect(() => {
        let tempConfig = {
            placeholder: "dd" || 'Start typings...',
            height: '500px',
            allowResizeX: false,
            allowResizeY: false,
            "showCharsCounter": false,
            "showWordsCounter": false,
            "showXPathInStatusbar": false
        }
        let comConfig = {
            placeholder: "dd" || 'Start typings...',
            height: '100px',
            allowResizeX: false,
            allowResizeY: false,
            "showCharsCounter": false,
            "showWordsCounter": false,
            "showXPathInStatusbar": false
        }

        if (state.mode == 1) {
            /*
            axios({
                method: 'post', url: "/post/getList", baseURL: "http://localhost:8080/", data: {
                    postid: state.postid
                }
            })
                .then(res => res)
                .then(res => {
                    console.debug(" 하하시발", res.data.content)

                })
*/
            axios.post("post/get", { post_idx: state.post_idx })
                .then(res => res)
                .then(res => {
                    console.debug(res.data.content)
                    setCategory(res.data.category)
                    setTitle(res.data.title)
                    tempConfig["readonly"] = true
                    // tempConfig["value"] = res.data.content
                    tempConfig["toolbar"] = false
                    setConfig(tempConfig);
                    setViewMode(true);
                    setContent(res.data.content);
                    axios.post("/comment/getList", { post_idx: state.post_idx })
                        .then(res => res)
                        .then(res => {
                            console.debug(res.data)
                            setCommentList(res.data)
                        })
                })

        } else if (state.mode == 0) {
            setConfig(tempConfig)
        }
    }, [])

    const write = () => {
        if (title == "") {
            alert("제목을 입력하세요")
            return
        }
        const params = {
            category: category,
            title: title,
            content: content
        }
        axios.post("post/write", params)
            .then(res => res)
            .then(res => {
                navigate("/board")
            })
    }
    const commentWrite = () => {
        if (comment == "") {
            alert("코멘트를 입력하세요")
            return
        }
        const params = {
            post_idx: state.post_idx,
            content: comment
        }
        axios.post("/comment/write", params)
            .then(res => res)
            .then(res => {
                navigate("/board")
            })
    }

    const categoryList = [
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
    return (
        <>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid item xs={12} lg={6}>
                    {/* <Typography theme={colorTool} align="center" component="h2" variant="h4" color="primary" gutterBottom>
                        {"에디터"}
                    </Typography> */}
                    <Stack spacing={3}>
                        <Grid item xs={3} lg={3}>
                            <TextField
                                name="category"
                                onChange={(e) => setCategory(e.target.value)}
                                required
                                select
                                SelectProps={{ native: true }}
                                value={category}
                                variant="outlined"
                            >
                                {categoryList.map((option) => (
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

                        <TextField
                            fullwidth
                            label="제목"
                            margin="dense"
                            name="title"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            variant="outlined"
                            size="normal"
                            disabled={viewMode}
                        />

                        <div>
                            <JoditEditor
                                ref={editor}
                                value={content}
                                config={config}
                                tabIndex={1} // tabIndex of textarea
                                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                            />
                        </div>
                        {
                            viewMode == true ? (
                                <>
                                    <Divider>댓글목록</Divider>
                                    <TableContainer>
                                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    {commentList.length == 0 ?
                                                        (
                                                            <>
                                                                <TableCell align="center">코멘트가 없습니다</TableCell>
                                                            </>
                                                        )
                                                        :
                                                        (
                                                            <>
                                                                <TableCell width="10%" align="center">작성자</TableCell>
                                                                <TableCell width="50%" align="center">내용</TableCell>
                                                                <TableCell width="20%" align="right">날짜</TableCell>
                                                                <TableCell width="10%" align="center"></TableCell>
                                                            </>
                                                        )}

                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {commentList.map((comment) => (
                                                    <TableRow
                                                        key={comment.comment_idx}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        onClick={() => { console.debug("히히") }}>
                                                        <TableCell align="center" component="th" scope="row">
                                                            {comment.writer == null ? "익명" : comment.writer}
                                                        </TableCell>
                                                        <TableCell align="left" dangerouslySetInnerHTML={{ __html: comment.content }}></TableCell>
                                                        <TableCell align="right">{getFullYmdStr(comment.update_date)}</TableCell>
                                                        <TableCell align="right">
                                                            <Icon component={DeleteForeverIcon} color="primary" fontSize="small" />
                                                            <Icon component={EditIcon} color="primary" fontSize="small" />
                                                            <Icon component={FeedbackIcon} color="primary" fontSize="small" />
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    <Divider>댓글</Divider>
                                    <JoditEditor
                                        ref={commentEditor}
                                        value={comment}
                                        config={commentEditorConfig}
                                        tabIndex={1} // tabIndex of textarea
                                        onBlur={newComment => setComment(newComment)}
                                    />
                                    <Button variant="outlined" onClick={commentWrite}>댓글작성</Button>
                                </>
                            ) : (<><Button variant="outlined" onClick={write}>작성</Button></>)
                        }
                    </Stack>
                </Grid>
            </Container>

        </>
    );
};



PostEditor.getLayout = (page) => (
    { page }
    // <DashboardLayout>
    //     {page}
    // </DashboardLayout>
);
export default PostEditor;