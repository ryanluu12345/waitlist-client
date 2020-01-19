import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useGetAllWaitlist } from "../../hooks/networking/waitlist-networking-helper";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import JoinWaitlistModal from "./JoinWaitlistModal";
import WaitlistTable from "./WaitlistTable";

import Grid from "@material-ui/core/Grid";

export default function CustomerWaitlist() {
  const [isModalShow, setIsModalShow] = useState(false);

  const { response, error, isLoading } = useGetAllWaitlist();
  const waitlistItems = response ? response.data.Items : [];

  const { restaurant } = useParams();
  const useStyles = makeStyles({
    waitlistTitle: {
      fontSize: "50px",
      color: "#fff"
    },
    waitlistButton: {
      width: "75%"
    },
    spinnerBack: {
      margin: "10px 0",
      color: "#fff"
    }
  });
  const classes = useStyles();

  const handleWaitlistClick = event => {
    event.preventDefault();
    setIsModalShow(true);
  };

  const handleModalCloseClick = event => {
    event.preventDefault();
    setIsModalShow(false);
  };

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      {isModalShow && (
        <JoinWaitlistModal
          isModalShow={isModalShow}
          handleModalCloseClick={handleModalCloseClick}
          restaurant={restaurant}
        />
      )}
      <h2 className={classes.waitlistTitle}> {restaurant} Waitlist</h2>
      <Button
        onClick={handleWaitlistClick}
        className={classes.waitlistButton}
        variant="contained"
        color="primary"
      >
        Join the Waitlist
      </Button>
      {isLoading && <CircularProgress className={classes.spinnerBack} />}
      {error && "There is error"}
      <WaitlistTable tableItems={waitlistItems} isLoading={isLoading} />
    </Grid>
  );
}
