import * as React from 'react';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box, Button, Container, CardContent, CardHeader, Divider, Link } from '@mui/material';
import axios from 'axios';
import { PropaneSharp } from '@mui/icons-material';


const VerifyEmail = (props) => {
    // const formik = useFormik({
    //     initialValues: {
    //         email: ''
    //     },
    //     validationSchema: Yup.object({
    //         email: Yup
    //             .string()
    //             .max(255)
    //             .email('올바른 형식의 이메일을 입력해주세요.')
    //             .required(
    //                 '이메일을 입력해주세요.')
    //     }),
    //     onSubmit: () => {
    //         //router.push('/');
    //     }
    // });
    const [values, setValues] = useState({
        email: ''
    });

    const emailCheck = () => {
        console.log('이메일확인')
        console.log('email : ', values)
        let params = { email: values.email }

        axios.post('/member/mailCheck', params)
            .then(res => res)
            .then(res => {
                console.debug("이메일체크", res)
                console.debug(res.data)
                if (res.data === "") {
                    console.debug('======================', res.data.email)
                    alert('등록되지않은 이메일')
                }
            })
            .catch()
    }

    useEffect(() => {
        axios.post('/member/mailCheck')
            .then(res => console.log(res))
            .catch()
    }, [])

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    return (

        <form onSubmit={props}>
            <Typography color="primary" variant="h6" gutterBottom marked="center" align="center">
                이메일 확인
            </Typography>
            <Typography variant="subtitle2" gutterBottom color="primary" margin={3} marginBottom={6}>
                가입시 등록한 이메일을 입력해주세요.
            </Typography>
            {/* <Grid container spacing={3}> */}

            <Grid>
                <TextField

                    required
                    id="email"
                    name="email"
                    label="이메일"
                    fullWidth
                    autoComplete="cc-name"
                    variant="standard"

                    // helperText={formik.touched.email && formik.errors.email}
                    // onBlur={formik.handleBlur}
                    onChange={(event) => handleChange(event)}
                    value={values.email}
                />
                <Button

                    onClick={() => emailCheck()}
                    color="primary"
                    variant="contained"
                    size='small'>
                    확인
                </Button>
            </Grid>
        </form>
    );
};
export default VerifyEmail;