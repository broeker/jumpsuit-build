import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'; 
import Typography from '@material-ui/core/Typography';

const year = new Date().getFullYear();


function Footer(props) {
  const { classes } = props;

  return (
            <Grid container spacing={0}>
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
              <Typography paragraph>
              "Jumpsuits to me represent many diverse qualities from action and adventure to manual labor. Jumpsuits are worn by people who push the envelope like skydivers, downhill skiers, astronauts, and high speed racers. Also, people incarcerated in institutions that are full of life’s most dangerous criminals who made their own rules."
              — Jeff Hilliard made in Los Angeles, CA
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Typography> 
              &copy; {year} Citizen Tim @ <a href="https://www.electriccitizen.com">Electric Citizen</a>
              </Typography>
              <Typography>
              powered by <a href="https://www.drupal.org">Drupal 8</a> 
              and <a href="https://www.gatsbyjs.org">Gatsby</a>.
              </Typography>
            </Grid>
          </Grid>

  );
}

export default Footer