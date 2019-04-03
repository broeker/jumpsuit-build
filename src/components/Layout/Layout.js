/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
import Navigation from '../Navigation/Navigation';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../withRoot';
import Footer from '../Footer/Footer'
import 'typeface-lalezar';
import "./Layout.css"
//import Header from "./header"
//import "./layout.css"

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
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {name: 'description', content: 'Sample'},
              {name: 'keywords', content: 'sample, something'},
            ]}
          >
            <html lang="en"/>
          </Helmet>
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withRoot(withStyles(styles)(Layout));