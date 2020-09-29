import { Button, Grid, Typography } from "@material-ui/core";
import Axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { LoaderContext } from "../App";
import { removeWritten } from "../utils";
import Loader from "./Loader";

const DetailPage = ({ match }) => {
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
  return isLoading ? (
    <Loader />
  ) : (
    <Grid container spacing={3}>
      <Grid item md={1} />
      <Grid item md={3}>
        <img
          src={anime["image_url"]}
          style={{ width: "100%" }}
          alt={anime["title"]}
        />
      </Grid>
      <Grid item md={7}>
        <Typography variant="h2" component="h2">
          {anime["title"]}
        </Typography>
        <Typography variant="subtitle1" component="p">
          {anime["title_japanese"]}
        </Typography>
        <br />
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
        <Button>{anime["favorite"]}</Button>
        <br />
        <Typography variant="body1" component="p">
          {anime["synopsis"] && removeWritten(anime["synopsis"])}
        </Typography>
      </Grid>
      <Grid item md={1} />
    </Grid>
  );
};

export default DetailPage;
