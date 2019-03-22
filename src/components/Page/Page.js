import React from 'react';
import PropTypes from 'prop-types';
//import GridList from '@material-ui/core/GridList';
import Img from 'gatsby-image';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
//import Img from 'gatsby-image';
import ParagraphText from '../ParagraphText/ParagraphText';
import ParagraphImage from '../ParagraphImage/ParagraphImage';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  item: {
    width: '100%',
  },
  paper: {
    padding: theme.spacing.unit * 2,
  }
});

class Page extends React.Component {

renderElement(){

return (
      <div>
        {
            this.props.content.map((item, key) => {
                    // if even, render grey background
                    if (item.__typename == 'paragraph__text') {
                      // don't forget to return what you want to render!
                      
                      return (
                        <ParagraphText
                       title={item.__typename} 
                       text={item.field_text.processed}
                        />
                      );

                    } else if (item.__typename == 'paragraph__image') {
                      // you can also use ternary expression
                      return (
                          <ParagraphImage
                            title={item.__typename} 
                            media={item.relationships.field_image.relationships.field_media_image}
                          />
                      );
                    }
                  })
        }
      </div>
  );
            

}


 render() {
   
 const { classes } = this.props;
  const sideList = (
        <div>

        <Typography variant="headline" component="h2">
        <h2>{this.props.title}</h2>
      </Typography>
      </div>
    );
   

    return (
    <>

<Grid container spacing={24} sm={12} md={12} lg={12}>
  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
    <div className={classes.paper}>
      <Typography variant="headline" component="h1">
        {this.props.title}
      </Typography>
    </div>
    </Grid>
  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
    <div className={classes.paper}>
          {this.props.media.localFile &&
      <Img className={classes.hero} fluid={this.props.media.localFile.childImageSharp.fluid} />
    }

    </div>
  </Grid>
</Grid>


      { this.renderElement() } 
  
    
</>

     )
}
}



export default withStyles(styles)(Page);