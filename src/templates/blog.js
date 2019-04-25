import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout'
import { withStyles } from '@material-ui/core/styles';
import Blog from '../components/Blog/Blog';
import moment from 'moment'

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        flexGrow: 1,
    },
});

const blogTemplate = (props) => {
    const { classes } = props;
    const { nodeBlog: blog } = props.data;

           var media;
          if (blog.relationships.field_hero) {
            media = blog.relationships.field_hero.relationships.field_media_image
          } else {
            media = ''
          }

    return (
        <Layout className={classes.Root}>
       <div className={classes.root}>
        <Blog
              title={blog.title}
              changed={moment(blog.changed).format('DD MMMM, YYYY')}
              summary={blog.summary.processed}
              content={blog.relationships.field_content}
              media={media}
              category={blog.relationships.category[0].name}
          />
      </div>
    </Layout>
    )
};
export default withStyles(styles)(blogTemplate);

// The $drupal_id variable here is obtained from the "context" object passed into
// the createPage() API in gatsby-node.js.
//
// Also note the use of field name aliasing in the query. This is done to
// help normalize the shape of the recipe data.
export const query = graphql `
  query blogTemplate($slug: String!) {
    nodeBlog (fields: { slug: { eq: $slug } }) {
      drupal_id
      title
      created
      changed
      summary: field_summary {
        processed
      }
      relationships {
        category: field_blog_category {
          name,
        }
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
                     fluid(
                      maxHeight: 548, 
                      maxWidth: 1280, 
                      ) 
                    {
                     ...GatsbyImageSharpFluid
                      aspectRatio,
                      presentationWidth,
                      presentationHeight,
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
          field_header
          field_text {
            value
            format
            processed
          }
        }
        ... on paragraph__image {
          id
          field_caption {
              format
              value
              processed
            }
          relationships {
            field_single_image {
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