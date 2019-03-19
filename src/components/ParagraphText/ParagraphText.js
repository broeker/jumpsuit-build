import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'gatsby'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
};

const ParagraphText = (props) => {
  const { classes } = props;

  return (
           <div>
           <Typography className={classes.pos} dangerouslySetInnerHTML={{ __html: props.text }} />
            </div>
  );
};

ParagraphText.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(ParagraphText);;