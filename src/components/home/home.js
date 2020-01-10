import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import RestaurantCard from "./RestaurantCard";
import testData from "../../tests/mock-data/mock-data";

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(
    testData.restaurantTestData
  );

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
    }
  }));
  const classes = useStyles();

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
      <Grid className={classes.cardContainer} item>
        {restaurantData.map(item => (
          <RestaurantCard
            id={item.id}
            name={item.name}
            description={item.description}
            imgLink={item.imgLink}
          />
        ))}
      </Grid>
    </Grid>
  );
}
