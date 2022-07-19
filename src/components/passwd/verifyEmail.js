import * as React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Button, Container, CardContent, CardHeader, Divider, Link } from '@mui/material';


const colorTool = createTheme({
    palette: {
        primary: {
            main: '#fe4279',
            light: '#fe9D7C',
            dark: '#FC4279',
            contrastText: '#ffebee'
        },
        secondary: { //버튼
            main: '#ffebee',
            light: '#3FC79A',
            dark: '#0B815A',
            contrastText: '#fe4279'
        },
    },
    shadows: ['none']
});

const VerifyEmail = () => {
    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: Yup.object({
            email: Yup
                .string()
                .max(255)
                .email('올바른 형식의 이메일을 입력해주세요.')
                .required(
                    '이메일을 입력해주세요.')
        }),
        onSubmit: () => {
            //router.push('/');
        }
    });

    return (

        <ThemeProvider theme={colorTool}>
            <form onSubmit={formik.handleSubmit}>
                <Typography variant="subtitle2" gutterBottom color="primary">
                    가입시 등록한 이메일을 입력해주세요.
                </Typography>
                {/* <Grid container spacing={3}> */}

                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="email"
                        label="이메일"
                        fullWidth
                        autoComplete="cc-name"
                        variant="standard"
                        error={Boolean(formik.touched.email && formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </Grid>
            </form>
        </ThemeProvider>
    );
};
export default VerifyEmail;