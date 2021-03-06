import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import NavigationDrawer from '../NavigationDrawer/NavigationDrawer'
import Headroom from "react-headroom"

import 'typeface-roboto';
import 'typeface-baloo-bhaina';

import Search from "../Search"

const searchIndices = [
  { name: `Pages`, title: `Pages`, hitComp: `PageHit` },
  { name: `Posts`, title: `Blog Posts`, hitComp: `PostHit` },
]

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '6em', 
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
    fontFamily: 'Baloo Bhaina',
    fontWeight: 600, 
    fontSize: 30,
    color: 'blue',
    flexGrow: 1,
    marginTop: 8,
    marginLeft: 6,
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
      opacity: '.6',
      textDecoration: 'none',
      '&:hover': {
        color: 'white',
      opacity: '1',
        }
     },
     headroom: {
      marginBottom: '3em',
     },
     slogan: {
       fontWeight: 700,
        color: 'white',
        opacity: '1',
        paddingRight: '1em',
     }
     });

function Navigation(props) {
  const { classes } = props;

  return (
    
      <Headroom className={classes.headroom}>
      <AppBar position="static" color="primary">
        <Toolbar>
        <NavigationDrawer 
          />
        <Typography variant="h6" className={classes.logo}> <Link className={classes.myTextStyle}
          style={{ textDecoration: 'none', fontFamily: 'Baloo Bhaina' }} to={"/"}>{props.siteTitle}</Link>
        </Typography>
        <Search collapse indices={searchIndices} />
        </Toolbar>
      </AppBar>
    </Headroom>
  );
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);