import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import MailIcon from '@material-ui/icons/Mail';
//import AppsIcon from '@material-ui/icons/Apps';
import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'gatsby'
import Img from 'gatsby-image';
import Icon from '@mdi/react'
import { mdiDrupal } from '@mdi/js'
//import { mdiDotsHorizontalCircle } from '@mdi/js'
//import { mdiAccountCircle } from '@mdi/js'
//import { mdiAccountBox } from '@mdi/js'
import { mdiFlash } from '@mdi/js'

import Typography from '@material-ui/core/Typography';
import AvatarImage from '../AvatarImage/AvatarImage';

const styles = theme => ({
  top: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  hero: {
    fontSize: 14, 
  color: '#333',
    
    },
    //backgroundImage: `url(${Image})`,
  header: {
    padding: theme.spacing.unit * 2,
  width: 320,
  backgroundColor: '#fff', 
  },
  list: {
    width: 320,
  },
  avatar: {
    width: 64,
  },
  foo: {
    color: '#000',
  },
  button: {
    textDecoration: 'none',
  }

  
});

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
        <List >
          
       
          <Link className={classes.button} to={'/'}>
          <ListItem button key="drupal">
            <ListItemIcon><mdiDrupal /></ListItemIcon>
            <ListItemText>High Speed Racing</ListItemText>
          </ListItem>
          </Link>  
           <Link className={classes.button} to={'/'}>
          <ListItem button key="drupal">
            <ListItemIcon><mdiDrupal /></ListItemIcon>
            <ListItemText>Drupal</ListItemText>
          </ListItem>
          </Link>  
<Link className={classes.button} to={'/'}>
          <ListItem button key="drupal">
            <ListItemIcon><mdiDrupal /></ListItemIcon>
            <ListItemText>Gatsby</ListItemText>
          </ListItem>
          </Link>
<Link className={classes.button} to={'/'}>
          <ListItem button key="drupal">
            <ListItemIcon><mdiDrupal /></ListItemIcon>
            <ListItemText>React</ListItemText>
          </ListItem>
          </Link>
<Link className={classes.button} to={'/'}>
          <ListItem button key="drupal">
            <ListItemIcon><mdiDrupal /></ListItemIcon>
            <ListItemText>JAMstack</ListItemText>
          </ListItem>
          </Link>
 

        </List>
      </div>
    );

    return (
      <div>
        <IconButton onClick={this.toggleDrawer('right', true)}><Icon path={mdiFlash} size={1.1} color="white"  /></IconButton>
        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
       

<List className={classes.root}>
      <ListItem  className={classes.list} alignItems="flex-start">
        <ListItemAvatar>
        <Avatar>
        <AvatarImage />
        </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="hello world."
          secondary={
            <React.Fragment>
              <Typography component="span" className={classes.inline} color="textPrimary">
                I write about Drupal, 
          Gatsby, and the jumpsuit lifestyle. You can learn more <Link className={classes.foo} to="/page/about-me">about me</Link> or start
          poking around below.
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      </List>
        <Divider />

          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
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