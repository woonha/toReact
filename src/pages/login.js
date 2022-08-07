import React, { useEffect } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { styled } from "@mui/material/styles";

import Stack from '@mui/material/Stack';
import { Box, Button, Container, Grid, Link, TextField, Typography, Paper } from '@mui/material';
import Divider from "@mui/material/Divider";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { loginTemp, logoutTemp } from "../auth/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";

// ------------------------------------------------
const CssTextField = styled(TextField)({
  backgroundColor: '#fff',
  borderRadius: '9px',

  '& label.Mui-focused': {
    color: '#FE4279',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#FE4279',
  },
  '& .MuiOutlinedInput-root': {
    color: '#FE4279'
  },
  '& fieldset': {
    borderColor: '#FE4279',
  }
},
);
// ----------------------------------------------------

const Login = () => {

  const navigate = useNavigate();
  const REST_API_KEY = "26c6196da16420765dc0c6251030d217";
  const REDIRECT_URI = "http://localhost:3000/login";

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const loginaaaaa = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
  });
  const params = new URLSearchParams(window.location.search)

  useEffect(() => {
    console.debug("로그인하하", params.get("code"));
    let code = params.get("code");
    if (code != null) {
      let cli = "kgq7HvEMvLTGJyar3LH0js6bsXQFSFTB";
      let url = "/kauth/oauth/token?grant_type=authorization_code&client_id=" + REST_API_KEY + "&code=" + code + "&redirect_uri=" + "/login";
      if (code != null) {
        axios.get(url)
          .then(res => res)
          .then(res => {
            console.debug(res.access_token, "res")
            axios.get("/kauth/v2/user/me", {
              headers: {
                Authorization: `Bearer ${res.access_token}`
              }
            })
              .then(res => res)
              .then(res => {
                console.debug("진짜 토큰 가져옴?", res)
              })
          })
      }
    }



  }, [])
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .max(255)
        .email('올바른 이메일 형식을 입력해주세요.')
        .required(
          '이메일을 입력해주세요.'),
      pass: Yup
        .string()
        .max(255)
        .required(
          '비밀번호를 입력해주세요')
    }),
    onSubmit: (event) => {

    }
  });
  const onFailure = (res) => {
    alert("구글 로그인에 실패하였습니다");
    console.log("err", res);
  };
  const onSuccess = (res) => {
    console.debug("아앙")
    const profile = res.getBasicProfile();
    const userdata = {
      email: profile.getEmail(),
      image: profile.getImageUrl(),
      name: profile.getName(),
    };
    console.debug(userdata)
  };

  const loginHahH = (event) => {
    event.preventDefault();
    axios.post("/member/login", formik.values)
      .then(res => res)
      .then(res => {
        console.debug("d,dkldldp", res)
        if (res.status == 200) {
          loginTemp(res.data)
          navigate("/")
        }
      })
      .error(res => {
        alert("로그인 실패")
      })
  };

  return (
    <>
      <Box component="main">
        <Container maxWidth="sm">
          <form onSubmit={loginHahH}>

            <Paper variant="undefined" sx={{ my: { xs: 3, md: 5 }, p: { xs: 2, md: 3 } }} >
              <Box sx={{
                my: 5,
                marginTop: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <Typography
                  fontFamily="-apple-system"
                  variant="h3"
                  color="primary"
                >
                  Login
                </Typography>
              </Box>

              <CssTextField
                error={Boolean(formik.touched.id && formik.errors.id)}
                fullWidth
                helperText={formik.touched.id && formik.errors.id}
                label="이메일"
                margin="normal"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="email"
                value={formik.values.email}
                variant="outlined"
              />
              <CssTextField
                error={Boolean(formik.touched.pass && formik.errors.pass)}
                fullWidth
                helperText={formik.touched.pass && formik.errors.pass}
                label="비밀번호"
                margin="normal"
                name="pass"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="password"
                value={formik.values.pass}
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
                color="primary"
                variant="body2"
              >
                <Grid container>
                  <Grid item xs >
                  </Grid>
                  <Grid item>
                    <Link
                      color="Secondary"
                      href="/settings"
                      variant="body2"
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
              <Typography
                color="primary">
                <Divider>
                  간편 로그인
                </Divider>
              </Typography>

              <Grid item xs>
                <Box
                  sx={{
                    my: 3,
                    marginTop: 3,
                    borderColor: 'palette'
                  }}
                >
                  <Stack direction="row" spacing={3}>

                    <Button
                      fullWidth
                      href={KAKAO_AUTH_URL}
                      size="large"
                      variant="outlined"
                    >
                      카카오톡 로그인
                    </Button>

                    <GoogleLogin
                      onSuccess={res => {
                        console.debug("ㅇ,ㅡ아아")
                        console.log(res);
                      }}
                      onError={() => {
                        console.log('Login Failed');
                      }}
                    />
                    <Button
                      fullWidth

                      onClick={() => loginaaaaa()}
                      size="large"
                      variant="outlined"
                    >
                      구글 로그인
                    </Button>
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

                  href="/register"
                >
                  회원가입
                </Link>

              </Typography>
            </Paper>

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