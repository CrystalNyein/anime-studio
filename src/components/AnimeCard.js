import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { addUser } from "../redux/actions";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: theme.spacing(3),
  },
}));

const AnimeCard = ({ anime, users, addUser }) => {
  const handleLearnMore = () => {
    if (users) {
      console.log("user Logged in");
    } else {
      console.log("user not logged in");
    }
  };
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={anime["image_title"]}
          height="140"
          image={anime["image_url"]}
          title={anime["title"]}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {anime["title"]}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {anime["type"]}
          </Typography>
          <Typography variant="body1" component="p">
            Aired On : {anime["start_date"]} - {anime["end_date"]}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary" onClick={handleLearnMore}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
const mapStateToProps = (state) => {
  const { users } = state;
  return users;
};
export default connect(mapStateToProps, addUser)(AnimeCard);
