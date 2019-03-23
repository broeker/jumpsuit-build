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
import Grid from '@material-ui/core/Grid'; 
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link'
import 'typeface-lalezar';

//import Header from "./header"
//import "./layout.css"
const year = new Date().getFullYear();
const styles = theme => ({
  root: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
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
  footer: {
    backgroundColor: '#1976d2',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 8,
    color: '#ffffff',
    marginTop: theme.spacing.unit * 12,
  },
  quote: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Baloo Bhaina',
    paddingLeft: theme.spacing.unit * 2,
  },
  footernav: {
    color: '#fff',
    paddingLeft: theme.spacing.unit * 2,
     textAlign: "right",
     fontSize: 14,
  },
  footerlink: {
    color: '#fff',
  }

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
              slogan={data.site.siteMetadata.slogan}
              />
            <div className={classes.main}>
            <main>
              {children}
            </main>
            </div>
          </div>
            <div className={classes.footer}>
<Grid container spacing={24} sm={12} md={12} lg={12}>
  <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
         <Typography className={classes.quote} paragraph>
        "Jumpsuits to me represent many diverse qualities from action and adventure to manual labor. Jumpsuits are worn by people who push the envelope like skydivers, downhill skiers, astronauts, and high speed racers. Also, people incarcerated in institutions that are full of life’s most dangerous criminals who made their own rules."
 — Jeff Hilliard made in Los Angeles, CA
      </Typography>
    </Grid>
  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
  <Typography className={classes.footernav}>
         &copy; {year} Citizen Tim @ <a className={classes.footerlink} href="https://www.electriccitizen.com">Electric Citizen</a>
      </Typography>
        <Typography className={classes.footernav}>
         powered by <a className={classes.footerlink} href="https://www.drupal.org">Drupal 8</a> and <a className={classes.footerlink} href="https://www.gatsbyjs.org">Gatsby</a>.

      </Typography>
  
  </Grid>
</Grid>

          </div>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withRoot(withStyles(styles)(Layout));