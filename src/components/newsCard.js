import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Link } from '@mui/material';
import Grid from '@mui/material/Grid';
import axios from 'axios';
const NewsCard = ({ url }) => {

  const [img, setImg] = React.useState('')
  const [data, setData] = React.useState({})
  React.useEffect(() => {
    const test = encodeURIComponent(url);
    console.debug(test)
    const gaha = 'https://opengraph.io/api/1.1/site/' + test + '?accept_lang=auto&app_id=9efe4e96-57f7-49ad-84e4-3208116e1ca4'

    axios.get(gaha)
      .then(res => res)
      .then(res => {
        console.debug(res)
        setData(res.data.hybridGraph)
        setImg(res.data.hybridGraph.image)
      })
    // googleNewsAPI.getNews(googleNewsAPI.SEARCH, "apple", "en-GB", (err, response) => {
    //   console.log(response);
    // });

    // const result = axios.get("proxy/http://news.imaeil.com/page/view/2022080712562703357");
    // console.log(
    //   result.data.split("<meta").filter((el) => el.includes("og:image")) // 요런식으로 끄내면 된다잉
    // );


    // const options = { url: 'http://news.imaeil.com/page/view/2022080712562703357' };
    // ogs(options, (error, results, response) => {
    //   console.log('error:', error); // This returns true or false. True if there was an error. The error itself is inside the results object.
    //   console.log('results:', results); // This contains all of the Open Graph results
    //   console.log('response:', response); // This contains the HTML of page
    // });
  }, [])

  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <a herf={url}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={img}
                alt="image"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <div dangerouslySetInnerHTML={{ __html: data.description }}>
                  </div>
                </Typography>
              </CardContent>
              <CardActions>
                <Link variant="body1" href={url}>
                  이동
                </Link>
              </CardActions>

            </CardActionArea>
          </Card>
        </a>
      </Grid>
    </>
  );
};

NewsCard.getLayout = (page) => (
  { page }
);


export default NewsCard;

