import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { MenuRounded } from "@material-ui/icons";
import React from "react";

const useStyle = makeStyles((theme) => ({
  green: {
    backgroundColor: "#16b920",
  },
  justifySpaceBetween: {
    justifyContent: "space-between",
  },
}));

const NavBar = () => {
  const classes = useStyle();
  return (
    <AppBar position="static" className={classes.green}>
      <Toolbar className={classes.justifySpaceBetween}>
        <Typography variant="h6">Anime Studio</Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
