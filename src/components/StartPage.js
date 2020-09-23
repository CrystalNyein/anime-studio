import {
  Grid,
  makeStyles,
  Paper,
  Typography,
  useTheme,
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import { AnimeContext } from "../App";
import AnimeCard from "./AnimeCard";
import AsideAnimeCard from "./AsideAnimeCard";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import AsideAnimeCardGroup from "./AsideAnimeCardGroup";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const useStyles = makeStyles((theme) => ({
  pr3: {
    paddingLeft: theme.spacing(3),
  },
  aside: {
    margin: theme.spacing(3),
  },
}));

const StartPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const animeList = useContext(AnimeContext);
  const [activeStep, setActiveStep] = useState(0);
  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid container item md={9}>
          <Grid item md={12}>
            <Typography variant="h4" component="h4" className={classes.pr3}>
              Popular Anime
            </Typography>
          </Grid>
          {animeList["bypopularity"] &&
            animeList["bypopularity"].map((anime) => (
              <Grid item xs={12} sm={6} md={4} key={anime.mal_id}>
                <AnimeCard anime={anime} />
              </Grid>
            ))}
        </Grid>
        <Grid item sm={false} md={3}>
          <Paper variant="outlined" className={classes.aside}>
            <Typography variant="h4" component="h4">
              Upcoming Anime
            </Typography>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {[...Array(13)].map((e, i) => (
                <div key={i}>
                  {Math.abs(activeStep - i) <= 2 ? (
                    <AsideAnimeCardGroup
                      animeList={animeList["upcoming"].slice(
                        i * 4,
                        (i + 1) * 4
                      )}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default StartPage;
