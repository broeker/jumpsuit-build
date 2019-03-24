import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types';
import Layout from '../components/Layout/Layout'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import moment from 'moment'

import BlogCard from '../components/BlogCard/BlogCard';

const styles = theme => ({
  root: {
     flexGrow: 1,
  }
});
const IndexPage = (props) => {
  const {classes} = props;
  const isEditMode = 'EDIT';

  return (
    <Layout>
        


        <Grid container spacing={24}>
        {
          props.data.allNodeBlog.edges.map(({ node: blog }, key) => (
           <React.Fragment key={blog.id}>

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

          </React.Fragment>
          
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
            format
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