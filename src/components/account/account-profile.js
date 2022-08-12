import { useEffect, useState } from 'react';
import { Box, Button, Container, Divider, Paper, TextField, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import { styled } from "@mui/material/styles";
import { theme } from '../../theme';
import axios from 'axios';


const CssPaper = styled(Paper)({
    backgroundColor: "#fff"
})

const CssContainer = styled(Container)({
    '@media all': {
        paddingRight: 0,
        paddingLeft: 0,
        marginTop: 0
    }

})


const StyleTextField = styled((props) => (
    <TextField InputProps={{ disableUnderline: false, style: { fontSize: 20 }, disabledbackgroundColor: '(255, 255, 255)' }} {...props} />))
    (({ theme }) => ({
        '& .MuiFilledInput-root': {
            backgroundColor: 'rgb(255, 255, 255)',
            // border: '3px solid #e2e2e1',
            // overflow: 'hidden',
            borderRadius: 4,

            // backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
            // transition: theme.transitions.create([
            //     'border-color',
            //     'background-color',
            // ]),

        }
    }));


export const AccountProfile = (props) => {
    const [values, setValues] = useState({
        email: '',
        name: ''
    });



    const upDateMember = () => {
        console.debug("눌렀어", values)
        let userData = sessionStorage.getItem("user")
        let params = { pk_member_no: 0, name: values.name }
        if (userData !== null) {
            userData = JSON.parse(userData)
            params.pk_member_no = userData.member_no
        }
        axios.post("/member/modify", params)
            .then(res => res)
            .then(res => {
                console.debug(res.data, "어떻게되냐dd????")


            })
    };

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    useEffect(() => {
        console.log('dfsfd')
        let userData = sessionStorage.getItem("user")
        let params = { pk_member_no: 0 }
        if (userData !== null) {
            userData = JSON.parse(userData)
            params.pk_member_no = userData.member_no
        }
        axios.post("/member/mypage", params)
            .then(res => res)
            .then(res => {
                console.debug(res.data, "어떻게되냐dd????")
                setValues({
                    email: res.data.email,
                    name: res.data.name
                })

            })
    }, [])

    return (
        <>
            <CssContainer maxWidth="md">
                <form
                    autoComplete="off"
                    noValidate
                    {...props}
                >
                    <ThemeProvider theme={theme}>
                        <CssPaper variant="undefined" sx={{ my: { xs: 0, md: 0 }, p: { xs: 1, md: 3 } }}>
                            <Box sx={{
                                p: { xs: 6, md: 6 },
                                m: { xs: 0, md: 0 },

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
                                <Box
                                    component="form"
                                    noValidate
                                    sx={{
                                        marginBottom: 5,
                                        display: 'grid',
                                        gridTemplateColumns: { sm: '1fr' },
                                    }}
                                >
                                    <InputLabel>이메일</InputLabel>
                                    <StyleTextField
                                        name="email"
                                        fullWidth
                                        disabled="true"
                                        onChange={(event) => handleChange(event)}
                                        defaultValue="bit@bit.bit"
                                        value={values.email}
                                        id="reddit-input"
                                        variant="filled"
                                        style={{ marginTop: 11 }}
                                    />
                                </Box>

                                <Box

                                    component="form"
                                    noValidate
                                    sx={{
                                        display: 'grid',
                                        gridTemplateColumns: { sm: '1fr' },


                                    }}
                                >
                                    <InputLabel>닉네임</InputLabel>
                                    <StyleTextField
                                        fullWidth
                                        name="name"
                                        onChange={(event) => handleChange(event)}
                                        defaultValue="bit@bit.bit"
                                        id="reddit-input"
                                        value={values.name}
                                        variant="filled"
                                        style={{ marginTop: 5 }}
                                    />
                                </Box>

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
                                        onClick={() => upDateMember()}
                                    >
                                        수정하기
                                    </Button>
                                </Box>
                            </Container>
                        </CssPaper>

                    </ThemeProvider>

                </form>
            </CssContainer >
        </>
    );
};