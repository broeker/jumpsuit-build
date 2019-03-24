import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem'
;

import Avatar from '@material-ui/core/Avatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Icon from '@mdi/react'

import { mdiFlash } from '@mdi/js'

import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby'
import AvatarImage from '../AvatarImage/AvatarImage';

//import { mdiDrupal } from '@mdi/js'


const styles = {
  list: {
    width: 320,

    fontSize: 16,
  },
  fullList: {
    width: 'auto',
  },
  link: {
    color: '#000',
  },
  inline: {
    fontSize: 16,
  }
};

class NavigationDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText secondary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </div>
    );

        return (
      <div>
        <IconButton onClick={this.toggleDrawer('right', true)}><Icon path={mdiFlash} size={1.1} color="white"  /></IconButton>
        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
          <List className={classes.root}>
      <ListItem  className={classes.list} alignItems="flex-start">
        <ListItemAvatar>
        <Avatar>
        <AvatarImage />
        </Avatar>
        </ListItemAvatar>
        <ListItemText
          className={classes.inline} primary="hello world."
          secondary={
            <React.Fragment>
              <Typography component="span" className={classes.inline} color="textPrimary">
                I write about Drupal, 
          Gatsby, and the jumpsuit lifestyle. You can learn more <Link className={classes.link} to="/page/the-jumpsuit-lifestyle-in-america">about me</Link> or start
          poking around below.
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      </List>
        <Divider />
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

NavigationDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavigationDrawer);
