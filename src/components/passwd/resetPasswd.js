import * as React from 'react';
import { Box, Button, Container, CardContent, CardHeader, Divider, Link, Grid, TextField, Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


export default function ResetPasswd() {
    return (
        <React.Fragment>

            <Typography color="primary" variant="h6" gutterBottom marked="center" align="center">
                인증번호 확인
            </Typography>
            <Box margin={3} marginBottom={5}>
                <Typography variant="subtitle2" color="primary" gutterBottom>
                    입력하신 이메일로 인증번호를 보냈습니다.
                </Typography>
                <Typography variant="subtitle2" color="primary" gutterBottom>
                    확인 후 입력해주세요.
                </Typography>
            </Box>

            <Grid>


                <TextField
                    id="address2"
                    name="address2"
                    label="인증번호 입력"
                    fullWidth
                    autoComplete="shipping address-line2"
                    variant="standard"
                />




            </Grid>
        </React.Fragment>
    );
}