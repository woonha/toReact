import PropTypes from 'prop-types';
import { Avatar, Badge, Box, IconButton, Toolbar, Tooltip, Button, ButtonGroup, Stack, Container, Grid, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import shadows from '@mui/material/styles/shadows';
import { useEffect, useState } from 'react';

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  position: "relative",
  borderRadius: 30,
  backgroundColor: "#fff",
  border: "3px",
  borderStyle: "solid",
  borderColor: "#fe4279",
  // width: { xs: "90vw", md: "30vw", lg: "30vw" },
  with: "100%",
  // marginLeft: 10,
  // ---------------------------------- add the following styles
  "& :first-child": {
    flexGrow: 1
  },
  width: "auto",
  ".MuiInputBase-root": {
    width: "100%"
  }
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "100%",
  position: 'relative',
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(0)})`,
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%"
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  // position: 'absolute',
  // pointerEvents: 'none',
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end"
  // backgroundColor: 'black',
  // -----------------------------------> comment this line: width: "100%"
}));

const Navbar = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(0),
  paddingRight: theme.spacing(0),
  backgroundColor: theme.palette.background.color,
  boxShadow: theme.shadows[0],
  // position: 'relative',
}));

export const DashboardSearchbar = (props) => {
  const params = new URLSearchParams(window.location.search)
  const { onSidebarOpen, ...other } = props;
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    setSearchText(params.get("searchText"));
  }, [])
  return (
    <>
      <Box
        component="main"
        sx={{ flexGrow: 1 }}>
        <Navbar>
          <Box sx={{ flexGrow: 1 }}>
            <Container maxWidth='sm'>
              <form action="/search" method="get">
                <Search
                  sx={{
                    margin: "auto",
                    marginBottom: "20px",
                  }}
                >
                  <StyledInputBase
                    // defaultValue={searchQuery}
                    placeholder="예) 신체폭력, 언어폭력"
                    inputProps={{ "aria-label": "search" }}
                    type="search"
                    name="searchText"
                    value={searchText}
                    onChange={(e) => { setSearchText(e.target.value) }}
                    id="site-search"
                  />
                  <SearchIconWrapper>
                    <IconButton type="submit">
                      <SearchIcon style={{ color: "#fe4279" }} />
                    </IconButton>
                  </SearchIconWrapper>

                </Search>
              </form>
            </Container>
          </Box>
        </Navbar>
      </Box >
    </>
  );
};

DashboardSearchbar.propTypes = {
  onSidebarOpen: PropTypes.func
};

