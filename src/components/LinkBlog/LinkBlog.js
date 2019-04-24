import React from 'react';
import { StaticQuery, Link, graphql } from "gatsby"
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({

});


      //  allGoogleSheetSitesRow (filter: {category: {eq: "Reference" } }) {
const LinkBlogWrapper = () => (
  <StaticQuery
    query={graphql`
      query {
        allGoogleSheetSitesRow  {
          edges {
            node {
              id
              title
              url
              description
              category
            }
          }
        }
      }
    `}
    render={data => <GatsbyLinks links={data.allGoogleSheetSitesRow.edges} />}
  />
);


const GatsbyLinks = ({links}) => (

<>

    {
      links.map(({ node: link }) => (
        <div key={link.id}>
          <Link to={link.url}>
            <Typography variant="h6">{link.title}</Typography>
          </Link>

            {link.description}
            {link.url}
            </div>
      ))
    }
  </>
);

export default withStyles(styles)(LinkBlogWrapper);;