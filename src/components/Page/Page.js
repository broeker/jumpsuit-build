import React from 'react';
import PropTypes from 'prop-types';
//import GridList from '@material-ui/core/GridList';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
//import Img from 'gatsby-image';

const styles = theme => ({
  // custom CSS here ...
});

const Page = (props) => (
  <>
    <Typography variant="h4" paragraph>{props.title}</Typography>
    <Typography variant="body1" paragraph dangerouslySetInnerHTML={{ __html: props.body.processed }} />
  </>
);

Page.propTypes = {
  title: PropTypes.string.isRequired,
  created: PropTypes.instanceOf(Date),
  body: PropTypes.string,
  text: PropTypes.array,
};

export default withStyles(styles)(Page);