import { useFormik } from 'formik';
import { Link as Ddddd }from 'react-router-dom';
import ReactWordcloud from 'react-wordcloud';
import * as Yup from 'yup';

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

const Wordcloud = () => {
  const words = [
    {
      text: '찌미찌미',
      value: 299,
    },
    {
      text: '조운하',
      value: 300,
    },
    {
      text: '지현',
      value: 100,
    },
    {
      text: 'pmk',
      value: 95,
    },
    {
      text: '찌미찌미',
      value: 299,
    },
    {
      text: '조운하',
      value: 300,
    },
    {
      text: '지현',
      value: 100,
    },
    {
      text: 'pmk',
      value: 95,
    },
    {
      text: '찌미찌미',
      value: 299,
    },
    {
      text: '조운하',
      value: 300,
    },
    {
      text: '지현',
      value: 100,
    },
    {
      text: 'pmk',
      value: 95,
    },
  ]
  const options = {
    rotations: 2,
    rotationAngles: [-90, 0],
  };
  const size = [600, 400];
  const callbacks = {
    getWordColor: word => word.value > 50 ? "blue" : "red",
    onWordClick: console.log,
    onWordMouseOver: console.log,
    getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`,
  }
  return (
    <>
      <Container component="main" maxWidth="sm">
        <Box
          component="main"
          sx={{
            alignItems: 'center',
            // display: 'flex',
            flexGrow: 1,
            minHeight: '100%',
            mt: 2
          }}
        >
          <Container maxWidth="sm">
            <ReactWordcloud
              callbacks={callbacks}
              options={options}
              size={size}
              words={words}
            />
          </Container>
        </Box>
      </Container>
    </>
  );
};

Wordcloud.getLayout = (page) => (
    {page}
);


export default Wordcloud;

