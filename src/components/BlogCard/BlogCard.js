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
  }
};

class BlogCard extends React.Component {
  renderElement() {
    const { classes } = this.props;
    if (this.props) {
      return (
        <>

        <div>FOO


        </div>


       <CardActionArea style={{ textDecoration: 'none' }}>
        <Link style={{ textDecoration: 'none'}} to={this.props.path}>
          <Card className={classes.card}>
           {this.props.media &&
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              className={classes.media}
              image={this.props.media.localFile.publicURL}
              title="Contemplative Reptile"
              classes={{ media: classes.media }}
              />
            }
            <CardContent>
              <Typography className={classes.title} color="textSecondary">{this.props.category}</Typography>
              <Typography variant="h3" component="h3">{this.props.title}</Typography>
              <Typography variant="subtitle2" dangerouslySetInnerHTML={{ __html: this.props.summary }} />
              <Typography variant="overline" gutterBottom>last updated: {this.props.changed}</Typography>
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