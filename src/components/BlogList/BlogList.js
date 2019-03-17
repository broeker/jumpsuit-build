import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, Link, graphql } from "gatsby"
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

});

const BlogListWrapper = () => (
  <StaticQuery
    query={graphql`
      query {
        allNodeBlog(limit: 3) {
          edges {
            node {
              drupal_id,
              title,
              fields {
                slug 
              }              
            }
          }
        }
      }
    `}
    render={data => <BlogList blogs={data.allNodeBlog.edges} />}
  />
);

const BlogList = ({blogs}) => (

  <ul>
    {
      blogs.map(({ node: blog }) => (
        <li key={blog.drupal_id}>
          <Link to={blog.fields.slug}>
            {blog.title}
          </Link>
        </li>
      ))
    }
  </ul>
);

BlogList.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        drupal_id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
      }).isRequired,
    }),
  ).isRequired,
};



export default withStyles(styles)(BlogListWrapper);