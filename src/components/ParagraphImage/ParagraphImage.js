import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'gatsby'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Img from 'gatsby-image';

const styles = {
};

const ParagraphImage = (props) => {
  const { classes } = props;

  return (
             <div>
  {props.media.localFile &&
    <Img fluid={props.media.localFile.childImageSharp.fluid} />
  }

            </div>
  );
};

ParagraphImage.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(ParagraphImage);