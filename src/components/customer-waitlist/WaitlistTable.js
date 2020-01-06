import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function WaitlistTable(props) {
  const { tableItems } = props;

  const useStyles = makeStyles({
    table: {
      width: "90%"
    },
    tableContainer: {
      width: "75%",
      margin: "15px"
    }
  });
  const classes = useStyles();

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
          {tableItems &&
            tableItems.map(entry => (
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
