
  
import React from 'react'
import PropTypes from 'prop-types';
import { graphql } from 'gatsby'

import Layout from '../components/Layout/Layout'
import BlogCard from '../components/BlogCard/BlogCard';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography';

import moment from 'moment'

const foobar = '#ffffff'; // #F44336
const blu = '#29b6f6';

const styles = theme => ({
  top: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  hero: {
    fontSize: 14, 
    padding: theme.spacing.unit * 3,
    //backgroundImage: `url(${Image})`,
    backgroundColor: blu,
    marginTop: theme.spacing.unit * 10,
    color: foobar, 
  },
});

const IndexPage = (props) => {
  const {classes} = props;
  const isEditMode = 'EDIT';

  return (
    <Layout>
        


        <Grid container spacing={24}>
        {
          props.data.allNodeBlog.edges.map(({ node: blog }, key) => (
           <> 

                {(key === 0) ? 
                    <Grid item key={blog.title} lg={8}>
              <BlogCard
                title={blog.title}
                summary={blog.summary.processed}
                category={blog.relationships.category[0].name}
                path={blog.fields.slug}
                media={blog.relationships.media.relationships.field_media_image}
                changed={moment(blog.changed).format('DD MMMM, YYYY')}
              />
            </Grid>
                :
             <Grid item key={blog.title} lg={4}>
              <BlogCard
                title={blog.title}
                summary={blog.summary.processed}
                category={blog.relationships.category[0].name}
                path={blog.fields.slug}
                media={blog.relationships.media.relationships.field_media_image}
                changed={moment(blog.changed).format('DD MMMM, YYYY')}
              />
            </Grid>
                }


             </>
          ))
        }
        </Grid>
       
    </Layout>
  );
};

IndexPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IndexPage);

       
// The result of this GraphQL query will be injected as props.data into the
// IndexPage component.
export const query = graphql`
  query {
    allNodeBlog(
      sort: {
        fields: [changed], order:DESC
      }
      ) 
      {
      edges {
        node {
          fields {
            slug 
          }
          id
          title
          created
          changed
          field_featured
          summary: field_summary {
            processed
          }
          relationships {
            category: field_blog_category {
              name,
            },
            tags: field_tags {
            name,
            },
            media: field_hero {
              relationships {
                field_media_image {
                   filename
                    uri {
                      value
                      url
                      }
                 localFile {
                    publicURL
                    childImageSharp {
                      fluid(maxWidth: 470, maxHeight: 353) {
                      ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            },
          }
          created
        }
      }

    }
  }
`;