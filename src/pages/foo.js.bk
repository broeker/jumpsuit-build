import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"





export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>Hello world</div>


 {data.nodePage.relationships.field_content.map((item,key) => (

                
                <div key={key}>
                <div>{item.id}</div>
                <div>{item.__typename}</div>
                </div>
            ))}



    </Layout>
  )
}

export const query = graphql`
  query  {
    nodePage {
      title
      created
      changed
      body {
        processed
        summary
      },
      field_foo,
      relationships {
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