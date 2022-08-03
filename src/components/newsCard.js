import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const NewsCard = ({ title, content, image }) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green iguana"
          />
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
    </>
  );
};

NewsCard.getLayout = (page) => (
  { page }
);


export default NewsCard;

