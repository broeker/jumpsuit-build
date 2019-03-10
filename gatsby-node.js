//import { paginate, createPagePerItem } from "gatsby-awesome-pagination";
//const paginate = require('gatsby-awesome-pagination')

const path = require(`path`)
const transliteration = require('transliteration')

// Create a slug for each blog post and set it as a field on the node.
exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `node__blog`) {
        const slugFragment = transliteration.slugify(node.title)
        const slug = `/blog/${slugFragment}/`
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions

    return new Promise((resolve, reject) => {
        //const blogPost = path.resolve(`src/templates/blog.js`)

        //const blogIndex = path.resolve(`src/templates/blogindex.js`)

        // Query for blog nodes to use in creating pages.
        resolve(
            graphql(
                `
          {
            allNodeBlog {
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
          }
        `
            ).then(result => {
                if (result.errors) {
                    reject(result.errors)
                }
                
                // Create pages for each blog post.
                result.data.allNodeBlog.edges.forEach(({ node }) => {
                    createPage({
                        //component: blogTemplate,
                        path: node.fields.slug,
                        component: path.resolve(`./src/templates/blog.js`), 
                        context: {
                            slug: node.fields.slug,
                            drupal_id: node.drupal_id,
                      },
                   })
                })

                /**
                // Get an array of posts from the query result
                //const blogPosts = _.get(result, "data.allNodeBlog");

                // Create the blog index pages like `/blog`, `/blog/2`, `/blog/3`, etc.
                // The first page will have 3 items and each following page will have 10
                // blog posts and a link to the next and previous pages.
                paginate({
                    createPage,
                    items: blogPosts,
                    component: blogIndex,
                    perPage: 2,
                    itemsPerFirstPage: 2,
                    pathPrefix: "/blog"
                });

                // Create one page per blog post, with a link to the previous and next
                // blog posts.
                createPagePerItem({
                    createPage,
                    items: blogPosts,
                    component: blogPost,
                    itemToPath: "node.fields.slug",
                    itemToId: "node.id"
                });
                */

                
            })
        )
    })
}
