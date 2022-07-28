import styled from '@emotion/styled';
import { Button, Container, createTheme, Grid, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import JoditEditor from "jodit-react";
import axios from 'axios';

const PostEditor = () => {
    const {state} = useLocation();
    
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
    const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [config, setConfig] = useState({});
    
    useEffect(()=>{
        let tempConfig = {
            placeholder: "dd" || 'Start typings...',
            height: '500px',
            allowResizeX: false,
            allowResizeY: false,
            "showCharsCounter": false,
            "showWordsCounter": false,
            "showXPathInStatusbar": false
        }
        if(state.mode == 1){
            
            axios.post("/post/get", {postid:state.postid})
            .then(res => res)
            .then(res => {
                console.debug(res.data.content)

                setTitle(res.data.title)
                tempConfig["readonly"] = true
                // tempConfig["value"] = res.data.content
                tempConfig["toolbar"] = false
                setConfig(tempConfig)
                setContent(res.data.content)
            })
            
        }else if(state.mode == 0){
            setConfig(tempConfig)
        }
        
        console.debug("헤헿ㅇ",state)
    },[])
    useEffect(()=>{

        console.debug("으아아아아앙")
    },[config])
    const write = ()=>{
        const params = {
            category : category,
            title : title,
            content : content
        }
        axios.post("/post/write", params)
            .then(res => res)
            .then(res => {
                console.debug(res)
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
    return(
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid item xs={12} lg={6}>
        <Typography theme={colorTool} align="center" component="h2" variant="h4" color="primary" gutterBottom>
            {"에디터"}
        </Typography>
                <Stack spacing={3}>
                <Grid item xs={3} lg={3}>
                <TextField
                    name="category"
                    onChange={(e)=>{setCategory(e.target.value)}}
                    value = {category}
                    required
                    select
                    SelectProps={{ native: true }}
                    // value={values.state}
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
                  name="name"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  variant="outlined"
                  size="normal"
                />

                <div>
                <JoditEditor
            	ref={editor}
                value={content}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => {
                    console.debug("으아아아아아아" , newContent)
                }}
                />
                </div>
                {
                    state.mode == 1 ? (<></>):(<><Button variant="outlined" onClick={write}>작성</Button></>) 
                }
                
                </Stack>
            </Grid>
        </Container>

    </>
    );
};



PostEditor.getLayout = (page) => (
    {page}
    // <DashboardLayout>
    //     {page}
    // </DashboardLayout>
);
export default PostEditor;