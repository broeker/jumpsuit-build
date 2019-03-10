import React from 'react';
import PropTypes from 'prop-types';
//import GridList from '@material-ui/core/GridList';
//import List from '@material-ui/core/List';
//import ListItem from '@material-ui/core/ListItem';
//import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
//import { withStyles } from '@material-ui/core/styles';


const Blog = (props) => (
            <div>
            <h2>{props.title}</h2>
            {props.created}
            <Typography variant="body1" paragraph dangerouslySetInnerHTML={{ __html: props.body.processed }} />
            </div>
);

Blog.propTypes = {
  title: PropTypes.string.isRequired,
  created: PropTypes.instanceOf(Date),
  body: PropTypes.string,
};

export default Blog;


