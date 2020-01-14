import React, { useState } from "react";
import useUserAuth from "../../hooks/context/useUserAuth";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    fontWeight: "800"
  },
  content: {
    width: "80%"
  },
  textInput: {
    background: "#fff",
    borderRadius: "9px",
    margin: "10px 0",
    width: "80%"
  },
  button: {
    background: "#1976d2",
    color: "#fff",
    opacity: 0.8,
    width: "80%",
    "&:hover": {
      background: "#1976d2",
      opacity: 1.0,
      transform: "scaleY(1.05)"
    }
  }
}));

export default function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });
  const { loginUser, logoutUser } = useUserAuth();
  const classes = useStyles();

  const handleChange = event => {
    event.persist();
    setInputs(state => ({
      ...state,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    logoutUser();
    if (inputs.email === "rnluu@uci.edu" && inputs.password === "password") {
      loginUser(
        { email: inputs.email, name: "Ryan" },
        "askl4093lkfgj0-2p2xcdjgjkle"
      );
    }
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.content}
      >
        <Typography variant="h2">Login Here</Typography>
        <TextField
          name="email"
          onChange={handleChange}
          placeholder="Email"
          variant="outlined"
          className={classes.textInput}
        />
        <TextField
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Password"
          variant="outlined"
          className={classes.textInput}
        />
        <Button onClick={handleSubmit} className={classes.button}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
}
