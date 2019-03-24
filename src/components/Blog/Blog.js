import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Img from 'gatsby-image';
import ParagraphText from '../ParagraphText/ParagraphText';
import ParagraphImage from '../ParagraphImage/ParagraphImage';

const styles = theme => ({
    // custom CSS here ...
      ...theme.mixins.gutters(),
    hero: {
      height: '50vh',
      marginBottom: '4rem',
  },
});

class Blog extends React.Component {


    renderElement() {

        if (  this.props.content  ) {
        return (
            <div>


          { this.props.content.map((item, key) => {
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

    }

    render() {
const {classes} = this.props;


        return ( 
        <>

    {this.props.media.localFile &&
      <Img className={classes.hero} fluid={this.props.media.localFile.childImageSharp.fluid} />
    }
      <Typography variant="h1" component="h1">{this.props.title}</Typography>
      <Typography variant="subtitle1" dangerouslySetInnerHTML={{ __html: this.props.summary }} />
      <Typography variant="overline" gutterBottom>last updated: {this.props.changed}</Typography>
      
      { this.renderElement() }


            </>

        )
    }
}








export default withStyles(styles)(Blog);