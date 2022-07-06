import React from "react";
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Stack from '@mui/material/Stack';
import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import Divider from "@mui/material/Divider";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { Google as GoogleIcon } from '../icons/google';
//import { AppAppBar } from '../components/appappbar';

const Login = () => {
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
      id: Yup
        .string()
        .max(255)
        .required(
          '아이디를 입력해주세요.'),
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
      name: Yup
        .string()
        .max(255)
        .required(
          '이름을 입력해주세요.'),
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
  const theme = createTheme({
    palette: {
      primary: {
        main: '#512da8',
      }
    }
  });

  const clickMe1 = () => {
    //router.push('/naver.com')
  };
  const clickMe2 = () => {
    //router.push('/google.com')
  };

  return (
    <>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="xs">

            <Button
              color="secondary"
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
            >
              메인화면으로 돌아가기
            </Button>

          <form onSubmit={formik.handleSubmit}>
            <Box sx={{
              my: 5,
              marginTop: 5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <Typography
                color="secondary"
                variant="h2"
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
                  color="secondary"
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
              color="textSecondary"
              variant="body2"
            >

              <Grid container>
                <Grid item xs>
                    <Link
                      to="/"
                      variant="subtitle2"
                      underline="hover"
                      sx={{
                        cursor: 'pointer'
                      }}
                    >
                      아이디 찾기
                    </Link>


                </Grid>
                <Grid item>
                    <Link
                      to="/find-password"
                      variant="subtitle2"
                      underline="hover"
                      sx={{
                        cursor: 'pointer'
                      }}
                    >
                      비밀번호찾기
                    </Link>
                </Grid>
              </Grid>
            </Typography>

            <Grid item xs={12}></Grid>
            <Typography>
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
                  <ThemeProvider theme={theme}>
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
                >
                  회원가입
                </Link>

            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

Login.getLayout = (page) => (
 // <AppAppBar>
    {page}
  //</AppAppBar>
);

export default Login;