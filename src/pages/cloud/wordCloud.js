import ReactWordcloud from 'react-wordcloud';
import words from './words';
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import {
  Box,
  Container,
  Typography
} from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const clickEvent = (event) => {

    navigate(`/search?searchText=${event.text}`)
    console.debug(event)
  }
  const callbacks = {
    onWordClick: clickEvent,
    onWordMouseOver: console.log,
    getWordTooltip: word => `${word.text} (${word.value})`,
  }
  const [wordList, setWordList] = useState([])
  useEffect(() => {

    axios.post("/word/getWordList", {})
      .then(res => res)
      .then(res => {
        console.debug(res.data)
        // pass a function to map
        //const map1 = res.data.map((x) => {"text":x.word, "value":x.count});
        const map2 = res.data.map(element => {
          return { "text": element.word, "value": element.count }
        })
        setWordList(map2);
        // expected output: Array [2, 8, 18, 32]




      })
  }, [])

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
          <ReactWordcloud callbacks={callbacks} options={options} words={wordList} size={size} />
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