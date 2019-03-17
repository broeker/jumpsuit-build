
  
import React from 'react'
import PropTypes from 'prop-types';
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import BlogCard from '../components/BlogCard/BlogCard';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const foobar = '#ffffff'; // #F44336
const blu = '#29b6f6';

const styles = theme => ({
  top: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  hero: {
    fontSize: 14, 
    padding: theme.spacing.unit * 3,
    //backgroundImage: `url(${Image})`,
    backgroundColor: blu,
    marginTop: theme.spacing.unit * 1,
    color: foobar, 
  },
  
});

const IndexPage = (props) => {
  const {classes} = props;

  return (
    <Layout>
      <Paper className={classes.root}>
        <Typography className={classes.hero} variant="subtitle1" paragraph>

        "Jumpsuits to me represent many diverse qualities from action and adventure to manual labor. Jumpsuits
        are worn by people who push the envelope like skydivers, downhill skiers, astronauts, and high
        speed racers. Also, people incarcerated in institutions that are full of life’s most dangerous
        criminals who made their own rules."<br /> <em>— Jeff Hilliard made in Los Angeles, CA</em>
        </Typography>
      </Paper>
              <Grid container spacing={40} className={classes.cardGrid}>
        {
          props.data.allNodeBlog.edges.map(({ node: blog }) => (
            <Grid item key={blog.title} xs={12} md={4}>
              <BlogCard
                title={blog.title}
                summary={blog.body.summary}
                category={blog.relationships.category[0].name}
                path={blog.fields.slug}
                media={blog.relationships.media.relationships.field_media_image}
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
          relationships {
            category: field_blog_category {
              name,
            },
            tags: field_tags {
            name,
            },
            media: field_media {
              relationships {
                field_media_image {
                   filename
                    uri {
                      value
                      url
                      }
                  localFile {
                    publicURL
                    childImageSharp {
                      fluid(maxWidth: 470, maxHeight: 353) {
                      ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
        },
          }
          created
        }
      }

    }
  }
`;