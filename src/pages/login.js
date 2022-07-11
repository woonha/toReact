import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Stack from '@mui/material/Stack';
import { Box, Button, Container, Grid, Link, TextField, Typography, Paper } from '@mui/material';
import Divider from "@mui/material/Divider";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { loginTemp, logoutTemp } from "../auth/auth";
import { useNavigate } from "react-router-dom";
// import { Google as GoogleIcon } from '../icons/google';


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
const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      id: '',
      nickname: '',
      passwrod: '',
      name: '',
      email: ''
      // policy: false
    },
    validationSchema: Yup.object({

      nickname: Yup
        .string()
        .max(255)
        .required(
          '사용할 닉네임을 입력해주세요'),
      password: Yup
        .string()
        .max(255)
        .required(
          '비밀번호를 입력해주세요'),
      confirmpassword: Yup
        .string()
        .max(255)
        .oneOf([Yup.ref('password'), null], '비밀번호가 일치하지않습니다.'),
      email: Yup
        .string()
        .max(255)
        .email('올바른 이메일 형식을 입력해주세요.')
        .required(
          '이메일을 입력해주세요.'),
      policy: Yup
        .boolean()
        .oneOf(
          [true],
          'This field must be checked'
        )
    }),
    onSubmit: () => {
      // router.push('/');
    }
  });
  //const router = useRouter();

  const clickMe1 = () => {
    loginTemp();
    navigate('/');
    //router.push('/naver.com')
  };
  const clickMe2 = () => {
    logoutTemp();
    navigate('/');
    //router.push('/google.com')
  };

  return (
    <>
      <Box
        component="main"
        sx={{

        }}
      >
        <Container maxWidth="xs">

          <form onSubmit={formik.handleSubmit}>
            <ThemeProvider theme={colorTool}>
              <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }} >
                <Box sx={{
                  my: 5,
                  marginTop: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>
                  <Typography
                    fontFamily="-apple-system"
                    variant="h2"
                    color="primary"
                  >
                    Lawbot
                  </Typography>

                  {/* <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
              </Typography> */}
                </Box>

                <TextField
                  error={Boolean(formik.touched.id && formik.errors.id)}
                  fullWidth
                  helperText={formik.touched.id && formik.errors.id}
                  label="아이디"
                  margin="normal"
                  name="id"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="id"
                  value={formik.values.id}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(formik.touched.password && formik.errors.password)}
                  fullWidth
                  helperText={formik.touched.password && formik.errors.password}
                  label="비밀번호"
                  margin="normal"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.password}
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>

                  <Button
                    disabled={formik.isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    sx={{ mt: 2.5 }}
                  >
                    로그인
                  </Button>

                </Box>
                <Typography
                  color="Secondary"
                  variant="body2"
                >

                  <Grid container>
                    <Grid item xs >


                    </Grid>
                    <Grid item>
                      <Link
                        href="/settingPasswd"
                        variant="body2"
                        underline="hover"
                        sx={{
                          cursor: 'pointer'
                        }}
                        color="textSecondary"
                      >
                        비밀번호찾기
                      </Link>
                    </Grid>
                  </Grid>
                </Typography>

                <Grid item xs={12}></Grid>
                <Typography
                  color="primary">
                  <Divider>
                    간편 로그인
                  </Divider>
                </Typography>

                <Grid item xs>
                  <Box
                    sx={{
                      my: 1,
                      marginTop: 3,
                      borderColor: 'palette'
                    }}
                  >
                    <Stack direction="row" spacing={3}>
                      <ThemeProvider theme={colorTool}>
                        <Button
                          fullWidth

                          onClick={clickMe1}
                          size="large"
                          variant="outlined"
                        >
                          카카오톡 로그인
                        </Button>

                        <Button
                          fullWidth

                          onClick={clickMe2}
                          size="large"
                          variant="outlined"
                        >
                          구글 로그인
                        </Button>
                      </ThemeProvider>
                    </Stack>

                  </Box>
                </Grid>
                <Typography
                  color="textSecondary"
                  variant="body2"
                >
                  계정이 없으신가요?
                  {' '}

                  <Link
                    variant="subtitle2"
                    underline="hover"
                    color="Secondary"
                    href="/register"
                  >
                    회원가입
                  </Link>

                </Typography>
              </Paper>
            </ThemeProvider>
          </form>
        </Container>
      </Box>
    </>
  );
};

Login.getLayout = (page) => (
  // <AppAppBar>
  { page }
  //</AppAppBar>
);

export default Login;