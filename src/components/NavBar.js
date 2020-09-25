import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { MenuRounded } from "@material-ui/icons";
import React, { useContext } from "react";
import { connect } from "react-redux";
import { UserFormContext } from "../App";

const useStyle = makeStyles((theme) => ({
  green: {
    backgroundColor: "#16b920",
  },
  justifySpaceBetween: {
    justifyContent: "space-between",
  },
}));

const NavBar = ({ username }) => {
  const classes = useStyle();
  const { setOpenUserForm } = useContext(UserFormContext);
  return (
    <AppBar position="static" className={classes.green}>
      <Toolbar className={classes.justifySpaceBetween}>
        <Typography variant="h6">Anime Studio</Typography>
        {username ? (
          <p>Username</p>
        ) : (
          <Button color="inherit" onClick={() => setOpenUserForm(true)}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(NavBar);
