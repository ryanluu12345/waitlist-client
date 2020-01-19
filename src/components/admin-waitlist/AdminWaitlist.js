import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import useUserAuth from "../../hooks/context/useUserAuth";
import {
  updateWaitlistStatus,
  getAllWaitlist
} from "../../hooks/networking/waitlist-networking-helper";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

import AdminWaitlistTable from "./AdminWaitlistTable";

export default function AdminWaitlist() {
  const { restaurant } = useParams();
  const history = useHistory();
  const { isAdmin } = useUserAuth();
  const [waitlistItems, setWaitlistItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isAdmin) return history.push("/waitlist/Test");

    const getFromWaitlist = async () => {
      try {
        setIsLoading(true);
        const res = await getAllWaitlist();
        setWaitlistItems(res ? res.data.data.Items : []);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    getFromWaitlist();
  }, []);

  const useStyles = makeStyles({
    waitlistTitle: {
      fontSize: "50px",
      color: "#fff"
    },
    waitlistButton: {
      width: "75%"
    },
    spinnerBack: {
      color: "#fff"
    }
  });
  const classes = useStyles();

  const handleCallClick = async (index, id) => {
    try {
      const res = await updateWaitlistStatus(id, {
        status: {
          ...waitlistItems[index].Status,
          called: 1
        }
      });
      const newItems = [...waitlistItems];
      newItems[index] = res.data.data.Attributes;
      setWaitlistItems(newItems);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };

  const handleSeatedClick = async (index, id) => {
    try {
      const res = await updateWaitlistStatus(id, {
        status: {
          ...waitlistItems[index].Status,
          seated: 1,
          queued: 0
        }
      });
      const newItems = [...waitlistItems];
      newItems[index] = res.data.data.Attributes;
      setWaitlistItems(newItems);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <h2 className={classes.waitlistTitle}>
        Manage Your {restaurant} Waitlist
      </h2>
      {error && "Error component"}
      {isLoading && <CircularProgress className={classes.spinnerBack} />}
      <AdminWaitlistTable
        isLoading={isLoading}
        handleSeatedClick={handleSeatedClick}
        handleCallClick={handleCallClick}
        tableItems={waitlistItems}
      />
    </Grid>
  );
}
