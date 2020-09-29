import {
  Grid,
  IconButton,
  makeStyles,
  Modal,
  Paper,
  rgbToHex,
  Typography,
  useTheme,
} from "@material-ui/core";
import React, { useContext, useState, useEffect } from "react";
import { AnimeContext, LoaderContext } from "../App";
import AnimeCard from "./AnimeCard";
import AsideAnimeCard from "./AsideAnimeCard";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import AsideAnimeCardGroup from "./AsideAnimeCardGroup";
import { ChevronRightRounded } from "@material-ui/icons";
import UserFormModal from "./UserFormModal";
import Loader from "./Loader";
import Axios from "axios";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const useStyles = makeStyles((theme) => ({
  pr3: {
    paddingLeft: theme.spacing(3),
  },
  aside: {
    margin: theme.spacing(3),
  },
  positionRelative: {
    position: "relative",
  },
  btnPosition: {
    position: "absolute",
    top: 130,
    right: -15,
    backgroundColor: "#646464",
  },
  iconSize: {
    fontSize: "2em",
  },
}));

const initialAnimeList = {
  upcoming: [],
  bypopularity: [],
  favorite: [],
};

const StartPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { isLoading, setIsLoading } = useContext(LoaderContext);

  const [animeList, setAnimeList] = useState(initialAnimeList);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const fetchAnimeList = async (param) => {
      setIsLoading(true);
      try {
        const res = await Axios.get(`top/anime/1/${param}`);
        setAnimeList((prevState) => {
          prevState[param] = res.data.top;
          return prevState;
        });
        param === "favorite" && setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setAnimeList(initialAnimeList);
      }
    };
    fetchAnimeList("upcoming");
    setTimeout(() => fetchAnimeList("bypopularity"), 4100);
    setTimeout(() => fetchAnimeList("favorite"), 8200);
  }, []);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <Grid container spacing={2}>
        <Grid container item md={9}>
          <Grid item sm={12} md={12}>
            <Typography variant="h4" component="h4" className={classes.pr3}>
              Popular Anime
            </Typography>
          </Grid>
          {animeList["bypopularity"] &&
            animeList["bypopularity"].slice(0, 6).map((anime, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={anime.mal_id}
                className={classes.positionRelative}
              >
                <AnimeCard anime={anime} />
                {index === 5 && (
                  <IconButton className={classes.btnPosition}>
                    <ChevronRightRounded className={classes.iconSize} />
                  </IconButton>
                )}
              </Grid>
            ))}
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
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
      <UserFormModal />
    </div>
  );
};

export default StartPage;
