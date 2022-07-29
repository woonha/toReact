import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
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
            main: '#fe4279',//황토황토
            light: '#3FC79A',
            dark: '#0B815A',
            contrastText: '#fe4279'
        },

    },
    shadows: ['none']
});

export default function VerifyEmail() {
    return (
        <React.Fragment>
            <Typography color="primary" variant="h6" gutterBottom marked="center" align="center">
                비밀번호 재설정
            </Typography>
            <Typography variant="subtitle2" gutterBottom color="primary" margin={3} marginBottom={6}>
                비밀번호를 재설정해주세요.
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        id="address2"
                        name="address2"
                        label="새 비밀번호"
                        fullWidth
                        autoComplete="shipping address-line2"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="address2"
                        name="address2"
                        label="새 비밀번호 확인"
                        fullWidth
                        autoComplete="shipping address-line2"
                        variant="standard"
                    />
                </Grid>


            </Grid>
        </React.Fragment>
    );
}