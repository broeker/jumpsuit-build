import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'gatsby'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Img from 'gatsby-image';

const styles = {
  image: {
    padding: 60,
  },
  caption: {
    fontSize: 14,
    color: '#666'
  }

};

const ParagraphImage = (props) => {
  const { classes } = props;

  return (
    <>
             <div className={classes.image}>
  {props.media.localFile &&
    <Img fluid={props.media.localFile.childImageSharp.fluid} />
  }
<div className={classes.caption}>
 {props.caption}
 </div>
 </div> 
 
 </>
  );
};

ParagraphImage.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(ParagraphImage);