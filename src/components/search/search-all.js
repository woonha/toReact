import { useCallback, useState } from 'react';
import { Box, Button, Card, CardContent, CardHeader, Container, Divider, Grid, TextField, Typography, Paper } from '@mui/material';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import { alpha, styled } from "@mui/material/styles";


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
        background: {
            default: '#ffebee',
            paper: '#ffebee',//분홍이
            color: '#ffebee'
        }
    }
});
export const SearchAll = (props) => {
    console.debug("으아아아")
    return (

        <Container maxWidth="md">
            <form
                autoComplete="off"
                noValidate
                {...props}
            >
                <ThemeProvider theme={colorTool}>
                    <Paper variant="undefined" sx={{ my: { xs: 3, md: 5 }, p: { xs: 2, md: 3 } }}  >
                        <Box sx={{
                            my: 5,
                            marginTop: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <Typography
                                fontFamily="Segoe UI"
                                variant="h5"
                                color="primary"
                            >
                                내가 쓴 글
                            </Typography>
                        </Box>

                        <Container maxWidth="md">
                            <Box
                                component="form"
                                noValidate
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: { sm: '1fr' },
                                    gap: 2,
                                }}
                            >


                            </Box>

                            <Divider />
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    p: 2
                                }}
                            >
                                <Button
                                    color="primary"
                                    variant="contained"
                                >
                                    수정하기
                                </Button>
                            </Box>
                        </Container>
                    </Paper>

                </ThemeProvider>

            </form>
        </Container>
    );
};