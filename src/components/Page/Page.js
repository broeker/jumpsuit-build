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
import 'typeface-roboto';
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
  },
  headline: {
    fontSize: 50,
    fontWeight: 900,
    fontFamily: 'Roboto',
    color: '#455A64',
  },
  summary: {
    color: '#666',
    lineHeight: 2,
    fontSize: 20,
  },
  changed: {
    color: '#999',
    fontSize: 13,
    textAlign: 'right',
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
                       header={item.field_header}
                        />
                      );

                    } else if (item.__typename == 'paragraph__image') {
                      // you can also use ternary expression
                      return (
                          <ParagraphImage
                            title={item.__typename} 
                            media={item.relationships.field_single_image.relationships.field_media_image}
                            caption={item.field_caption.processed}
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
    return (
    <>

<Grid container spacing={24} sm={12} md={12} lg={12}>
  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
    <div className={classes.paper}>
      <Typography variant="headline" className={classes.headline} component="h1">
        {this.props.title}
      </Typography>
           <Typography className={classes.summary} dangerouslySetInnerHTML={{ __html: this.props.summary }} />
           <Typography className={classes.changed}>
           last updated: {this.props.changed}
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