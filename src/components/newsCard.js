import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
// const ogs = require("open-graph-scraper");

const NewsCard = ({ title, content, image }) => {

  React.useEffect(() => {
    // const result = axios.get("http://news.imaeil.com/page/view/2022080712562703357");
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

        <Card
          sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={"http://news.imaeil.com/page/view/2022080712562703357"}
              src={"http://news.imaeil.com/page/view/2022080712562703357"}
              alt="green iguana"
            />
            <a src='http://news.imaeil.com/page/view/2022080712562703357' herf="http://news.imaeil.com/page/view/2022080712562703357"></a>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <div dangerouslySetInnerHTML={{ __html: content }}>
                </div>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
};

NewsCard.getLayout = (page) => (
  { page }
);


export default NewsCard;

