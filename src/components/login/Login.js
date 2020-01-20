import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useUserAuth from "../../hooks/context/useUserAuth";
import { loginUserAPI } from "../../hooks/networking/user-networking-helper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  error: {
    color: "red"
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
  const history = useHistory();
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { loginUser } = useUserAuth();
  const classes = useStyles();

  const handleChange = event => {
    event.persist();
    setInputs(state => ({
      ...state,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const data = await loginUserAPI(inputs.email, inputs.password);
      const { token, user } = data.data.data;
      loginUser(user, token);
      setIsLoading(false);
      history.push("/");
    } catch (err) {
      setError("Wrong password or email!");
      setIsLoading(false);
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
        {isLoading && <CircularProgress />}
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
        {error && (
          <Typography className={classes.error} variant="h6">
            {error}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
}
