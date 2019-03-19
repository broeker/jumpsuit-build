import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'gatsby'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
};

const PageContent = (props) => {
  const { classes } = props;

  return (
        <Typography variant="headline" component="h2">
          { /** <h3><Link to={props.path}>{props.title}</Link></h3> */ }
          <h4>{props.title}</h4>
        </Typography>
  );
};

PageContent.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  media: PropTypes.object.isRequired,
};

export default withStyles(styles)(BlogCard);