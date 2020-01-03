import React from 'react';
import { useParams } from 'react-router';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: '10px',
    maxWidth: 600,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function CustomerWaitlist() {
  const { restaurant } = useParams();
  
  return (
    <div>
      <h1> Customer Waitlist for: {restaurant} </h1>
      <Button variant="contained" color="primary">
        Join the Waitlist
      </Button>
      <FolderList />
    </div>
  );
}

// Todo: refactor to loop
// Todo: refactor to include waitlist information
function FolderList() {
  const classes = useStyles();

  return (
    <Grid container justify = "center">
      <List className={classes.root}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Work" secondary="Jan 7, 2014" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
      </List>
    </Grid>
  );
}
