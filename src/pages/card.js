import * as React from 'react';
import { check } from '../auth/auth'
import { Box, CardActionArea, Container, getCardHeaderUtilityClass, Grid, Typography } from '@mui/material';
import NewsCard from '../components/newsCard';
import axios from 'axios';
import XMLParser from "react-xml-parser";

const GoogleNews = () => {
  const [newsList, setNewsList] = React.useState([]);
  React.useEffect(() => {
    const url = "/rss/search?q=%ED%95%99%EA%B5%90%ED%8F%AD%EB%A0%A5&hl=ko&gl=KR&ceid=KR%3Ako"
    axios.get(url)
      .then(res => res)
      .then(res => {
        const haha = new XMLParser().parseFromString(res.data);
        const hihi = haha.getElementsByTagName("item")
        console.debug(hihi)
        setNewsList(hihi)
      })
  }, [])
  return (
    <>
      <Container maxWidth="lg" sx={{ mb: 4 }}>
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
            카드뉴스
          </Typography>
        </Box>
        <Grid container maxWidth="lg" spacing={3}>

          <Grid item xs={3}>

            {newsList.map(news => {

              return (
                <NewsCard title={news.children[0].value} content={news.children[4].value}></NewsCard>)
            })}

            <NewsCard ></NewsCard>
          </Grid>
        </Grid>


      </Container>
    </>
  );
};

GoogleNews.getLayout = (page) => (
  { page }
);


export default GoogleNews;

