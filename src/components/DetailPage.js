import { Button, Grid, IconButton, Typography } from "@material-ui/core";
import { ArrowBackIosRounded } from "@material-ui/icons";
import Axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { LoaderContext } from "../App";
import { removeWritten } from "../utils";
import Loader from "./Loader";

const DetailPage = ({ history, match }) => {
  const { isLoading, setIsLoading } = useContext(LoaderContext);

  const [anime, setAnime] = useState({});

  const fetchAnime = () => {
    setIsLoading(true);
    Axios.get(`anime/${match.params.id}`)
      .then((res) => {
        console.log(res.data);
        setAnime(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setAnime({});
        setIsLoading(false);
      });
  };
  useEffect(() => {
    fetchAnime();
  }, []);

  const backHomePage = () => {
    history.push("/");
  };
  return isLoading ? (
    <Loader />
  ) : (
    <Grid container spacing={3}>
      <Grid item md={12}>
        <IconButton onClick={backHomePage}>
          <ArrowBackIosRounded />
        </IconButton>
      </Grid>
      <Grid item md={1} />
      <Grid container item md={10} spacing={3}>
        <Grid item md={4}>
          <img
            src={anime["image_url"]}
            style={{ width: "100%" }}
            alt={anime["title"]}
          />
        </Grid>
        <Grid item md={8}>
          <Typography variant="h2" component="h2">
            {anime["title"]}
          </Typography>
          <Typography variant="subtitle1" component="p">
            {anime["title_japanese"]}
          </Typography>
          <br />
          <br />
          <Typography variant="h6" component="h6">
            Synopsis
          </Typography>
          <Typography variant="body1" component="p">
            {anime["synopsis"] && removeWritten(anime["synopsis"])}
          </Typography>
        </Grid>
      </Grid>
      <Grid item md={1} />
      <Grid item md={1} />
      <Grid container item md={10} spacing={2}>
        <Grid item md={6}>
          <Typography variant="h6" component="h6">
            <strong>Rating : </strong>
            {anime["rating"]}
          </Typography>
          <Typography variant="h6" component="h6">
            <strong>Duration : </strong>
            {anime["duration"]}
          </Typography>
          <Typography variant="h6" component="h6">
            <strong>Episodes: </strong>
            {anime["episodes"]}
          </Typography>
          <Typography variant="h6" component="h6">
            <strong>Score: </strong>
            {anime["score"]} / 10
          </Typography>
          <Typography variant="h6" component="h6">
            <strong>Scored By: </strong>
            {anime["score_by"]}
          </Typography>
          <Typography variant="h6" component="h6">
            <strong>Rank: </strong>
            {anime["rank"]}
          </Typography>
          <Typography variant="h6" component="h6">
            <strong>Popularity: </strong>
            {anime["popularity"]}
          </Typography>
          <Typography variant="h6" component="h6">
            <strong>Members: </strong>
            {anime["members"]}
          </Typography>
          <Typography variant="h6" component="h6">
            <strong>Favorite: </strong>
            {anime["favorites"]}
          </Typography>
        </Grid>
        <Grid item md={4}>
          <iframe
            width="560"
            height="315"
            src={anime["trailer_url"]}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Grid>
      </Grid>
      <Grid item md={1} />
    </Grid>
  );
};

export default withRouter(DetailPage);
