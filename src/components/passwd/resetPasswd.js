import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

export default function ResetPasswd() {
    return (
        <React.Fragment theme={colorTool}>

            <Typography variant="subtitle2" color="primary" gutterBottom>
                입력하신 이메일로 인증번호를 보냈습니다.
            </Typography>
            <Typography variant="subtitle2" color="primary" gutterBottom>
                확인 후 입력해주세요.
            </Typography>

            <Grid container spacing={3}>

                <Grid item xs={12}>
                    <TextField
                        id="address2"
                        name="address2"
                        label="인증번호 입력"
                        fullWidth
                        autoComplete="shipping address-line2"
                        variant="standard"
                    />
                </Grid>



            </Grid>
        </React.Fragment>
    );
}