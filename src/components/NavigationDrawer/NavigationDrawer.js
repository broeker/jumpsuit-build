import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//import MailIcon from '@material-ui/icons/Mail';
//import AppsIcon from '@material-ui/icons/Apps';
import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'gatsby'
import Icon from '@mdi/react'
import { mdiDrupal } from '@mdi/js'
import { mdiDotsHorizontalCircle } from '@mdi/js'
import { mdiAccountCircle } from '@mdi/js'
import { mdiAccountBox } from '@mdi/js'
import { mdiFlash } from '@mdi/js'

import Typography from '@material-ui/core/Typography';



const styles = theme => ({
  top: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  hero: {
    fontSize: 14, 
  color: '#ffffff',
    
    },
    //backgroundImage: `url(${Image})`,
  header: {
    padding: theme.spacing.unit * 2,
  width: 320,
  backgroundColor: '#37474F', 
  },
  list: {
    width: 320,
  },
  foo: {
    color: '#ffffff',
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
            <ListItemIcon><mdiFlash /></ListItemIcon>
            <ListItemText>Drupal</ListItemText>
          </ListItem>
          </Link>  
        </List>
        <Divider />
      </div>
    );
    return (
      <div>
        <IconButton onClick={this.toggleDrawer('right', true)}><Icon path={mdiFlash} size={1.1} color="white"  /></IconButton>
        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
        
        <div className={classes.header}> 
          <Typography className={classes.hero} variant="subtitle1" paragraph>
          Hello. I write about Drupal, 
          Gatsby, and the jumpsuit lifestyle. You can learn more <Link className={classes.foo} to="/page/about-me">about me</Link> or start
          poking around below.
          </Typography>
        </div>
          

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