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
  text: {
    lineHeight: 2.
  },
  subhead: {
    fontSize: 30,
    fontWeight: 900,
    fontFamily: 'Montserrat',
    color: '#607D8B', 
  },
 byline: {
  fontSize: 14,
  fontWeight: 500,
  color: '#666',
  lineHeight: 1.3,
  textDecoration: 'none',
 },
 dateline: {
  fontSize: 12,
  color: '#666',
 },
 title: {
  fontSize: 12,
  color: '#666',
  textDecoration: 'none',
 },
 authordetails: {
 }
});

const AuthorDetails = (props) => {
  const { classes } = props;

  return (
    <>
    <Grid container className={classes.authordetails}>
      <Grid item xs={12}>
        <div className={classes.demo}>

          <List>
            <ListItem>
              <ListItemAvatar>
                <AvatarImage />
              </ListItemAvatar>
              <ListItemText classes={{ primary: classes.byline, secondary: classes.title }} 
                primary="Tim Broeker"
                     secondary={
                    <React.Fragment>
                    {' Technical director, Electric Citizen'}
                    Updated: {props.changed}
                    </React.Fragment>
                    }
              />
            </ListItem>
          </List>

            <Typography className={classes.dateline}></Typography>
          </div>
        </Grid>
      </Grid>
      </> 
    );
  };


export default withStyles(styles)(AuthorDetails);