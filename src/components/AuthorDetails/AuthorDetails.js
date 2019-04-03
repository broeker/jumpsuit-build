import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AvatarImage from '../AvatarImage/AvatarImage'
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
   ...theme.mixins.gutters(),
  byline: {
    fontSize: 14,
    fontWeight: 500,
    color: theme.custom.secondarytext,
    lineHeight: 1.3,
    textDecoration: 'none',
  },
 dateline: {
  fontSize: 14,
  color: theme.custom.secondarytext,
 },
 title: {
  fontSize: 12,
  color: theme.custom.secondarytext,
  textDecoration: 'none',
 },
});

const AuthorDetails = (props) => {
  const { classes } = props;

  return (
    <>
    <Grid container>
      <Grid item xs={12}>
          <List>
            <ListItem>
              <ListItemAvatar>
                <AvatarImage />
              </ListItemAvatar>
              <ListItemText classes={{ primary: classes.byline, secondary: classes.title }} 
                primary="Tim Broeker"
                secondary={
                  <React.Fragment>
                    {'Technical director, Electric Citizen '}
                    <div>Updated: {props.changed}</div>
                    </React.Fragment>
                    }
                  />
            </ListItem>
          </List>
          <Typography className={classes.dateline}></Typography>
        </Grid>
      </Grid>
      </> 
    );
  };

  export default withStyles(styles)(AuthorDetails);