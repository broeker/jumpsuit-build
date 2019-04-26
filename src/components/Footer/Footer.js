import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'; 
import Typography from '@material-ui/core/Typography';

const year = new Date().getFullYear();

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.secondary.main,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 8,
    color: '#fff',
    marginTop: theme.spacing.unit * 12,
  },
  quote: {

    color: '#fff',
    fontSize: 18,
    fontFamily: theme.custom.logofont,
    paddingLeft: theme.spacing.unit * 2,
  },
  footernav: {
    color: theme.custom.TextSecondary,
    paddingRight: theme.spacing.unit * 2,
     textAlign: "right",
     fontSize: 14,
  },
  footerlink: {
    color: theme.custom.TextSecondary,
  }

});


function Footer(props) {
  const { classes } = props;

  return (
           <div className={classes.footer}>
            <Grid container spacing={0}>
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

  );
}

export default withStyles(styles)(Footer)