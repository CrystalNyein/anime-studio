import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: theme.spacing(2),
    justifyContent: "space-between",
    alignItems: "center",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    minWidth: 100,
    maxWidth: 100,
    height: 135,
  },
}));

const AsideAnimeCard = ({ anime }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="p" variant="body1">
            {anime["title"]}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {anime["type"]}
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={anime["image_url"]}
        title={anime["title"]}
      />
    </Card>
  );
};

export default AsideAnimeCard;
