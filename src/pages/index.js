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
import 'typeface-roboto';

import Img from 'gatsby-image';

class IndexPage extends React.Component {
  renderElement() {
     if (  this.props.data  ) {
      return (
        null
      );
    }
  }
  
  render() {
    return ( 
      <>
      <Layout>
        fook
      </Layout>
      </>
    )
  }
}

export default IndexPage;

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