import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { AnimeContext } from "../App";
import AnimeCard from "./AnimeCard";
import AsideAnimeCard from "./AsideAnimeCard";

export const useStyles = makeStyles((theme) => ({
  pr3: {
    paddingLeft: theme.spacing(3),
  },
  aside: {
    margin: theme.spacing(3),
    height: "500px",
  },
}));

const StartPage = () => {
  const classes = useStyles();
  const animeList = useContext(AnimeContext);

  console.log("animeList:", animeList);
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
            {animeList["upcoming"] &&
              animeList["upcoming"].map((anime) => (
                <AsideAnimeCard anime={anime} />
              ))}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default StartPage;
