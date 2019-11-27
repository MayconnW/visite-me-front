import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MediaCard from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";

import { CardMedia, Typography, TypographyText, CardActions } from "./style";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Card({ image, eventName, description, date, hour }) {
  const classes = useStyles();

  return (
    <MediaCard className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title="Eventos" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {eventName}
          </Typography>
          <TypographyText variant="body2" color="textSecondary" component="p">
            {description}
          </TypographyText>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <span>{date}</span>
        <span>{hour}</span>
      </CardActions>
    </MediaCard>
  );
}
