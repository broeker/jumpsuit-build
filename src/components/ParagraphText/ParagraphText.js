import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
	 ...theme.mixins.gutters(),
	subhead: {
	   fontSize: 30,
    fontWeight: 900,
    fontFamily: 'Montserrat',
    color: '#607D8B',	
	}
});

const ParagraphText = (props) => {
  const { classes } = props;

  return (
    <>
      <Typography className={classes.subhead} variant="h3">{props.header}</Typography>
      <Typography dangerouslySetInnerHTML={{ __html: props.text }} variant="body1" />
    </>
  );
};

export default withStyles(styles)(ParagraphText);;