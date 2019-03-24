import React from 'react';
import Img from 'gatsby-image';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ParagraphText from '../ParagraphText/ParagraphText';
import ParagraphImage from '../ParagraphImage/ParagraphImage';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  indent: {
    width: theme.indent.indentwidth,
    marginLeft: theme.indent.indentleft,
    marginRight: theme.indent.indentright,
    marginTop: theme.indent.indenttop,
  }
});

class Page extends React.Component {

renderElement(){

return (
      <div>
        {
            this.props.content.map((item, key) => {
                    // if even, render grey background
                    if (item.__typename === 'paragraph__text') {
                      // don't forget to return what you want to render!
                      
                      return (
                        <ParagraphText
                       title={item.__typename} 
                       text={item.field_text.processed}
                       header={item.field_header}
                        />
                      );

                    } else if (item.__typename === 'paragraph__image') {
                      // you can also use ternary expression
                      return (
                          <ParagraphImage
                            title={item.__typename} 
                            media={item.relationships.field_single_image.relationships.field_media_image}
                            caption={item.field_caption.processed}
                          />
                      );
                    } else {
                      return ('foo')
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
<Typography variant="h1" component="h1">{this.props.title}</Typography>
<Typography variant="subtitle1" dangerouslySetInnerHTML={{ __html: this.props.summary }} />
<Typography variant="overline" gutterBottom>last updated: {this.props.changed}</Typography>
</Grid>
<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
{this.props.media.localFile &&
<Img className={classes.hero} fluid={this.props.media.localFile.childImageSharp.fluid} />
}
</Grid>
</Grid>

<Grid className = { classes.indent } > { this.renderElement() } </Grid>
  
    
</>
     )
  }
}



export default withStyles(styles)(Page);