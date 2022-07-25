import { useFormik } from 'formik';
import { Link as Ddddd, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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


const Register = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      pass: '',
      policy: formGroupClasses
    },
    handleSubmit:()=>{
      alert("으하하")
    },
    onSubmit:values=>{
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
        if (res.data==1 && res.status==200){
          //일단은 제한없이 가입되게됨
          alert("가입되었습니다")
          navigate("/login")
        }
        console.debug(res)
    })
};

  return (
    <>

      <Box
        component="main"
        sx={{

        }}
      >
        <Container maxWidth="sm">
          <form onSubmit={registerTemp}>
            <ThemeProvider theme={colorTool}>
              <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }} >
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
                    Sing up
                  </Typography>
                  {/* <Typography
                  color="secondary"
                  gutterBottom
                  variant="body2"
                >
                </Typography> */}
                </Box>

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

                <TextField
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
                <TextField
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
                <TextField
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
            </ThemeProvider>
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

