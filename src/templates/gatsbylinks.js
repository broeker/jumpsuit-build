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

const gatsbylinksTemplate = (props) => {
    const { classes } = props;
    const { allGoogleSheetSheet1Rowg: link } = props.data;

    return (
        <Layout className={classes.Root}>
      <Paper className={classes.root}>
        <GatsbyLink
              title={link.title}
          />
      </Paper>
      
    </Layout>
    )
};

export default withStyles(styles)(gatsbylinksTemplate);

// The $drupal_id variable here is obtained from the "context" object passed into
// the createPage() API in gatsby-node.js.
//
// Also note the use of field name aliasing in the query. This is done to
// help normalize the shape of the recipe data.
export const query = graphql `
  query {
        allGoogleSheetSitesRow {
          edges {
            node {
              id
              title
              url
            }
          }
        }
      }
`;