import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function JoinWaitlistModal(props) {
  const { isModalShow, handleModalCloseClick, restaurant } = props;
  const [inputs, setInputs] = useState({
    FirstName: "",
    LastName: "",
    PhoneNumber: "",
    PartySize: 0
  });

  const useStyles = makeStyles(theme => ({
    centerModal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    modalContent: {
      width: "60%",
      borderRadius: "5px",
      backgroundColor: theme.palette.background.paper
    },
    inputRow: {
      justifyContent: "space-evenly"
    },
    textField: {
      margin: "10px 0px"
    },
    submitButton: {
      margin: "10px 0px",
      width: "60%"
    }
  }));
  const classes = useStyles();

  const handleInput = event => {
    const id = event.target.id;
    let value = event.target.value;

    if (id === "partySize") value = Number(value);

    setInputs({
      ...inputs,
      [id]: value
    });
  };

  const handleSubmit = event => {
    axios
      .post(
        "https://4mdkymzgg5.execute-api.us-west-2.amazonaws.com/dev/waitlist",
        {
          ...inputs,
          restaurant: "Tasty Garden"
        }
      )
      .then(data => {
        handleModalCloseClick(event);
        window.location.reload(true);
      })
      .catch(err => console.log(err));
  };

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      className={classes.centerModal}
      open={isModalShow}
      onClose={handleModalCloseClick}
    >
      <div id="modal-content" className={classes.modalContent}>
        <h2 id="modal-title">Join the {restaurant} Waitlist</h2>
        <form className={classes.root} noValidate autoComplete="off">
          <Grid
            container
            className={classes.inputRow}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <TextField
              onChange={handleInput}
              id="firstName"
              className={classes.textField}
              label="First Name"
              variant="outlined"
            />
            <TextField
              onChange={handleInput}
              id="lastName"
              className={classes.textField}
              label="Last Name"
              variant="outlined"
            />
          </Grid>
          <Grid
            container
            className={classes.inputRow}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <TextField
              onChange={handleInput}
              id="phoneNumber"
              className={classes.textField}
              label="Phone Number"
              variant="outlined"
            />
            <TextField
              onChange={handleInput}
              id="partySize"
              className={classes.textField}
              label="Party Size"
              variant="outlined"
            />
          </Grid>
          <Button
            onClick={handleSubmit}
            className={classes.submitButton}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </form>
      </div>
    </Modal>
  );
}
