import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import moment from 'moment'
import BlogCard from '../components/BlogCard/BlogCard'
import LinkBlog from '../components/LinkBlog/LinkBlog'
import jumpsuit from '../images/jumpsuit01.svg'
import JumpsuitTeaser from '../components/JumpsuitTeaser/JumpsuitTeaser'
import Game from '../components/Game/Game'
import 'typeface-roboto';

import Img from 'gatsby-image';

const styles = theme => ({
  inlineheader: {
    fontSize: 14,
    paddingLeft: theme.spacing.unit * 2,
    backgroundColor: theme.palette.primary.main,
  },
  imageone: {
    marginBottom: '2em',
  }
});

class IndexPage extends React.Component {
  renderElement() {
    const { classes } = this.props;
    const Home = () => <><img className={classes.img} alt="jumpsuit" src={jumpsuit} /></>
     if (  this.props.data  ) {
      return (
        <div>
        <Grid container spacing={24}>
          <Grid item lg={8}>
          <Grid container spacing={24}>
         { this.props.data.allNodeBlog.edges.map(({ node: blog }, key) => {

          var grid; 

          if (key === 0) {
            grid=12
          } else {
            grid=6
          }

          var media;
          if (blog.relationships.field_hero) {
            media = blog.relationships.field_hero.relationships.field_media_image.localFile.childImageSharp.fluid
          } else {
            media = ''
          }


          return (
            <>

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
            </>
            );
          }
          )
       }
      </Grid>
          </Grid> 
          <Grid item lg={4}>
           <JumpsuitTeaser />
                        <Img fluid={this.props.data.imageTwo.childImageSharp.fluid} />

            <LinkBlog />

          </Grid>
          <Grid item lg={12}>
            
          <div className={classes.inlineheader}>JUMPSUIT 101</div>
            <Home />
          </Grid>
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

export default withStyles(styles, { withTheme: true })(IndexPage);

export const query = graphql`
  query {
   imageOne: file(relativePath: { eq: "doit.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
   } 
    imageTwo: file(relativePath: { eq: "rocket.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    } 
    safetyfirst: file(relativePath: { eq: "safety_first.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allNodeBlog(
      sort: {
        fields: [changed], order:DESC
      }
      limit: 3
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