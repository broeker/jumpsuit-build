import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Icon from '@mdi/react'
import { mdiHeart } from '@mdi/js'

import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby'
import AvatarImage from '../AvatarImage/AvatarImage';

import { mdiDrupal } from '@mdi/js'
import { mdiRocket } from '@mdi/js'
import { mdiReact } from '@mdi/js'
import { mdiMenu } from '@mdi/js'
import { mdiEmoticonNeutralOutline} from '@mdi/js'

import { mdiGraphql } from '@mdi/js'

import { mdiMaterialUi } from '@mdi/js'

const styles = {
  root: {
    fontSize: 10,
    color: 'red',
  },
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
  },
  icon: {
    padding: 0,
    margin: 0,
    lineHeight: 1,
    height: 24,
    fontSize: 10,
 },
 button: {
  fontSize: 14,
 },
 toggle: {
   opacity: '.6',
   '&:hover': {
        color: 'white',
      opacity: '1',
        }
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
      <>
      <div className={classes.list}>
        <List className={classes.root} >
          <ListItem button key={2}>
            <ListItemIcon><Icon className={classes.icon} path={mdiEmoticonNeutralOutline} size={1}/></ListItemIcon>
            <ListItemText classes={{ primary: classes.buttontext }} >Gatsby</ListItemText>
          </ListItem>
          <ListItem button key={3}>
            <ListItemIcon><Icon className={classes.icon} color="#0678be" path={mdiDrupal} size={1}/></ListItemIcon>
            <ListItemText  classes={{ primary: classes.buttontext }} primary="Drupal" />
          </ListItem>
          <ListItem button key={4}>
            <ListItemIcon><Icon className={classes.icon} color="#61dafb" path={mdiReact} size={1}/></ListItemIcon>
            <ListItemText classes={{ primary: classes.buttontext }} primary="React" />
          </ListItem>
          <ListItem button key={6}>
            <ListItemIcon><Icon className={classes.icon} color="#2196F3" path={mdiMaterialUi} size={1}/></ListItemIcon>
            <ListItemText classes={{ primary: classes.buttontext }} primary="Material UI" />
          </ListItem>
          <ListItem button key={7}>
            <ListItemIcon><Icon className={classes.icon} color="#2196F3" path={mdiGraphql} size={1}/></ListItemIcon>
            <ListItemText classes={{ primary: classes.buttontext }} primary="GraphQL" />
          </ListItem>
          <ListItem button key={1}>
            <ListItemIcon><Icon className={classes.icon} color="purple" path={mdiRocket} size={1}/></ListItemIcon>
            <ListItemText classes={{ primary: classes.buttontext }} primary="High Speed Racing" />
          </ListItem>
          <ListItem button key={5}>
            <ListItemIcon><Icon className={classes.icon} color="red" path={mdiHeart} size={1}/></ListItemIcon>
            <ListItemText classes={{ primary: classes.buttontext }} primary="Jumpsuit life" />
          </ListItem>
        </List>
      </div>
      </>
    );

        return (
      <>
      <IconButton onClick={this.toggleDrawer('left', true)}><Icon path={mdiMenu} size={1.1} color="white" className={classes.toggle}  /></IconButton>
      <Drawer anchor="left" open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
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
          Gatsby, and the jumpsuit lifestyle. You can learn more <Link className={classes.link} to="/about/me">about me</Link> or start
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
      </>
    );
  }
}

NavigationDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavigationDrawer);
