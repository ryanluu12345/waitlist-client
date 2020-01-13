import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import PhoneRoundedIcon from "@material-ui/icons/PhoneRounded";
import EventSeatRoundedIcon from "@material-ui/icons/EventSeatRounded";

export default function AdminWaitlistTable(props) {
  const { isLoading, tableItems, handleCallClick, handleSeatedClick } = props;

  const useStyles = makeStyles({
    table: {
      width: "90%"
    },
    tableContainer: {
      width: "75%",
      margin: "15px"
    },
    greenIcon: {
      color: "#238823"
    },
    redIcon: {
      color: "#d2222d"
    },
    greenBack: {
      background: "#90ee90"
    }
  });
  const classes = useStyles();

  return (
    <TableContainer className={classes.tableContainer} component={Paper}>
      <Table align="center" className={classes.table} aria-label="simple table">
        <TableHead>
          {!isLoading && (
            <TableRow>
              <TableCell align="center">Call</TableCell>
              <TableCell align="center">Mark as Seated</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Party Size</TableCell>
              <TableCell align="center">Phone Number</TableCell>
              <TableCell align="center">Called</TableCell>
              <TableCell align="center">Seated</TableCell>
            </TableRow>
          )}
        </TableHead>
        <TableBody>
          {tableItems &&
            tableItems.map((entry, index) => (
              <TableRow
                className={
                  entry.Status.seated && entry.Status.called
                    ? classes.greenBack
                    : ""
                }
                key={index}
              >
                <TableCell align="center">
                  <PhoneRoundedIcon
                    onClick={() => handleCallClick(index, entry.id)}
                  />
                </TableCell>
                <TableCell align="center">
                  <EventSeatRoundedIcon
                    onClick={() => handleSeatedClick(index, entry.id)}
                  />
                </TableCell>
                <TableCell align="center">
                  {entry.FirstName + " " + entry.LastName}
                </TableCell>
                <TableCell align="center">{entry.PartySize}</TableCell>
                <TableCell align="center">{entry.PhoneNumber}</TableCell>
                <TableCell align="center">
                  {entry.Status.called ? (
                    <CheckRoundedIcon className={classes.greenIcon} />
                  ) : (
                    <CloseRoundedIcon className={classes.redIcon} />
                  )}
                </TableCell>
                <TableCell align="center">
                  {entry.Status.seated ? (
                    <CheckRoundedIcon className={classes.greenIcon} />
                  ) : (
                    <CloseRoundedIcon className={classes.redIcon} />
                  )}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
