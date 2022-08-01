import { useFormik } from 'formik';
import { Link as Ddddd } from 'react-router-dom';
import ReactWordcloud from 'react-wordcloud';
import * as Yup from 'yup';
import words from './words';
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import Divider from '@mui/material/Divider';
import { createTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography
} from '@mui/material';

const options = {
  colors: ["#231955", "#342EAD", "#92E6E6", "#D82148", "#06FF00", "#FF1700", "#E8AA42", "#3F4E4F", "#5463FF", "FF1818", "#1F4690", "#FFE5B4", "#377D71", "#FBC5C5", "#8879B0", "#FF9F29", "#FBA1A1", "#FF0063", "#3EC70B", "#A149FA", "#66BFBF"],
  enableTooltip: true,
  deterministic: false,
  fontFamily: " Arial",
  fontSizes: [5, 60],
  fontStyle: "normal",
  fontWeight: "normal",
  width: 1000,
  height: 1000,
  padding: 1,
  rotations: 10,
  // rotationAngles: [-50, 10],
  rotationAngles: [-20, 70],
  scale: "sqrt",
  spiral: "archimedean",
  transitionDuration: 1000
};
const size = [800, 500];


function Wordcloud() {
  return (
    <>

      <Box
        component="main">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar
              minHeight='3px'>
              <Box sx={{ flexGrow: 2 }} />
            </Toolbar>
          </AppBar>
        </Box>




        <Container maxWidth="lg">
          <Typography align="center" component="h2" variant="h4" color="primary" gutterBottom>
            {"법령"}
          </Typography>

          <Box
            component="main"
            style={{ width: "100%", height: "100%" }}
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexGrow: 2,
              minHeight: '100%',
              mt: 2
            }}
          >
            <ReactWordcloud options={options} words={words} size={size} />
            <Box sx={{ flexGrow: 3 }} />
          </Box>

        </Container>
      </Box>
    </>

  );
}


Wordcloud.getLayout = (page) => (
  { page }
);


export default Wordcloud;