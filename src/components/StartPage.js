import { Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { AnimeContext } from "../App";
import AnimeCard from "./AnimeCard";

export const useStyles = makeStyles((theme) => ({
  pr2: {
    padding: theme.spacing(2),
  },
}));

const StartPage = () => {
  const classes = useStyles();
  const animeList = useContext(AnimeContext);

  console.log("animeList:", animeList);
  return (
    <div>
      <Grid container>
        <Grid item md={12}>
          <Typography variant="h2" component="h2">
            Popular Anime
          </Typography>
        </Grid>
        {animeList["bypopularity"] &&
          animeList["bypopularity"].map((anime) => (
            <Grid item xs={12} sm={6} md={3} key={anime.mal_id}>
              <AnimeCard anime={anime} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default StartPage;
