import React from 'react';
import PropTypes from 'prop-types';
//import GridList from '@material-ui/core/GridList';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Img from 'gatsby-image';
import BlogList from '../BlogList/BlogList';

const styles = theme => ({
	// custom CSS here ...
});

const Blog = (props) => (
<>
   <div style={{width:300}}>
  {props.media.localFile &&
    <Img fluid={props.media.localFile.childImageSharp.fluid} />
  }

            </div>
              <Typography variant="h6" color="textSecondary">
         {props.category}
        </Typography>
             <Typography variant="h4" paragraph>{props.title}</Typography>
            {props.created}
            <Typography variant="body1" paragraph dangerouslySetInnerHTML={{ __html: props.body.processed }} />
     
 
     <List>
    {props.tags &&
    <ListItem>
      <ListItemText primary="Tags" secondary={props.tags.map(item => item.name)}/>
    </ListItem>
    }   
    </List>
        <Typography variant="subtitle1">Try another one:</Typography>
    <BlogList />
     </>
);

Blog.propTypes = {
  title: PropTypes.string.isRequired,
  created: PropTypes.instanceOf(Date),
  body: PropTypes.string,
  tags: PropTypes.array,
  category: PropTypes.string.isRequired,
};

export default withStyles(styles)(Blog);