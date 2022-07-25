import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import VerifyEmail from '../components/passwd/verifyEmail';
import ResetPasswd from '../components/passwd/resetPasswd';
import AuthenticationNumber from '../components/passwd/authenticationNumber';


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

const steps = ['이메일 입력', '인증번호 확인', '비밀번호 재설정'];

function getStepContent(step) {
    switch (step) {
        case 0:
            return <VerifyEmail />;
        case 1:
            return <ResetPasswd />;
        case 2:
            return <AuthenticationNumber />;

        default:
            throw new Error('Unknown step');
    }
}

const Settings = () => {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <Box component="main" sx={{ flexGrow: 1, py: 5 }}>
            <ThemeProvider theme={colorTool}>
                <CssBaseline />
                {/* <AppBar
                position="absolute"
                color="default"
                elevation={0}
                sx={{
                    position: 'relative',
                    borderBottom: (t) => `1px solid ${t.palette.divider}`,
                }}
            >
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Company name
                    </Typography>
                </Toolbar>
            </AppBar> */}
                <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>

                        <Typography component="h3" color="primary" variant="h4" gutterBottom marked="center" align="center">
                            비밀번호 재설정
                        </Typography>


                        {/* <Typography component="h1" variant="h4" align="center">
                        이메일 인증
                    </Typography> */}
                        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        <React.Fragment>
                            {activeStep === steps.length ? (
                                <React.Fragment>
                                    <Typography variant="h5" gutterBottom>
                                        비밀번호가 변경되었습니다.
                                    </Typography>
                                    <Typography variant="h5" gutterBottom>
                                        다시 로그인해주세요.
                                    </Typography>
                                    {/* <Typography variant="subtitle1">
                                    Your order number is #2001539. We have emailed your order
                                    confirmation, and will send you an update when your order has
                                    shipped.
                                </Typography> */}
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    {getStepContent(activeStep)}
                                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        {activeStep !== 0 && (
                                            <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                                테스트테스트
                                            </Button>
                                        )}

                                        <Button
                                            variant="contained"
                                            onClick={handleNext}
                                            sx={{ mt: 3, ml: 1 }}
                                        >
                                            {activeStep === steps.length - 1 ? ' 확인' : '확인'}
                                        </Button>
                                    </Box>
                                </React.Fragment>
                            )}
                        </React.Fragment>
                    </Paper>

                </Container>
            </ThemeProvider>
        </Box>

    );
}

Settings.getLayout = (page) => (
    { page }

);
export default Settings;