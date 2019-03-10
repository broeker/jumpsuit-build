import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Blog from '../components/Blog/Blog';
import moment from 'moment'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

const blogTemplate = (props) => {
 const { classes } = props; 
  const { nodeBlog: blog } = props.data;

  return (
    <Layout>
       <Helmet
        title={blog.title}
        meta={[
          {name: 'description', content: blog.title},
        ]}
      />
<Paper className={classes.root}>
        <Blog
              title={blog.title}
              created={moment(blog.created).format('DD MMMM, YYYY')}
              body={blog.body}
          />
      </Paper>
      
    </Layout>
  )
};
export default withStyles(styles)(blogTemplate);

// The $drupal_id variable here is obtained from the "context" object passed into
// the createPage() API in gatsby-node.js.
//
// Also note the use of field name aliasing in the query. This is done to
// help normalize the shape of the recipe data.
export const query = graphql`
  query BlogTemplate($slug: String!) {
    nodeBlog (fields: { slug: { eq: $slug } }) {
      title
      created
      changed
      body {
        processed
        summary
      }
    }
  }
`

//const BlogPost = ({ data }) => (
//    <Layout>
//        <article>
//            title={data.nodeBlog.title}
//            date={moment(data.nodeBlog.created).format('DD MMMM, YYYY')}
//            body=dangerouslySetInnerHTML={{__html: data.nodeBlog.body.processed}}
//            <h1>{data.nodeBlog.title}</h1>
//            <i><p className="publication-date">{moment(data.nodeBlog.created).format('DD MMMM, YYYY')}</p></i>
//            <span dangerouslySetInnerHTML={{__html: data.nodeBlog.body.processed}}></span>
//        </article>
//    </Layout>
//)


/**
export default Blogpost

export const query = graphql`
  query($slug: String!) {
    nodeBlog (fields: { slug: { eq: $slug } }) {
      title
      created
      changed
      body {
        processed
        summary
      }
    }
  }
`
*/