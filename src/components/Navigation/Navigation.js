import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TemporaryDrawer from '../TemporaryDrawer/TemporaryDrawer'

import 'typeface-open-sans';
const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menu: {
    display: 'flex',
  },
  menuButton: {
    marginRight: '20px',
  },
  logo: {
    fontFamily: 'Open Sans',
    fontWeight: 800, 
    color: 'white',
    flexGrow: 1,
   underline: 0,
      '&:hover': {
          color: 'black',
      }
  },
    active: {
        backgroundColor: 'rgba(255, 255, 255, 0.12)',
    },
      myTextStyle: {
      
      color: 'white',
    textDecoration: 'none',
        '&:hover': {
        color: '#e8e8e8'

    }
     }
};

function Navigation(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="relative" color="primary" height="160">
        <Toolbar>
          
            <Typography variant="h6" className={classes.logo}> <Link className={classes.myTextStyle}
            style={{ textDecoration: 'none', fontFamily: 'Open Sans' }} to={"/"}>{props.siteTitle}</Link></Typography>
          <div className={classes.menu}>
              <TemporaryDrawer 
              />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);