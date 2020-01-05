import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function WaitlistTable() {
  const useStyles = makeStyles({
    table: {
      width: '90%',
    },
    tableContainer: {
      width: '75%',
      margin: '15px'
    }
  });
  const classes = useStyles();
  const data = {
    "Items": [
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
    ],
    "Count": 5,
    "ScannedCount": 5
}

  return (
    <TableContainer className={classes.tableContainer} component={Paper}>
      <Table align="center" className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Party Size</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.Items.map(entry => (
            <TableRow key={entry.id}>
              <TableCell align="center">{entry.FirstName}</TableCell>
              <TableCell align="center">{entry.PartySize}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}