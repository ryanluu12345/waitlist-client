import React, { useState } from 'react';
import { useParams } from 'react-router';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import AdminWaitlistTable from './AdminWaitlistTable';

export default function AdminWaitlist() {
  const { restaurant } = useParams();
  const [ tableItems, setTableItems ] = useState([
        {
            "UpdatedAt": 1577864187447,
            "PartySize": 5,
            "PhoneNumber": "626-278-0357",
            "Status": {
                "called": true,
                "seated": false,
                "queued": true
            },
            "FirstName": "Ryan7",
            "id": "1c840e41-efd7-4ffe-abec-a397a75fa729",
            "LastName": "Luur",
            "Restaurant": "Tasty Garden",
            "CreatedAt": 1577864187447
        },
        {
            "UpdatedAt": 1577864191184,
            "PartySize": 5,
            "PhoneNumber": "626-278-0357",
            "Status": {
                "called": false,
                "seated": false,
                "queued": true
            },
            "FirstName": "Ryan9",
            "id": "885cf621-23df-437a-901f-ac30f53290fb",
            "LastName": "Luur",
            "Restaurant": "Tasty Garden",
            "CreatedAt": 1577864191184
        },
        {
            "UpdatedAt": 1577864194309,
            "PartySize": 5,
            "PhoneNumber": "626-278-0357",
            "Status": {
                "called": 0,
                "seated": 0,
                "queued": 1
            },
            "FirstName": "Ryan15",
            "id": "eab7c3a8-8802-4f52-aabc-868997e85f21",
            "LastName": "Luur",
            "Restaurant": "Tasty Garden",
            "CreatedAt": 1577864194309
        },
        {
            "UpdatedAt": 1577864197694,
            "PartySize": 5,
            "PhoneNumber": "626-278-0357",
            "Status": {
                "called": 0,
                "seated": 0,
                "queued": 0
            },
            "FirstName": "Ryan25",
            "id": "11157164-9769-4f4e-be82-a1395e0b9a24",
            "LastName": "Luur",
            "Restaurant": "Tasty Garden",
            "CreatedAt": 1577864197694
        },
        {
            "UpdatedAt": 1577950996084,
            "PartySize": 89,
            "PhoneNumber": "626-279-0357",
            "Status": {
                "called": false,
                "seated": false,
                "queued": true
            },
            "FirstName": "Ryan99",
            "id": "42e931a4-b669-4f32-9379-6dec8762c267",
            "LastName": "Luus",
            "Restaurant": "Tasty Garden",
            "CreatedAt": 1577950996084
        },
        {
          "UpdatedAt": 1577864187447,
          "PartySize": 5,
          "PhoneNumber": "626-278-0357",
          "Status": {
              "called": false,
              "seated": false,
              "queued": true
          },
          "FirstName": "Ryan7",
          "id": "1c840e41-efd7-4ffe-abec-a397a75fa729",
          "LastName": "Luur",
          "Restaurant": "Tasty Garden",
          "CreatedAt": 1577864187447
      },
      {
          "UpdatedAt": 1577864191184,
          "PartySize": 5,
          "PhoneNumber": "626-278-0357",
          "Status": {
              "called": false,
              "seated": false,
              "queued": true
          },
          "FirstName": "Ryan9",
          "id": "885cf621-23df-437a-901f-ac30f53290fb",
          "LastName": "Luur",
          "Restaurant": "Tasty Garden",
          "CreatedAt": 1577864191184
      },
      {
          "UpdatedAt": 1577864194309,
          "PartySize": 5,
          "PhoneNumber": "626-278-0357",
          "Status": {
              "called": false,
              "seated": false,
              "queued": true
          },
          "FirstName": "Ryan15",
          "id": "eab7c3a8-8802-4f52-aabc-868997e85f21",
          "LastName": "Luur",
          "Restaurant": "Tasty Garden",
          "CreatedAt": 1577864194309
      },
      {
          "UpdatedAt": 1577864197694,
          "PartySize": 5,
          "PhoneNumber": "626-278-0357",
          "Status": {
              "called": 0,
              "seated": 0,
              "queued": 0
          },
          "FirstName": "Ryan25",
          "id": "11157164-9769-4f4e-be82-a1395e0b9a24",
          "LastName": "Luur",
          "Restaurant": "Tasty Garden",
          "CreatedAt": 1577864197694
      },
      {
          "UpdatedAt": 1577950996084,
          "PartySize": 89,
          "PhoneNumber": "626-279-0357",
          "Status": {
              "called": false,
              "seated": false,
              "queued": true
          },
          "FirstName": "Ryan99",
          "id": "42e931a4-b669-4f32-9379-6dec8762c267",
          "LastName": "Luus",
          "Restaurant": "Tasty Garden",
          "CreatedAt": 1577950996084
      },
      {
        "UpdatedAt": 1577864187447,
        "PartySize": 5,
        "PhoneNumber": "626-278-0357",
        "Status": {
            "called": false,
            "seated": false,
            "queued": true
        },
        "FirstName": "Ryan7",
        "id": "1c840e41-efd7-4ffe-abec-a397a75fa729",
        "LastName": "Luur",
        "Restaurant": "Tasty Garden",
        "CreatedAt": 1577864187447
    },
    {
        "UpdatedAt": 1577864191184,
        "PartySize": 5,
        "PhoneNumber": "626-278-0357",
        "Status": {
            "called": false,
            "seated": false,
            "queued": true
        },
        "FirstName": "Ryan9",
        "id": "885cf621-23df-437a-901f-ac30f53290fb",
        "LastName": "Luur",
        "Restaurant": "Tasty Garden",
        "CreatedAt": 1577864191184
    },
    {
        "UpdatedAt": 1577864194309,
        "PartySize": 5,
        "PhoneNumber": "626-278-0357",
        "Status": {
            "called": false,
            "seated": false,
            "queued": true
        },
        "FirstName": "Ryan15",
        "id": "eab7c3a8-8802-4f52-aabc-868997e85f21",
        "LastName": "Luur",
        "Restaurant": "Tasty Garden",
        "CreatedAt": 1577864194309
    },
    {
        "UpdatedAt": 1577864197694,
        "PartySize": 5,
        "PhoneNumber": "626-278-0357",
        "Status": {
            "called": 0,
            "seated": 0,
            "queued": 0
        },
        "FirstName": "Ryan25",
        "id": "11157164-9769-4f4e-be82-a1395e0b9a24",
        "LastName": "Luur",
        "Restaurant": "Tasty Garden",
        "CreatedAt": 1577864197694
    },
    {
        "UpdatedAt": 1577950996084,
        "PartySize": 89,
        "PhoneNumber": "626-279-0357",
        "Status": {
            "called": false,
            "seated": false,
            "queued": true
        },
        "FirstName": "Ryan99",
        "id": "42e931a4-b669-4f32-9379-6dec8762c267",
        "LastName": "Luus",
        "Restaurant": "Tasty Garden",
        "CreatedAt": 1577950996084
    }
    ]);

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

  //TODO: make request to update status in DB
  const handleCallClick = (index) => {
    //Remember to make copy of elements, not just assign to the var
    const newItems = [...tableItems];
    newItems[index] = {...tableItems[index],
        Status: {
            ...tableItems[index].Status,
            called: 1
        }
    }
    setTableItems(newItems);
  }

  //TODO: make request to update status in DB
  const handleSeatedClick = (index) => {
    //Remember to make copy of elements, not just assign to the var
    const newItems = [...tableItems];
    newItems[index] = {...tableItems[index],
        Status: {
            ...tableItems[index].Status,
            seated: 1
        }
    }
    setTableItems(newItems);
  }

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <h1 className={ classes.waitlistTitle }>Manage Your { restaurant } Waitlist</h1>
      <AdminWaitlistTable handleSeatedClick={handleSeatedClick} handleCallClick={ handleCallClick } tableItems={ tableItems }/>
    </Grid>
  );
}
