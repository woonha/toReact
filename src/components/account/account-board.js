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
const StyleTextField = styled((props) => (
    <TextField InputProps={{ disableUnderline: false }} {...props} />))
    (({ theme }) => ({
        '& .MuiFilledInput-root': {
            // border: '3px solid #e2e2e1',
            // overflow: 'hidden',
            // borderRadius: 4,

            backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
            transition: theme.transitions.create([
                'border-color',
                'background-color',

            ]),

            '&.Mui-focused': {

                boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
                borderColor: theme.palette.primary.main,
            },
        },
    }));

export const AccountMyBoard = (props) => {
    const [values, setValues] = useState({
        email: '',
        name: ''
    });
    const onChange = useCallback(e => {
        setValues(e.target.value);
    })
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

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

                                <StyleTextField
                                    multiline InputProps={{ style: { fontSize: 20 } }}
                                    fullWidth
                                    label="이메일"
                                    defaultValue="bit@bit.bit"
                                    id="reddit-input"
                                    variant="filled"
                                    style={{ marginTop: 11 }}
                                />
                                <StyleTextField
                                    multiline InputProps={{ style: { fontSize: 20 } }}
                                    fullWidth
                                    label="닉네임"
                                    defaultValue="BIT"
                                    id="reddit-input"
                                    variant="filled"
                                    style={{ marginTop: 11 }}
                                />
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