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
         summary: field_summary {
          processed
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

const settings = { attributesToSnippet: [`*:20`] }

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