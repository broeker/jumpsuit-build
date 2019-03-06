import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'

const BlogTeaser = ( {title, created, summary, slug} ) => (
    <div className="blog--teaser">
        <Link to={slug}>
            <h2>{title}</h2>
        </Link>

        <i><p className="publication-date">{moment(created).format('DD MMMM, YYYY')}</p></i>
        <p>{summary}</p>
    </div>
)

export default BlogTeaser

