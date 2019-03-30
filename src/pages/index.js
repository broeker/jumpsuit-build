import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import moment from 'moment'
import BlogCard from '../components/BlogCard/BlogCard';

const styles = theme => ({
  root: {
     flexGrow: 1,
  },
  card: {
  }
});



class IndexPage extends React.Component {
  renderElement() {
     const { classes } = this.props;
    if (  this.props.data  ) {
      return (
        <div>
        <Grid container spacing={24}>
         { this.props.data.allNodeBlog.edges.map(({ node: blog }, key) => {

          var grid; 

          if (key === 0) {
            grid=8
          } else {
            grid=4
          }

          var media;
          if (blog.relationships.field_hero) {
            media = blog.relationships.field_hero.relationships.field_media_image.localFile.childImageSharp.fluid
          } else {
            media = ''
          }


          return (
            <Grid className={classes.card} item key={blog.title} lg={grid}>
              <BlogCard
                title={blog.title}
                summary={blog.summary.processed}
                category={blog.relationships.category[0].name}
                path={blog.fields.slug}
                media={media}
                changed={moment(blog.changed).format('MMMM DD, YYYY')}
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