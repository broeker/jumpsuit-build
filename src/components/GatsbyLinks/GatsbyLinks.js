import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, Link, graphql } from "gatsby"
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/TableRow';

const styles = theme => ({

});


const GatsbyLinksWrapper = () => (
  <StaticQuery
    query={graphql`
      query {
        allGoogleSheetSitesRow (filter: {category: {eq: "Reference" } }) {
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
<Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat (g)</TableCell>
            <TableCell align="right">Carbs (g)</TableCell>
            <TableCell align="right">Protein (g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {links.map(({ node: link }) => (
            <TableRow key={link.id}>
              <TableCell component="th" scope="row">
                {link.title}
              </TableCell>
              <TableCell align="right">{link.url}</TableCell>
              <TableCell align="right">{link.description}</TableCell>
              <TableCell align="right">{link.category}</TableCell>
              <TableCell align="right">foo</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>

  <ul>
    {
      links.map(({ node: link }) => (
        <li key={link.id}>
          <Link to={link.url}>
            {link.title}
          </Link>

            {link.url}
        </li>
      ))
    }
  </ul>
  </>
);

export default withStyles(styles)(GatsbyLinksWrapper);;