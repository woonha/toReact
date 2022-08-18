import styled from '@emotion/styled';
import { Button, Chip, Container, createTheme, Divider, Grid, Icon, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import JoditEditor from "jodit-react";
import axios from 'axios';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { check, getUserProfile } from '../auth/auth'

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
    const recommentEditor = useRef(null);
    const commentUpdateEditor = useRef(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    const [commentName, setCommentName] = useState('');
    const [commentPass, setCommentPass] = useState('');

    const [isReComment, setIsReComment] = useState(0);

    const [isCommentEdit, setIsCommentEdit] = useState(0);

    const [level, setLevel] = useState(1);

    const [category, setCategory] = useState(0);
    const [config, setConfig] = useState({});
    const [viewMode, setViewMode] = useState(false);
    const [comment, setComment] = useState("");
    const [recomment, setRecomment] = useState("");
    const [commentEdit, setCommentEdit] = useState("");
    const [commentList, setCommentList] = useState([]);
    const [commentEditorConfig, setCommentEditorConfig] = useState({
        placeholder: "댓글을 입력하세요" || 'Start typings...',
        "minHeight": 100,
        "maxHeight": 100,
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
                    commentFresh()
                })

        } else if (state.mode == 0) {
            setConfig(tempConfig)
        }
    }, [])

    const commentFresh = () => {
        setIsCommentEdit(0)
        setIsReComment(0)
        axios.post("/comment/getList", { post_idx: state.post_idx })
            .then(res => res)
            .then(res => {
                console.debug(res.data)
                setCommentList(res.data)
                setComment("")
                setRecomment("")
                setCommentEdit("")
            })
    }
    const postDelete = () => {
        let params = {
            post_idx: state.post_idx
        }
        axios.post("/post/delete", params)
            .then(res => res)
            .then(res => {
                navigate("/board")
                console.debug("삭제되엇음")
            })
    }
    const postUpdate = () => {
        setConfig({
            placeholder: "dd" || 'Start typings...',
            height: '500px',
            allowResizeX: false,
            allowResizeY: false,
            "showCharsCounter": false,
            "showWordsCounter": false,
            "showXPathInStatusbar": false,
            readonly: false
        });
        setViewMode(false)
    }
    const postUpdateButtonClick = () => {
        let userData = getUserProfile();
        let params = {
            post_idx: state.post_idx,
            content: content,
            title: title,
            category: category,
            writer: userData.name
        }
        if (!check()) {
            params.writer = name
            //params.pass = pass
        }
        console.debug(params, " 업뎃시 파랆")
        axios.post("/post/update", params)
            .then(res => res)
            .then(res => {


                console.debug("업뎃됨")

                setConfig({
                    placeholder: "dd" || 'Start typings...',
                    height: '500px',
                    allowResizeX: false,
                    allowResizeY: false,
                    "showCharsCounter": false,
                    "showWordsCounter": false,
                    "showXPathInStatusbar": false,
                    readonly: true
                });
                setViewMode(true)
            })
    }
    const commentDelete = (comment_idx) => {
        let params = {
            comment_idx: comment_idx
        }
        axios.post("/comment/delete", params)
            .then(res => res)
            .then(res => {
                console.debug("삭제되엇음")
                commentFresh()
            })
    }

    const commentUpdate = (comment_idx, content) => {
        setIsCommentEdit(comment_idx)
        setIsReComment(0)
        setCommentEdit(content)

        // let params = {
        //     comment_idx : comment_idx
        // }
        // axios.post("/comment/update",params)
        // .then(res=>res)
        // .then(res=>{


        //     console.debug("업뎃됨")
        // })
    }
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

    const updateCommentWrite = () => {
        if (commentEdit == "") {
            alert("코멘트를 입력하세요")
            return
        }
        let userData = getUserProfile();
        let params = {
            comment_idx: isCommentEdit,
            content: commentEdit,
            member_no: userData.member_no,
            writer: userData.name
        }
        if (!check()) {
            params.writer = commentName
            params.pass = commentPass
        }

        axios.post("/comment/update", params)
            .then(res => res)
            .then(res => {
                commentFresh()
            })
    }
    const reCommentWrite = () => {
        if (recomment == "") {
            alert("코멘트를 입력하세요")
            return
        }
        let userData = getUserProfile();
        let params = {
            parent_comment_idx: isReComment,
            level: level + 1,
            post_idx: state.post_idx,
            content: recomment,
            member_no: userData.member_no,
            writer: userData.name
        }
        if (!check()) {
            params.writer = commentName
            params.pass = commentPass
        }

        axios.post("/comment/write", params)
            .then(res => res)
            .then(res => {
                commentFresh()
            })
    }
    const commentWrite = () => {
        if (comment == "") {
            alert("코멘트를 입력하세요")
            return
        }
        let userData = getUserProfile();
        let params = {
            post_idx: state.post_idx,
            content: comment,
            member_no: userData.member_no,
            writer: userData.name
        }
        if (!check()) {
            params.writer = commentName
            params.pass = commentPass
        }

        axios.post("/comment/write", params)
            .then(res => res)
            .then(res => {
                commentFresh()
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
                    <Divider>게시물 정보</Divider>
                    <Icon component={DeleteForeverIcon} onClick={() => postDelete()} color="primary" fontSize="big" />
                    <Icon component={EditIcon} onClick={() => postUpdate()} color="primary" fontSize="big" />
                    {check() ? (<>로그인된상태</>) : (
                        <>
                            <Grid item xs={5} lg={12}>
                                <TextField
                                    fullwidth
                                    label="이름"
                                    required
                                    name="name"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    variant="outlined"
                                    style={{ width: '30%' }}
                                    disabled={viewMode}
                                />
                            </Grid>
                        </>
                    )}
                    <Stack spacing={3}>

                        <Grid item xs={5} lg={12}>
                            <TextField
                                label="category"
                                name="category"
                                onChange={(e) => setCategory(e.target.value)}
                                required
                                style={{ width: '10%' }}
                                select
                                SelectProps={{ native: true }}
                                value={category}
                                variant="outlined"
                                disabled={viewMode}
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
                            <TextField
                                fullwidth
                                label="제목"
                                required
                                name="title"
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                                variant="outlined"
                                style={{ width: '90%' }}
                                disabled={viewMode}
                            />
                        </Grid>
                        <Divider>내용</Divider>
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
                                        <Table aria-label="simple table">
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
                                                    <>
                                                        <TableRow
                                                            key={comment.comment_idx}
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell align="center" component="th" scope="row">
                                                                {comment.writer == null ? "익명" : comment.writer}
                                                            </TableCell>
                                                            <TableCell align="left" dangerouslySetInnerHTML={{ __html: comment.content }} onClick={() => {
                                                                setIsCommentEdit(0)
                                                                setIsReComment(comment.comment_idx)
                                                                setLevel(comment.level)
                                                            }}></TableCell>
                                                            <TableCell align="right">{getFullYmdStr(comment.update_date)}</TableCell>
                                                            <TableCell align="right">
                                                                <Icon component={DeleteForeverIcon} onClick={() => commentDelete(comment.comment_idx)} color="primary" fontSize="small" />
                                                                <Icon component={EditIcon} onClick={() => commentUpdate(comment.comment_idx, comment.content)} color="primary" fontSize="small" />
                                                                {/* <Icon component={FeedbackIcon} color="primary" fontSize="small" /> */}
                                                            </TableCell>
                                                        </TableRow>

                                                        {isCommentEdit > 0 & comment.comment_idx == isCommentEdit ? (
                                                            <>
                                                                댓글수정
                                                                <TableRow>
                                                                    <TableCell width="10%" align="center"></TableCell>
                                                                    <TableCell colSpan={3}>
                                                                        {check() ? (<>로그인된상태</>) : (
                                                                            <>

                                                                                <TextField
                                                                                    fullwidth
                                                                                    label="이름"
                                                                                    required
                                                                                    name="commentName"
                                                                                    onChange={(e) => setCommentName(e.target.value)}
                                                                                    value={commentName}
                                                                                    variant="outlined"
                                                                                    style={{ width: '30%' }}
                                                                                />
                                                                                <TextField
                                                                                    fullwidth
                                                                                    label="비밀번호"
                                                                                    required
                                                                                    name="commentPass"
                                                                                    onChange={(e) => setCommentPass(e.target.value)}
                                                                                    value={commentPass}
                                                                                    variant="outlined"
                                                                                    style={{ width: '30%' }}
                                                                                />
                                                                            </>
                                                                        )}
                                                                        <JoditEditor
                                                                            ref={commentUpdateEditor}
                                                                            value={commentEdit}
                                                                            config={commentEditorConfig}
                                                                            tabIndex={1} // tabIndex of textarea
                                                                            onBlur={newComment => setCommentEdit(newComment)}
                                                                        />
                                                                        <Button variant="outlined" onClick={updateCommentWrite}>댓글수정</Button>
                                                                    </TableCell>
                                                                </TableRow>
                                                            </>
                                                        ) : (
                                                            <>

                                                            </>)}


                                                        {isReComment > 0 & comment.comment_idx == isReComment ? (
                                                            <>
                                                                리댓글작성
                                                                <TableRow>
                                                                    <TableCell width="10%" align="center"></TableCell>
                                                                    <TableCell colSpan={3}>
                                                                        {check() ? (<>로그인된상태</>) : (
                                                                            <>

                                                                                <TextField
                                                                                    fullwidth
                                                                                    label="이름"
                                                                                    required
                                                                                    name="commentName"
                                                                                    onChange={(e) => setCommentName(e.target.value)}
                                                                                    value={commentName}
                                                                                    variant="outlined"
                                                                                    style={{ width: '30%' }}
                                                                                />
                                                                                <TextField
                                                                                    fullwidth
                                                                                    label="비밀번호"
                                                                                    required
                                                                                    name="commentPass"
                                                                                    onChange={(e) => setCommentPass(e.target.value)}
                                                                                    value={commentPass}
                                                                                    variant="outlined"
                                                                                    style={{ width: '30%' }}
                                                                                />
                                                                            </>
                                                                        )}
                                                                        <JoditEditor
                                                                            ref={recommentEditor}
                                                                            value={recomment}
                                                                            config={commentEditorConfig}
                                                                            tabIndex={1} // tabIndex of textarea
                                                                            onBlur={newComment => setRecomment(newComment)}
                                                                        />
                                                                        <Button variant="outlined" onClick={reCommentWrite}>댓글작성</Button>
                                                                    </TableCell>
                                                                </TableRow>
                                                            </>
                                                        ) : (
                                                            <>

                                                            </>)}
                                                    </>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    <Divider>댓글</Divider>
                                    {check() ? (<>로그인된상태</>) : (
                                        <>
                                            <Grid item xs={5} lg={12}>
                                                <TextField
                                                    fullwidth
                                                    label="이름"
                                                    required
                                                    name="commentName"
                                                    onChange={(e) => setCommentName(e.target.value)}
                                                    value={commentName}
                                                    variant="outlined"
                                                    style={{ width: '30%' }}
                                                />
                                                <TextField
                                                    fullwidth
                                                    label="비밀번호"
                                                    required
                                                    name="commentPass"
                                                    onChange={(e) => setCommentPass(e.target.value)}
                                                    value={commentPass}
                                                    variant="outlined"
                                                    style={{ width: '30%' }}
                                                />
                                            </Grid>
                                        </>
                                    )}
                                    <JoditEditor
                                        ref={commentEditor}
                                        value={comment}
                                        config={commentEditorConfig}
                                        tabIndex={1} // tabIndex of textarea
                                        onBlur={newComment => setComment(newComment)}
                                    />
                                    <Button variant="outlined" onClick={commentWrite}>댓글작성</Button>
                                </>
                            ) : (
                                <>
                                    {state.mode == 0 ? (
                                        <Button variant="outlined" onClick={write}>작성</Button>
                                    )
                                        : (
                                            <Button variant="outlined" onClick={postUpdateButtonClick}>수정</Button>
                                        )}

                                </>
                            )
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