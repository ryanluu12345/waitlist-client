import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import AdminWaitlistTable from "./AdminWaitlistTable";

export default function AdminWaitlist() {
  const { restaurant } = useParams();
  const [tableItems, setTableItems] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://4mdkymzgg5.execute-api.us-west-2.amazonaws.com/dev/waitlist"
      )
      .then(res => {
        setTableItems(res.data.data.Items);
      });
  }, []);

  const useStyles = makeStyles({
    waitlistTitle: {
      fontSize: "50px",
      color: "#fff"
    },
    waitlistButton: {
      width: "75%"
    }
  });
  const classes = useStyles();

  //TODO: make request to update status in DB
  const handleCallClick = (index, id) => {
    axios
      .put(
        "https://4mdkymzgg5.execute-api.us-west-2.amazonaws.com/dev/waitlist/" +
          id,
        {
          status: {
            ...tableItems[index].Status,
            called: 1
          }
        }
      )
      .then(res => {
        const newItems = [...tableItems];
        newItems[index] = res.data.data.Attributes;
        setTableItems(newItems);
      });
  };

  const handleSeatedClick = (index, id) => {
    axios
      .put(
        "https://4mdkymzgg5.execute-api.us-west-2.amazonaws.com/dev/waitlist/" +
          id,
        {
          status: {
            ...tableItems[index].Status,
            seated: 1,
            queued: 0
          }
        }
      )
      .then(res => {
        const newItems = [...tableItems];
        newItems[index] = res.data.data.Attributes;
        setTableItems(newItems);
      })
      .catch(err => console.log(err));
  };

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <h1 className={classes.waitlistTitle}>
        Manage Your {restaurant} Waitlist
      </h1>
      <AdminWaitlistTable
        handleSeatedClick={handleSeatedClick}
        handleCallClick={handleCallClick}
        tableItems={tableItems}
      />
    </Grid>
  );
}
