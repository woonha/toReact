import { useFormik } from 'formik';
import { Link as Ddddd } from 'react-router-dom';
import ReactWordcloud from 'react-wordcloud';
import * as Yup from 'yup';
import words from './words';
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import Divider from '@mui/material/Divider';
import { createTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography
} from '@mui/material';

const colorTool = createTheme({
  palette: {
    primary: {
      main: '#ffebee',
      light: '#fe9D7C',
      dark: '#FC4279',
      contrastText: '#fe4279'
    },
    neutural: {
      main: '#828df8'
    },
    typography: {
      poster: {
        light: '#f8bbd0',
        main: '#f48fb1',
        dark: '#002884',
        contrastText: '#fe4279'
      },
    }
  }
});

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
        <Container maxWidth="md">
          <Box sx={{ my: 3, textAlign: 'center' }} >
            <Divider>
              <Typography
                theme={colorTool}
                color='primary.contrastText'
                variant="h5"
              >
                법령 클라우드
              </Typography>
            </Divider>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="body3"
            >
              아래의 단어를 클릭해보세요!
            </Typography>
          </Box>

          <Box
            component="main"
            style={{ width: "100%", height: "100%" }}
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexGrow: 1,
              minHeight: '100%',
              mt: 2
            }}
          >
            <ReactWordcloud options={options} words={words} size={size} />
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