import PropTypes from 'prop-types';
import { Avatar, Badge, Box, IconButton, Toolbar, Tooltip, Button, ButtonGroup, Stack, Container, Grid, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import shadows from '@mui/material/styles/shadows';



const colorTool = createTheme({
  palette: {
    primary: {
      main: '#fe4279',
      light: '#fe9D7C',
      dark: '#FC4279',
      contrastText: '#ffebee'
    },
    secondary: { //버튼
      main: '#fe4279',
      light: '#3FC79A',
      dark: '#0B815A',
      contrastText: '#ffebee'
    },
  },
  shadows: ['none']

});

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "100%",
  color: 'inherit',
  position: 'relative',
  '& .MuiInputBase-input': {
    border: '5px solid #fe4279',
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em )`,
    paddingRight: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create('width')
  }
}));

// const StyledToolbar = styled(Toolbar)(({ theme }) => ({
//   justifyContent: 'center',
//   alignItems: 'stretch',
//   paddingTop: theme.spacing(2),
//   paddingBottom: theme.spacing(2),
//   // Override media queries injected by theme.mixins.toolbar
//   '@media all': {
//     minHeight: 10,
//   }
// }));

const Navbar = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(5),
  paddingRight: theme.spacing(2),
  backgroundColor: theme.palette.background.color,
  boxShadow: theme.shadows[0],
  // position: 'relative',
}));

export const DashboardSearchbar = (props) => {
  const { onSidebarOpen, ...other } = props;

  return (
    <>
      <Box
        component="main"
        sx={{ flexGrow: 1 }}>
        <Navbar>
          {/* <Stack>
            <ThemeProvider theme={colorTool}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end'
                }}>
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                  <Button
                    href="/login"
                    color='secondary'

                    sx={{

                      fontSize: 15,
                      fontWeight: 'normal',

                    }}>
                    로그인
                  </Button>
                  <Button
                    href="/register"
                    color='secondary'

                    sx={{

                      fontSize: 15,
                      fontWeight: 'normal'
                    }}>
                    회원가입
                  </Button>
                </ButtonGroup>
              </Box>
            </ThemeProvider>
          </Stack> */}

          <ThemeProvider theme={colorTool}>
            <Container fixed maxWidth="sm" mdisplay="fiex">


              <Stack spacing={0} direction="row">
                <StyledInputBase></StyledInputBase>
                <Button
                  sx={{ borderRadius: '0' }}
                  justifyContent='center'
                  alignItems='stretch'
                  width="100%"
                  variant="contained"
                  color='secondary'
                  Shadows="none"
                  type="submit"
                >
                  검색
                </Button>
              </Stack>
            </Container>


          </ThemeProvider>
        </Navbar>
      </Box >
    </>
  );
};

DashboardSearchbar.propTypes = {
  onSidebarOpen: PropTypes.func
};