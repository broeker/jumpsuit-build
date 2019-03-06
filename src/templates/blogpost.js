import { graphql } from "gatsby"
import moment from 'moment'
import React from "react"

import Layout from "../components/layout"

const Blogpost = ({ data }) => (
    <Layout>
        <article>
            <h1>{data.nodeBlog.title}</h1>
            <i><p className="publication-date">{moment(data.nodeBlog.created).format('DD MMMM, YYYY')}</p></i>
            <span dangerouslySetInnerHTML={{__html: data.nodeBlog.body.processed}}></span>
        </article>
    </Layout>
)
export default Blogpost

export const query = graphql`
  query($slug: String!) {
    nodeBlog (fields: { slug: { eq: $slug } }) {
      title
      created
      changed
      body {
        processed
        summary
      }
    }
  }
`
