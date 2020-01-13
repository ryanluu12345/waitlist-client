import React, { useState, useEffect } from "react";
import {
  getAllRestaurants,
  getRestaurantsBySearchTerm
} from "../../hooks/networking/waitlist-networking-helper";
import useDebounce from "../../hooks/user-input/debounce";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import RestaurantCard from "./RestaurantCard";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [restaurantData, setRestaurantData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const debouncedSearchTerm = useDebounce(searchTerm, 325);

  useEffect(() => {
    const getFromRestaurants = async callback => {
      try {
        setIsLoading(true);
        const res = await callback();
        setRestaurantData(res ? res.data.data : []);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    !searchTerm
      ? getFromRestaurants(() => getAllRestaurants())
      : getFromRestaurants(() => getRestaurantsBySearchTerm(searchTerm));
  }, [debouncedSearchTerm]);

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

  const handleInput = event => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);
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
          value={searchTerm}
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
