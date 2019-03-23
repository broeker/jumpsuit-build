import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'gatsby'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
	text: {
		lineHeight: 2.
	}
};

const ParagraphText = (props) => {
  const { classes } = props;

  return (
           <div>
            <Typography variant="headline" component="h3">
           {props.header}
           </Typography>
           
           <Typography className={classes.text} dangerouslySetInnerHTML={{ __html: props.text }} />
            </div>
  );
};

ParagraphText.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(ParagraphText);;