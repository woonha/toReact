import styled from '@emotion/styled';
import { Container, createTheme, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import JoditEditor from "jodit-react";

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
    const editor = useRef(null)
	const [content, setContent] = useState('')

	const config = {
		readonly: false, // all options from https://xdsoft.net/jodit/doc/,
		placeholder: "dd" || 'Start typings...',
        height: '500px',
        allowResizeX: false,
        allowResizeY: false,
        //toolbar: false,
        "showCharsCounter": false,
        "showWordsCounter": false,
        "showXPathInStatusbar": false
	}
    useEffect(() => {

    }, [])

    return(
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid item xs={12} lg={6}>
        <Typography theme={colorTool} align="center" component="h2" variant="h4" color="primary" gutterBottom>
            {"에디터"}
        </Typography>
        ㅇㅇ
                <Stack spacing={3}>
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