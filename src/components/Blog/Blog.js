import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Img from 'gatsby-image';
import ParagraphText from '../ParagraphText/ParagraphText';
import ParagraphImage from '../ParagraphImage/ParagraphImage';
import AvatarImage from '../AvatarImage/AvatarImage';

const styles = theme => ({
    // custom CSS here ...
      ...theme.mixins.gutters(),
    hero: {
      width: 'auto',
      marginBottom: '4rem',
  },
});

class Blog extends React.Component {
  renderElement() {
    if (  this.props.content  ) {
      return (
        <div>
        { this.props.content.map((item, key) => {
          if (item.__typename === 'paragraph__text') {
            return (
              <ParagraphText
                title={item.__typename} 
                text={item.field_text.processed}
                header={item.field_header}
              />
            );
          } else if (item.__typename === 'paragraph__image') {
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
  }

  render() {
    const {classes} = this.props;
      return ( 
        <>
        <div className={classes.hero}>
        {this.props.media.localFile &&
        <Img fluid={this.props.media.localFile.childImageSharp.fluid} />
        }
        </div>
      
        <Typography variant="h1" component="h1">{this.props.title}</Typography>
        <Typography variant="subtitle1" dangerouslySetInnerHTML={{ __html: this.props.summary }} />
        <Typography variant="overline" gutterBottom>last updated: {this.props.changed}</Typography>
        <AvatarImage
        /> 
        { this.renderElement() }
        </>
      )
    }
}







export default withStyles(styles)(Blog);