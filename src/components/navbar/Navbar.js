import React from "react";
import useUserAuth from "../../hooks/context/useUserAuth";

import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import RestaurantIcon from "@material-ui/icons/Restaurant";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    fontWeight: "800"
  },
  bg: {
    background: "#1976d2",
    color: "#fff"
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  margins: {
    fontWeight: "500",
    margin: "0 10px"
  },
  link: {
    color: "inherit",
    textDecoration: "none"
  }
}));

export default function Navbar() {
  const { isLoggedIn } = useUserAuth();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.bg} position="static">
        <Toolbar className={classes.nav}>
          <Grid container>
            <Typography variant="h5" className={classes.title}>
              <RestaurantIcon className={classes.margins} />
              <Link className={classes.link} to="/">
                RestaurantWaitlist
              </Link>
            </Typography>
          </Grid>
          <Grid container justify={"flex-end"} className={classes.navbarGrid}>
            <Typography variant="subtitle1" className={classes.margins}>
              <Link className={classes.link} to="/admin-waitlist/Test">
                Manage Waitlist
              </Link>
            </Typography>
            <Typography variant="subtitle1" className={classes.margins}>
              <Link className={classes.link} to="/waitlist/Test">
                Join the Waitlist
              </Link>
            </Typography>
            {isLoggedIn && (
              <Typography variant="subtitle1" className={classes.margins}>
                <Link className={classes.link} to="/add-restaurant">
                  Add a Restaurant
                </Link>
              </Typography>
            )}
            {!isLoggedIn && (
              <Typography variant="subtitle1" className={classes.margins}>
                <Link className={classes.link} to="/login">
                  Login
                </Link>
              </Typography>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
