import {
  AppBar,
  Avatar,
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
import { getInitials } from "../utils";
import { logoutUser } from "../redux/actions";

const useStyle = makeStyles((theme) => ({
  green: {
    backgroundColor: "#16b920",
  },
  flexgrow: {
    flex: 1,
  },
  textUpper: {
    textTransform: "uppercase",
  },
}));

const NavBar = ({ username, logoutUser }) => {
  // console.log("Username with initials", getInitials(username));
  const classes = useStyle();
  const { setOpenUserForm } = useContext(UserFormContext);
  return (
    <AppBar position="static" className={classes.green}>
      <Toolbar>
        <Typography className={classes.flexgrow} variant="h6">
          Anime Studio
        </Typography>
        {username && (
          <Avatar className={classes.textUpper} color="secondary">
            {getInitials(username)}
          </Avatar>
        )}
        {username ? (
          <Button color="inherit" onClick={logoutUser}>
            Logout
          </Button>
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
export default connect(mapStateToProps, { logoutUser })(NavBar);
