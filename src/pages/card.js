import * as React from 'react';
import { check } from '../auth/auth'
import { Box, CardActionArea, Container } from '@mui/material';
import NewsCard from '../components/newsCard';

const GoogleNews = () => {
  React.useEffect(() => {
    console.debug(check())
  }, [])
  return (
    <>
      <Box
        component="main"
        sx={{
          mt: 10
        }}
      >
        <Container maxWidth="lg">
          <NewsCard></NewsCard>
        </Container>
      </Box>
    </>
  );
};

GoogleNews.getLayout = (page) => (
  { page }
);


export default GoogleNews;

