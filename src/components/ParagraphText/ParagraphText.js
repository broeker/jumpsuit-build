import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
	 ...theme.mixins.gutters(),
	text: {
		lineHeight: 2.
	},
	subhead: {
	   fontSize: 30,
    fontWeight: 900,
    fontFamily: 'Montserrat',
    color: '#455A64',	
	}
});

const ParagraphText = (props) => {
  const { classes } = props;

  return (
           <div>
            <Typography className={classes.subhead} component="h3">
           {props.header}
           </Typography>
           
           <Typography className={classes.text} dangerouslySetInnerHTML={{ __html: props.text }} gutterTop />
            </div>
  );
};

ParagraphText.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(ParagraphText);;