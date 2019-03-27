import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'gatsby'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Img from 'gatsby-image';
import AuthorDetails from '../AuthorDetails/AuthorDetails'

const styles = {
  card: {
    underline: 0,
    textDecoration: 'none',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    underline: 0,
  },
  pos: {
    marginBottom: 12,
  },
  foo: {
    textDecoration: 'none',
  },
  media: {
    maxWidth: '1280',
    maxHeight: '720',
  },
  category: {
    color: '#666',
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 900,
  }
};

class BlogCard extends React.Component {
  renderElement() {
    const { classes } = this.props;
    if (this.props) {
      return (
        <>

       <CardActionArea style={{ textDecoration: 'none' }}>
        <Link style={{ textDecoration: 'none'}} to={this.props.path}>
          <Card className={classes.card}>
           {this.props.media &&
              <Img fluid={this.props.media} />
            }
            <CardContent>
              <Typography className={classes.category}>{this.props.category}</Typography>
              <Typography variant="h3" component="h3">{this.props.title}</Typography>
              <Typography variant="subtitle2" dangerouslySetInnerHTML={{ __html: this.props.summary }} />
              <AuthorDetails
                changed={this.props.changed}
              />
            </CardContent>
          </Card>
        </Link>
      </CardActionArea>
      
      </>
      );
    }
  }
  
  render() {
    const {classes} = this.props;
    return ( 
      <>
      { this.renderElement() }
      </>
    )
  }
};


export default withStyles(styles)(BlogCard);