import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles, ThemeProvider, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function SimpleCard(props) {
  const { id, name, description, imgLink } = props;
  const useStyles = makeStyles(theme => ({
    title: {
      fontSize: 14
    },
    pos: {
      marginBottom: 12
    },
    card: {
      [theme.breakpoints.down("sm")]: {
        width: "90%"
      },
      width: "28%",
      margin: "10px"
    },
    cardContent: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      width: "100%",
      padding: "15px 0"
    },
    cardImg: {
      borderRadius: "5px",
      objectFit: "cover",
      height: "250px",
      width: "80%"
    },
    cardAction: {
      color: "#fff",
      background: "#1976d2"
    },
    button: {
      color: "#fff"
    },
    link: {
      color: "inherit",
      textDecoration: "none"
    }
  }));

  const classes = useStyles();
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.card} style={{ display: "inline-block" }}>
        <CardContent className={classes.cardContent}>
          <Typography variant="h5" component="h2">
            {name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {description}
          </Typography>
          <img className={classes.cardImg} src={imgLink} />
        </CardContent>
        <CardActions className={classes.cardAction}>
          <Button className={classes.button} size="small">
            <Link className={classes.link} to={"/waitlist/" + name}>
              Join the Waitlist
            </Link>
          </Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}
