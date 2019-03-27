  import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types';
import Layout from '../components/Layout/Layout'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import moment from 'moment'
import Typography from '@material-ui/core/Typography';
import BlogCard from '../components/BlogCard/BlogCard';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
     flexGrow: 1,
  }
});



class IndexPage extends React.Component {
  renderElement() {
    if (  this.props.data  ) {
      return (
        <div>
        <Grid container spacing={24}>
         { this.props.data.allNodeBlog.edges.map(({ node: blog }, key) => {

          if (blog.title) {
            var title = 'fook'
          } else {
            var title = "snook"
          }

          if (key === 0) {
            var grid=8
          } else {
            var grid=4
          }

          var media;
          if (blog.relationships.field_hero) {
            media = blog.relationships.field_hero.relationships.field_media_image.localFile.childImageSharp.fluid
          } else {
            media = ''
          }


          return (
            <Grid item key={blog.title} lg={grid}>
              <BlogCard
                title={blog.title}
                summary={blog.summary.processed}
                category={blog.relationships.category[0].name}
                path={blog.fields.slug}
                media={media}
                changed={moment(blog.changed).format('DD MMMM, YYYY')}
              />
            </Grid>
            );
          }
          )
       }
      </Grid>
        </div>
      );
    }
  }
  
  render() {
    const {classes} = this.props;
    return ( 
       <Layout>
        <Grid container spacing={24}>
      <>
      { this.renderElement() }
      </>
      </Grid>
      </Layout>
    )
  }
}

export default withStyles(styles)(IndexPage);

export const query = graphql`
  query {
    allNodeBlog(
      sort: {
        fields: [changed], order:DESC
      }
      limit: 5
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
            field_hero {
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
            },
          }
          created
        }
      }

    }
  }
`;