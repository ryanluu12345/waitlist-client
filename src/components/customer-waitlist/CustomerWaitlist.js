import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import JoinWaitlistModal from './JoinWaitlistModal';
import WaitlistTable from './WaitlistTable';

import Grid from '@material-ui/core/Grid';

export default function CustomerWaitlist() {
  const [ isModalShow, setIsModalShow ] = useState(false);
  //TODO: add useEffect to get from the API

  const { restaurant } = useParams();
  const useStyles = makeStyles({
    waitlistTitle: {
      fontSize: '50px',
      color: '#fff'
    },
    waitlistButton: {
      width: '75%'
    }
  });
  const classes = useStyles();

  const handleWaitlistClick = (event) => {
    event.preventDefault();
    setIsModalShow(true);
  }

  const handleModalCloseClick = (event) => {
    event.preventDefault();
    setIsModalShow(false);
  }

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <JoinWaitlistModal isModalShow={isModalShow} handleModalCloseClick={handleModalCloseClick} restaurant={restaurant} /> 
      <h1 className={classes.waitlistTitle}> { restaurant } Waitlist</h1>
      <Button onClick={handleWaitlistClick} className={classes.waitlistButton} variant="contained" color="primary">
        Join the Waitlist
      </Button>
      <WaitlistTable />
    </Grid>
  );
}
