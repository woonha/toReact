import PropTypes from 'prop-types';
import { Avatar, Badge, Box, IconButton, Toolbar, Tooltip, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const colorTool = createTheme({
  palette: {
    primary: {
      main: '#fe4279',
      light: '#fe9D7C',
      dark: '#FC4279',
      contrastText: '#ffebee'
    },

  }
});

const Search = styled('div')(({ theme }) => ({
  borderstyle: 'solid',
  position: 'relative',
  // borderRadius: theme.shape.borderRadius,
  // backgroundColor: alpha(theme.palette.common.white, 0.15),
  // '&:hover': {
  //   backgroundColor: alpha(theme.palette.common.white, 0.25),
  // },
  marginRight: theme.spacing(2),
  marginLeft: 10,
  width: '100%',
  [theme.breakpoints.up('md')]: {
    marginLeft: theme.spacing(10),
    width: 'auto'
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  position: 'relative',
  '& .MuiInputBase-input': {
    width: "auto",
    border: '8px solid #ffebee',
    padding: theme.spacing(2, 2, 2, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: "50ch",
      "&:focus": {
        width: "50ch",
        // width: '80ch',
      }
    }
  }
}));
// const searchButton = stlyed(Button)(({theme})) => ({

// })
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  // alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 100,
  }
}));

const Navbar = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  backgroundColor: theme.palette.background.color,
  boxShadow: theme.shadows[3],
  '@media all': {
    minHeight: 100,
  }
}));

export const DashboardNavbar = (props) => {
  const { onSidebarOpen, ...other } = props;

  return (
    <>
      <Box >
        < Navbar position="static">

          <ThemeProvider theme={colorTool}>
            <StyledToolbar>
              <Box sx={{
                flexGrow: 1
              }} />
              <Search>
                <SearchIconWrapper>

                  <SearchIcon />
                  <Button color='primary' type="submit" sx={{ p: "10px" }}></Button>

                </SearchIconWrapper>
                <StyledInputBase

                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                >

                </StyledInputBase>
              </Search>


              <Box sx={{
                flexGrow: 1
              }} />
            </StyledToolbar>
          </ThemeProvider>
        </Navbar>
      </Box >
    </>
  );
};

DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func
};