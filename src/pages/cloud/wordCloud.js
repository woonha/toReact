import ReactWordcloud from 'react-wordcloud';
import words from './words';
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import {
  Box,
  Container,
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
const size = [1152, 500];


function WordCloud() {
  return (
    <>
      <Container maxWidth="lg" sx={{ mb: '4' }}>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            m: 1
          }}
        >
          <Typography
            sx={{ m: 2 }}
            variant="h4"
          >
            법령 클라우드
          </Typography>
        </Box>

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

    </>

  );
}


WordCloud.getLayout = (page) => (
  { page }
);


export default WordCloud;