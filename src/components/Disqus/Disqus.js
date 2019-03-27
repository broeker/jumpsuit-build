import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AvatarImage from '../AvatarImage/AvatarImage'
import Grid from '@material-ui/core/Grid';
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
  }
});

const Disqus  = (props) => {
  const { classes } = props;

  return (
    <>
<div id="disqus_thread"></div>
}
      </>                      
  );
};


export default withStyles(styles)(Disqus);