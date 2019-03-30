import React from 'react'
import { Link } from 'gatsby'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Img from 'gatsby-image';
import Fade from '@material-ui/core/Fade';
import AuthorDetails from '../AuthorDetails/AuthorDetails'
import { mdiArrowRightBoldCircle} from '@mdi/js'
import Icon from '@mdi/react'
import Grid from '@material-ui/core/Grid';



const styles = {
  root: {
    color: '#37474F',
    height: 'auto',
  },
  icon: {
    vertialAlign: 'bottom',
    textAlign: 'right',
  },
  card: {
    height: '100%',
    padding: 0,
  }
};

class BlogCard extends React.Component {

  
  state = {
    checked: false,
  };

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  }; 

  renderElement() {
    const { classes } = this.props;
     const { checked } = this.state;

    if (this.props) {
      return (
       <>
          

       <CardActionArea 
       
        onMouseEnter={this.handleChange}
        onMouseLeave={this.handleChange}
       style={{ textDecoration: 'none' }}
       classes={{
        root: classes.root, // class name, e.g. `classes-nesting-root-x`
      }} 

       >
        

        <Link style={{ textDecoration: 'none'}} to={this.props.path}>
          <Card className={classes.card}>
           {this.props.media &&
              <Img fluid={this.props.media} />
            }
            <CardContent>
            <Grid container>
              <Grid item sm={6}>
                <Typography variant="overline">{this.props.category}</Typography>
                              </Grid>
              <Grid item className={classes.icon} sm={6}>
                <Fade in={checked} timeout={ 1500 } >
                <Icon className={classes.icon} color="#ff9800" path={mdiArrowRightBoldCircle} size={1.2}/>
                < /Fade>
              </Grid>
            </Grid>
              <Typography variant="h3" component="h3">{this.props.title}  
              

</Typography> 
              
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

    return ( 
      <>
      { this.renderElement() }
      </>
    )
  }
};


export default withStyles(styles)(BlogCard);