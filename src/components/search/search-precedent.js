import { useCallback, useState } from 'react';
import { Box, Button, Card, CardContent, CardHeader, Container, Divider, Grid, Paper, TextField, Typography } from '@mui/material';
import Input from '@mui/material/Input';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import { alpha, styled } from "@mui/material/styles";
import { theme } from '../../theme';


export const SearchPrecedent = (props) => {
    const [values, setValues] = useState({
        email: 'dsfdf',
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
                <ThemeProvider theme={theme}>
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
                                나의 프로필
                            </Typography>
                        </Box>

                        <Container maxWidth="md">

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
        </Container >
    );
};