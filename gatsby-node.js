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
    if (node.internal.type === `node__page`) {
        const slugFragment = transliteration.slugify(node.title)
        const slug = `/page/${slugFragment}/`
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
            allNodePage {
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
            allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___date] }
              limit: 1000
              ) {
                edges {
                  node {
                    frontmatter {
                    path
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
                // Create pages for each blog post.
                result.data.allNodePage.edges.forEach(({ node }) => {
                    createPage({
                        //component: blogTemplate,
                        path: node.fields.slug,
                        component: path.resolve(`./src/templates/page.js`), 
                        context: {
                            slug: node.fields.slug,
                            drupal_id: node.drupal_id,
                      },
                   })
                })


                const mdTemplate = path.resolve(`src/templates/mdpage.js`)

                result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                  createPage({
                    path: node.frontmatter.path,
                    component: mdTemplate,
                    context: {}, // additional data can be passed via context
                  })
                })
            

            })
        )
    })
}
