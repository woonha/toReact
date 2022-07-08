
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, Grid, CardContent, CardHeader, Divider, TextField, Link } from '@mui/material';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const colorTool = createTheme({
    palette: {
        primary: {
            main: '#fe4279', //메인 분홍이
            light: '#828DF8',
            dark: '#3832A0',
            contrastText: '#ffebee'
        },
        secondary: { //버튼
            main: '#FE4279',
            light: '#FE4279',
            dark: '#0B815A',
            contrastText: '#FFFFFF'
        },
        text: {
            primary: '#937DC2', //보라보라
            secondary: '#B25068', //와인
            disabled: 'rgba(55, 65, 81, 0.48)'
        },
        success: {
            main: '#FFB562', //노랑노랑
            light: '#43C6B7',
            dark: '#0E8074',
            contrastText: '#FFFFFF'
        },
    }
});


// ------------------------------------------------

const SettingPasswd = () => {

    const formik = useFormik({
        initialValues: {
            // id: '',
            email: '',
            number: '',
            inputnumber: ''
        },
        validationSchema: Yup.object({
            // id: Yup
            //   .string()
            //   .max(255)
            //   .required(
            //     '아이디를 입력해주세요.'),
            password: Yup
                .string()
                .max(255)
                .required(
                    '이메일을 입력해주세요.')
        }),
        onSubmit: () => {
            //router.push('/');
        }
    });

    return (
        <>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 6
                }}
            >
                <Container maxWidth="sm">
                    <ThemeProvider theme={colorTool}>
                        <Typography color="primary" variant="h4" gutterBottom marked="center" align="left">
                            본인인증
                        </Typography>
                        <Typography variant="body3" align="left">
                            {"가입시 등록한 이메일주소를 입력해주세요."}
                        </Typography>
                    </ThemeProvider>
                </Container>

                <Container maxWidth="sm">
                    <form onSubmit={formik.handleSubmit}>
                        <ThemeProvider theme={colorTool}>
                            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                                <Box sx={{ p: 2 }}>
                                    <Stack spacing={2} direction="row">
                                        <TextField
                                            error={Boolean(formik.touched.email && formik.errors.email)}
                                            fullWidth
                                            helperText={formik.touched.email && formik.errors.email}
                                            label="이메일"
                                            margin="dense"
                                            name="email"
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange}
                                            type="pattern"
                                            value={formik.values.email}
                                            variant="outlined"
                                            size="normal"
                                        />
                                        <Box sx={{ '& button': { m: 1, py: 2 } }}>
                                            <Button
                                                variant="contained"
                                                size="small"
                                                color="secondary">
                                                확인
                                            </Button>
                                        </Box>
                                    </Stack>

                                    <Stack spacing={2} direction="row">

                                        <TextField
                                            error={Boolean(formik.touched.email && formik.errors.email)}
                                            fullWidth
                                            helperText={formik.touched.email && formik.errors.email}
                                            label="인증번호 4자리를 입력해주세요."
                                            margin="dense"
                                            name="email"
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange}
                                            type="pattern"
                                            value={formik.values.email}
                                            variant="outlined"
                                            size="normal"
                                        />
                                        <Box sx={{ '& button': { m: 1, py: 2 } }}>
                                            <Link
                                                href="/settings"
                                            >
                                                <Button
                                                    variant="contained"
                                                    size="small"
                                                    color="secondary">
                                                    확인
                                                </Button>
                                            </Link>
                                        </Box>
                                    </Stack>





                                </Box>

                            </Paper>
                        </ThemeProvider>
                    </form >

                </Container>


            </Box>
        </>
    );
};
SettingPasswd.getLayout = (page) => (
    { page }

);
export default SettingPasswd;