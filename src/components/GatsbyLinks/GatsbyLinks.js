import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, Link, graphql } from "gatsby"
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

});

const GatsbyLinksWrapper = () => (
  <StaticQuery
    query={graphql`
      query {
        allGoogleSheetSheet1Row {
          edges {
            node {
              id
              title
              url
            }
          }
        }
      }
    `}
    render={data => <GatsbyLinks links={data.allGoogleSheetSheet1Row.edges} />}
  />
);

const GatsbyLinks = ({links}) => (

  <ul>
    {
      links.map(({ node: link }) => (
        <li key={link.id}>
          <Link to={link.url}>
            {link.title}
          </Link>
        </li>
      ))
    }
  </ul>
);

export default withStyles(styles)(GatsbyLinksWrapper);;