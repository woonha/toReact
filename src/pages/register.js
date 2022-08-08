import { useFormik } from 'formik';
import { Link as Ddddd, useNavigate } from 'react-router-dom';
import { styled } from "@mui/material/styles";
import * as Yup from 'yup';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
  Paper,
  formGroupClasses
} from '@mui/material';
import axios from 'axios';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import { useEffect } from 'react';

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

const Register = () => {
  const navigate = useNavigate();
  const REST_API_KEY = "26c6196da16420765dc0c6251030d217";
  const REDIRECT_URI = "http://localhost:3000/register";
  const responseGoogle = (response) => {
    console.log(response);
  }
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const loginaaaaa = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
  });
  const params = new URLSearchParams(window.location.search)

  useEffect(() => {
    console.debug("회원가입하하", params.get("code"));
    let code = params.get("code");
    if (code != null) {
      let cli = "kgq7HvEMvLTGJyar3LH0js6bsXQFSFTB";

      let url = "/oauth/token?grant_type=authorization_code&client_id=" + REST_API_KEY + "&code=" + code + "&redirect_uri=" + REDIRECT_URI;
      if (code != null) {
        //navigate(url)

        const tokenParam = {
          "code": code,
          redirect_uri: REDIRECT_URI,
          grant_type: "authorization_code",
          client_id: REST_API_KEY
        }
        let header = { 'Content-Type': 'application/x-www-urlencoded' };
        axios({
          method: "post",
          url: "https://kauth.kakao.com/oauth/token",
          params: tokenParam,
          config: {
            headers: header
          }
        })
          .then(res => res)
          .then(res => {
            console.debug(res, "ddddddres")
            axios({
              method: "post",
              url: "https://kapi.kakao.com/v2/user/me",
              headers: {
                Authorization: `Bearer ${res.data.access_token}`,
                'Content-Type': 'application/x-www-urlencoded'
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
      name: '',
      pass: '',
      policy: formGroupClasses
    },
    handleSubmit: () => {
      alert("으하하")
    },
    onSubmit: values => {
      alert("으어으어으어응")
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .max(255)
        .email('올바른 이메일 형식을 입력해주세요.')
        .required(
          '이메일을 입력해주세요.'),
      name: Yup
        .string()
        .max(255)
        .required(
          '사용할 닉네임을 입력해주세요'),
      pass: Yup
        .string()
        .max(255)
        .required(
          '비밀번호를 입력해주세요'),
      confirmpass: Yup
        .string()
        .max(255)
        .oneOf([Yup.ref('pass'), null], '비밀번호가 일치하지않습니다.'),
      policy: Yup
        .boolean()
        .oneOf(
          [true],
          'This field must be checked'
        )
    }),
    onSubmit: () => {
      alert("zzzzz")
    },
    handleSubmit: () => {
      alert("dddd")
    }
  });
  const registerTemp = (event) => {
    event.preventDefault();
    console.debug(formik.values);
    axios.post("/member/join", formik.values)
      .then(res => res)
      .then(res => {
        if (res.data == 1 && res.status == 200) {
          //일단은 제한없이 가입되게됨
          alert("가입되었습니다")
          navigate("/login")
        }
        console.debug(res)
      })
  };

  return (
    <>
      <Box component="main">
        <Container maxWidth="sm">
          <form onSubmit={registerTemp}>

            <Paper variant="undefined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }} >
              <Box sx={{
                my: 5,
                marginTop: 0.5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
                <Typography
                  fontFamily="-apple-system"
                  variant="h3"
                  color="primary"
                >
                  Sign up
                </Typography>
                {/* <Typography
                  color="secondary"
                  gutterBottom
                  variant="body2"
                >
                </Typography> */}
              </Box>

              <CssTextField
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
              <CssTextField
                error={Boolean(formik.touched.name && formik.errors.name)}
                fullWidth
                helperText={formik.touched.name && formik.errors.name}
                label="닉네임"
                margin="dense"
                name="name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
                variant="outlined"
                size="normal"
              />
              <CssTextField
                error={Boolean(formik.touched.pass && formik.errors.pass)}
                fullWidth
                helperText={formik.touched.pass && formik.errors.pass}
                label="비밀번호"
                margin="dense"
                name="pass"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="password"
                value={formik.values.pass}
                variant="outlined"
                size="normal"
              />
              <CssTextField
                error={Boolean(formik.touched.confirmpass && formik.errors.confirmpass)}
                fullWidth
                helperText={formik.touched.confirmpass && formik.errors.confirmpass}
                label="비밀번호 확인"
                margin="dense"
                name="confirmpass"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="password"
                value={formik.values.confirmpass}
                variant="outlined"
                size="normal"
              />
              {/* ------------------약관---------------------- */}
              <Box
                sx={{
                  py: 1,
                  alignItems: 'center',
                  display: 'flex',
                  ml: -1
                }}
              >
                <Checkbox
                  checked={formik.values.policy}
                  name="policy"
                  onChange={formik.handleChange}
                />
                <Typography
                  color="textSecondary"
                  variant="body2"
                >
                  이용약관에 동의합니다.
                  {' '}
                  <Ddddd
                    to="/"
                  >
                    <Link
                      color="primary"
                      underline="always"
                      variant="subtitle2"
                    >
                      약관보기
                    </Link>
                  </Ddddd>
                </Typography>
              </Box>
              {Boolean(formik.touched.policy && formik.errors.policy) && (
                <FormHelperText error>
                  {formik.errors.policy}
                </FormHelperText>
              )}

              <Box sx={{ py: 3 }}>
                <Button
                  disabled={formik.isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  가입하기
                </Button>
              </Box>
              <Button
                fullWidth
                href={KAKAO_AUTH_URL}
                size="large"
                variant="outlined"
              >
                카카오톡 회원가입
              </Button>

              <GoogleLogin
                onSuccess={res => {
                  //console.debug("ㅇ,ㅡ아아")
                  console.log(res);
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
              <GoogleLogin
                clientId="526924998787-bh0o65d1lcjp7q5ptptsfvvdam04vged.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
              <Button
                fullWidth

                onClick={() => loginaaaaa()}
                size="large"
                variant="outlined"
              >
                구글 회원가입
              </Button>
              <Typography
                color="textSecondary"
                variant="body2"
              >
                계정이 있으신가요?
                {' '}
                <Link
                  variant="subtitle2"
                  underline="hover"
                  href="/login"
                >
                  로그인화면으로 가기
                </Link>

              </Typography>
            </Paper>
          </form>
        </Container>
      </Box>

    </>
  );
};

Register.getLayout = (page) => (
  { page }
);


export default Register;

