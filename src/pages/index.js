import React from "react"
import { graphql } from 'gatsby'
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogTeaser from "../components/blogteaser.js"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`jumpsuit`, `drupal`, `gatsby`,`react` ]} />
    <p>
        "Jumpsuits to me represent many diverse qualities from action and adventure to manual labor. Jumpsuits
        are worn by people who push the envelope like skydivers, downhill skiers, astronauts, and high
        speed racers. Also, people incarcerated in institutions that are full of life’s most dangerous
        criminals who made their own rules. The exquisite modern day jumpsuit embodies all of these qualities,
        fun, dangerous, sexy. Made for confident men of adventure, leisure, and excitement.”
    </p>
    <p><em>— Jeff Hilliard made in Los Angeles, CA</em></p>
      {data.allNodeBlog.edges.map((post) => (
          <BlogTeaser
              slug={post.node.fields.slug}
              key={post.node.id}
              title={post.node.title}
              created={post.node.created}
              summary={post.node.body.summary.length > 0 ? post.node.body.summary : post.node.body.processed.substring(0, 300)}
          />
      ) )}
    <p><Link to="/blog">See older posts</Link></p>
  </Layout>
)


export const query = graphql`
  query BlogPageQuery {
    allNodeBlog(limit: 3) {
      edges {
        node {
          fields {
            slug
          }
          id
          title
          body {
            processed
            summary
          }
          created
        }
      }
    }
  }
`

export default IndexPage
