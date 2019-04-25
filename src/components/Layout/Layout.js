/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Navigation from '../Navigation/Navigation';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../withRoot';
import Footer from '../Footer/Footer'
import 'typeface-lalezar';
import "./Layout.css"

const styles = theme => ({
  root: {
    width: 'auto',
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: '100%', 
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  main: {
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100, 
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});

const Layout = (props) => {
const {children, classes} = props;

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              slogan
            }
          }
        }
      `}
      render={data => (
        <>
            <html lang="en"/>
          <div className={classes.root}>
            <Navigation 
              siteTitle={data.site.siteMetadata.title}
              siteSlogan={data.site.siteMetadata.slogan}
              />
            <div className={classes.main}>
            <main>
              {children}
            </main>
            </div>
          </div>
          <Footer />
        </>
    )}
    />
  )
}

export default withRoot(withStyles(styles)(Layout));