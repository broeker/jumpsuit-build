const pageQuery = `{
  pages: allNodePage 
   {
    edges {
      node {
         drupal_id
         title
         created
         fields {
          slug 
         }
          field_summary {
          processed
         }
        
        relationships {
        field_content {
        __typename
        ... on paragraph__text {
          id
          field_header
              field_text {
                processed
              }
        }
      }
        
      }



       }
    }
  }
}`

const postQuery = `{
  posts: allNodeBlog  {
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
          }
          created
        }
    }
  }
}`

const settings = { attributesToSnippet: [
  `title`,
  `field_summary.processed`,
  `field_header`,
  `relationships.field_content.field_text.processed`,
  
]}

/*
const flatten = arr =>
  arr.map(({ edges: { node, ...rest } }) => ({
    ...node,
    ...rest,
  }))
*/



const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest,
  }))

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => flatten(data.pages.edges),
    indexName: `Pages`,
    settings,
  },
  {
    query: postQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: `Posts`,
    settings,
  },
]

module.exports = queries