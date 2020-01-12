import React, { useState, useEffect } from "react";
import testData from "../../tests/mock-data/mock-data";
import { getAllRestaurants } from "../../hooks/networking/waitlist-networking-helper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import RestaurantCard from "./RestaurantCard";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Home() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getFromRestaurants = async () => {
      try {
        setIsLoading(true);
        const res = await getAllRestaurants();
        setRestaurantData(res ? res.data.data : []);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    getFromRestaurants();
  }, []);

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
      [theme.breakpoints.down("sm")]: {
        width: "82%"
      },
      width: "60%"
    },
    inputRoot: {
      background: "#fff",
      color: "#1976d2",
      opacity: 1,
      borderRadius: "5px",
      margin: "20px 0",
      padding: "7px"
    },
    cardContainer: {
      width: "90%"
    },
    spinnerBack: {
      color: "#fff"
    }
  }));
  const classes = useStyles();

  //TODO: update function to handle actual data from database. Search by name
  const handleInput = event => {
    const searchValue = event.target.value.toLowerCase();
    const newData = testData.restaurantTestData.filter(
      item =>
        item.name.toLowerCase().indexOf(searchValue) != -1 ||
        item.description.toLowerCase().indexOf(searchValue) != -1
    );
    setRestaurantData(newData);
  };

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
          onChange={handleInput}
          fullWidth={true}
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </Grid>
      {isLoading && <CircularProgress className={classes.spinnerBack} />}
      <Grid className={classes.cardContainer} item>
        {restaurantData.map(item => (
          <RestaurantCard
            id={item.id}
            name={item.name}
            description={item.description}
            imgLink={item.image}
          />
        ))}
      </Grid>
    </Grid>
  );
}
