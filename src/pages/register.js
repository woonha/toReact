import { useFormik } from 'formik';
import { Link as Ddddd }from 'react-router-dom';
import * as Yup from 'yup';

import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography
} from '@mui/material';

const Register = () => {
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
      //router.push('/');
    }
  });

  return (
    <>
      <Container component="main" maxWidth="sm">
        <Box
          component="main"
          sx={{
            alignItems: 'center',
            // display: 'flex',
            flexGrow: 1,
            minHeight: '100%',
            mt: 2
          }}
        >
          <Container maxWidth="sm">
            <form onSubmit={formik.handleSubmit}>
              <Box sx={{
                my: 1,
                marginTop: 0.5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',

              }}>
                <Typography
                  color="secondary"
                  variant="h2"
                >
                  Lawbot
                </Typography>
                {/* <Typography
                  color="secondary"
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
                margin="dense"
                name="id"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.id}
                variant="outlined"
                size="normal"
              />
              <TextField
                error={Boolean(formik.touched.nickname && formik.errors.nickname)}
                fullWidth
                helperText={formik.touched.nickname && formik.errors.nickname}
                label="닉네임"
                margin="dense"
                name="nickname"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.nickname}
                variant="outlined"
                size="normal"
              />
              <TextField
                error={Boolean(formik.touched.password && formik.errors.password)}
                fullWidth
                helperText={formik.touched.password && formik.errors.password}
                label="비밀번호"
                margin="dense"
                name="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="password"
                value={formik.values.password}
                variant="outlined"
                size="normal"
              />
              <TextField
                error={Boolean(formik.touched.confirmpassword && formik.errors.confirmpassword)}
                fullWidth
                helperText={formik.touched.confirmpassword && formik.errors.confirmpassword}
                label="비밀번호 확인"
                margin="dense"
                name="confirmpassword"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="password"
                value={formik.values.password2}
                variant="outlined"
                size="normal"
              />
              <TextField
                error={Boolean(formik.touched.name && formik.errors.name)}
                fullWidth
                helperText={formik.touched.name && formik.errors.name}
                label="이름"
                margin="dense"
                name="name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
                variant="outlined"
                size="normal"
              />
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
                  color="secondary"
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
                  >
                    로그인화면으로 가기
                  </Link>

              </Typography>
            </form>
          </Container>
        </Box>
      </Container>
    </>
  );
};

Register.getLayout = (page) => (
    {page}
);


export default Register;

