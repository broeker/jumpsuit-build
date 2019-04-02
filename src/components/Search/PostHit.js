import React, { Fragment } from "react"
import { Highlight, Snippet } from "react-instantsearch-dom"
import { Link } from "gatsby"

const PostHit = clickHandler => ({ hit }) => (
  <div>
    <Link to={`/blog/` + hit.slug} onClick={clickHandler}>
      <h3>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h3>
    </Link>

    <Snippet attribute="title" hit={hit} tagName="mark" />
  </div>
)

export default PostHit