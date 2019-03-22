import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/Layout/Layout';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Page from '../components/Page/Page';
import moment from 'moment'
const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginTop: theme.spacing.unit * 12,
         flexGrow: 1,
    },
});

const pageTemplate = (props) => {
    const { classes } = props;
    const { nodePage: page } = props.data;

    return (
        <Layout>
       <Helmet
        title={page.title}
        meta={[
          {name: 'description', content: page.title},
        ]}
      />
      <div className={classes.root}>
        <Page
              title={page.title}
              created={moment(page.created).format('DD MMMM, YYYY')}
              body={page.body}
              content={page.relationships.field_content}
              media={page.relationships.field_hero.relationships.field_media_image}
          />
      </div>
      
    </Layout>
    )
};
export default withStyles(styles)(pageTemplate);

// The $drupal_id variable here is obtained from the "context" object passed into
// the createPage() API in gatsby-node.js.
//
// Also note the use of field name aliasing in the query. This is done to
// help normalize the shape of the recipe data.
export const query = graphql `
  query fooTemplate($slug: String!) {
    nodePage (fields: { slug: { eq: $slug } }) {
      title
      created
      changed
      relationships {
      field_hero {
          id
          relationships {
            field_media_image {
              id
              filename
                uri {
                  value
                  url
                }
                localFile {
                  publicURL
                  childImageSharp {
                    fluid {
                      aspectRatio
                      src
                      sizes
                      originalImg
                      originalName
                      presentationWidth
                      presentationHeight
                    }
                  }
                }
              }
            }
          }

      field_content {
        __typename
        ... on paragraph__text {
          id
          field_text {
            value
            format
            processed
          }
        }
        ... on paragraph__image {
          id
          relationships {
            field_image {
              relationships {
                field_media_image {
                  id
                  filename
                  uri {
                    value
                    url
                  }
                  localFile {
                    publicURL
                    childImageSharp {
                      fluid {
                        aspectRatio
                        src
                        sizes
                        originalImg
                        originalName
                        presentationWidth
                        presentationHeight
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      }
    }
  }
`;