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
import moment from 'moment'

const styles = {
  card: {
    maxWidth: 345,
    minHeight: 310,
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
};

const BlogCard = (props) => {
  const { classes } = props;
  const BlogLink = props => <Link to={props.path} {...props}>Read more</Link>;

  return (
    <CardActionArea style={{ textDecoration: 'none' }}>


<Link style={{ textDecoration: 'none'}} to={props.path}>
    <Card className={classes.card}>
      <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="50vh"
          image={props.media.localFile.publicURL}
          title="Contemplative Reptile"
        />
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          {props.category}
        </Typography>
        <Typography className={classes.title} color="textSecondary">
          Last update: {props.changed}
        </Typography>
        <Typography variant="headline" component="h2">
          { /** <h3><Link to={props.path}>{props.title}</Link></h3> */ }
          <h4>{props.title}</h4>
          <Typography className={classes.pos} color="textSecondary" dangerouslySetInnerHTML={{ __html: props.summary }} />
        </Typography>
      </CardContent>
      <CardActions>
              <Button size="small"  href={props.path} path={props.path} component={BlogLink}>Read more</Button>
      </CardActions>
    </Card>
    </Link>
    </CardActionArea>
  );
};

BlogCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  media: PropTypes.object.isRequired,
};

export default withStyles(styles)(BlogCard);