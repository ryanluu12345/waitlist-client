import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function Home() {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    paper: {
      height: 140,
      width: 100
    },
    control: {
      padding: theme.spacing(2)
    },
    gridItem: {
      width: "60%"
    },
    inputRoot: {
      background: "#1976d2",
      color: "#fff",
      opacity: 0.4,
      borderRadius: "5px",
      margin: "20px 0",
      padding: "7px"
    },
    cardContainer: {
      width: "80%"
    }
  }));
  const classes = useStyles();

  return (
    <Grid container direction="column" alignItems="center">
      <Grid
        item
        className={classes.gridItem}
        direction="row"
        alignItems="center"
        justify="center"
      >
        <InputBase
          fullWidth={true}
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </Grid>
      <Grid className={classes.cardContainer} item>
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
      </Grid>
    </Grid>
  );
}

function SimpleCard() {
  const useStyles = makeStyles({
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)"
    },
    title: {
      fontSize: 14
    },
    pos: {
      marginBottom: 12
    },
    card: {
      width: "28%",
      margin: "10px"
    }
  });

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card} style={{ display: "inline-block" }}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
