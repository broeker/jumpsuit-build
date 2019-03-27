import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AvatarImage from '../AvatarImage/AvatarImage'
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
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
  changed: {
    color: '#333',
  },
   buttontext: {
  fontSize: 16,
 },
 dateline: {
  fontSize: 12,
  textAlign: 'right',
  color: '#666',
 }
});

const AuthorDetails = (props) => {
  const { classes } = props;

  return (
    <>
    <Grid container>
    <Grid item xs={12}>
            <div className={classes.demo}>
              <List>
                  <ListItem>
                    <ListItemAvatar>
                      <AvatarImage />
                    </ListItemAvatar>
                    <ListItemText classes={{ primary: classes.buttontext, secondary: classes.buttontext }} 
                      primary="Tim Broeker"
                      secondary="electric citizen"
                    />
                  </ListItem>
              </List>
            </div>
          </Grid>
          <Grid item xs={12} className={classes.dateline}>
            UPDATED: {props.changed}
          </Grid>

          </Grid>


    
    </> 
  );
};


export default withStyles(styles)(AuthorDetails);