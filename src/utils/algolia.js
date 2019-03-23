const pageQuery = `{
  pages: allNodePages 
   {
    edges {
      node {
                  drupal_id
                  title
                  created
                  fields {
                   slug 
                  }
                }
    }
  }
}`

const postQuery = `{
  posts: allNodeBlog  {
    edges {
      node {
                  drupal_id
                  title
                  created
                  fields {
                   slug 
                  }
                }
    }
  }
}`

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest,
  }))
const settings = { attributesToSnippet: [`excerpt:20`] }

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