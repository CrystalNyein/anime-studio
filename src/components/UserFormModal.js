import { Button, Input, makeStyles, Modal, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { connect } from "react-redux";
import { UserFormContext } from "../App";
import { loginUser } from "../redux/actions";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  paper: {
    position: "absolute",
    width: 350,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const UserFormModal = ({ users, loginUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLoginForm = (e) => {
    e.preventDefault();
    console.log("username:", username, " password:", password);
    loginUser(username, password);
    setOpenUserForm(false);
  };
  const { openUserForm, setOpenUserForm } = useContext(UserFormContext);
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  return (
    <Modal
      open={openUserForm}
      onClose={() => setOpenUserForm(false)}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">Login / Signup</h2>
        <div id="simple-modal-description">
          <form
            className={classes.root}
            autoComplete="off"
            onSubmit={handleLoginForm}
          >
            <TextField
              required
              id="username"
              variant="outlined"
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              id="password-input"
              label="Password"
              required
              type="password"
              variant="outlined"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  const { users } = state;
  return users;
};

export default connect(mapStateToProps, { loginUser })(UserFormModal);
