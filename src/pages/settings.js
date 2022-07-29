import * as React from 'react';
import VerifyEmail from '../components/passwd/verifyEmail';
import ResetPasswd from '../components/passwd/resetPasswd';
import AuthenticationNumber from '../components/passwd/authenticationNumber';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Container, Typography, Stack, Link, Paper, Stepper, Step, StepLabel } from '@mui/material';


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

        <Box component="main" sx={{ flexGrow: 1, py: 5, backgroundColor: '#ffebee' }}>
            <Container maxWidth="sm">
                <Stepper activeStep={activeStep} sx={{ pt: 1, pb: 1 }}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Container>
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
            <Container maxWidth="sm" >
                <Paper variant="elevation" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, backgroundColor: '#ffffff' }}>
                    <React.Fragment>
                        {activeStep === steps.length ? (


                            <React.Fragment>
                                <Typography color="primary" variant="subtitle1" gutterBottom align="center">
                                    비밀번호가 변경되었습니다.
                                </Typography>
                                <Typography color="primary" variant="subtitle1" gutterBottom align="center" marginBottom={4}>
                                    다시 로그인해주세요.
                                </Typography>
                                {/* <Link
                                    underline="none"
                                    href="/"
                                    passHref
                                >
                                    <Button

                                        startIcon={<ArrowBackIcon fontSize="small" />}
                                    >
                                        메인화면으로
                                    </Button>
                                </Link>
                                <Link
                                    underline="none"
                                    href="/login"
                                    passHref
                                >
                                    <Button

                                        startIcon={<ArrowBackIcon fontSize="small" />}
                                    >
                                        로그인
                                    </Button>
                                </Link> */}
                                <Box sx={{ py: 2 }}>
                                    <Stack direction="row" spacing={3}>
                                        <Button
                                            href="/login"
                                            fullWidth
                                            size="large"
                                            type="submit"
                                            variant="contained"
                                        >
                                            로그인
                                        </Button>
                                        <Button
                                            href="/"
                                            fullWidth
                                            size="large"
                                            type="submit"
                                            variant="contained"
                                        >
                                            메인화면
                                        </Button>
                                    </Stack>
                                </Box>
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
        </Box >

    );
}

Settings.getLayout = (page) => (
    { page }

);
export default Settings;