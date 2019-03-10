import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'gatsby'

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
    minHeight: 310,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

const BlogCard = (props) => {
  const { classes } = props;
  const BlogLink = props => <Link to={props.path} {...props}>Read more</Link>;

  return (
    <Card className={classes.card}>
      <CardContent>
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
  );
};

BlogCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default withStyles(styles)(BlogCard);