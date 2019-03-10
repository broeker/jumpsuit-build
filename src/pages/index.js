
  
import React from 'react'
import PropTypes from 'prop-types';
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import BlogCard from '../components/BlogCard/BlogCard';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';



const styles = theme => ({
  top: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
});

const IndexPage = (props) => {
  const {classes} = props;

  return (
    <Layout>
      <Paper className={classes.root}>
        <Typography variant="subtitle1" paragraph>
      
 <p>
        "Jumpsuits to me represent many diverse qualities from action and adventure to manual labor. Jumpsuits
        are worn by people who push the envelope like skydivers, downhill skiers, astronauts, and high
        speed racers. Also, people incarcerated in institutions that are full of life’s most dangerous
        criminals who made their own rules. The exquisite modern day jumpsuit embodies all of these qualities,
        fun, dangerous, sexy. Made for confident men of adventure, leisure, and excitement.” <em>— Jeff Hilliard made in Los Angeles, CA</em>
    </p>
        </Typography>
      </Paper>
              <Grid container spacing={40} className={classes.cardGrid}>
        {
          props.data.allNodeBlog.edges.map(({ node: blog }) => (
            <Grid item key={blog.title} xs={12} md={4}>
              <BlogCard
                title={blog.title}
                summary={blog.body.summary}
                path={blog.fields.slug}
              />
            </Grid>
          ))
        }
        </Grid>
    </Layout>
  );
};

IndexPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IndexPage);

        

// The result of this GraphQL query will be injected as props.data into the
// IndexPage component.
export const query = graphql`
  query {
    allNodeBlog(sort: {fields: [changed], order:DESC}) {
      edges {
        node {
          fields {
            slug 
          }
          id
          title
          body {
            processed
            summary
          }
          created
        }
      }

    }
  }
`;