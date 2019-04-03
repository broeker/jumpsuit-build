import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Img from 'gatsby-image';
import ParagraphText from '../ParagraphText/ParagraphText';
import ParagraphImage from '../ParagraphImage/ParagraphImage';
import AuthorDetails from '../AuthorDetails/AuthorDetails';
import Card from '@material-ui/core/Card';
import { DiscussionEmbed } from "disqus-react";

const styles = theme => ({
    // custom CSS here ...
      ...theme.mixins.gutters(),
      header: {
        paddingLeft: '3em',
        paddingRight: '3em',
        marginBottom: '3em',

      },
      foo: {
      color: 'red',
      padding: '2em',
      marginBottom: '4em',
      width: '80%',
      marginLeft: 'auto',
      marginRight: 'auto',
      },
      body: {
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      disqus: {
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '6em',
      }
});

export const style = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}


class Blog extends React.Component {
  renderElement() {
    if (  this.props.content  ) {
      return (
        <>
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
        </>
      );
    }
  }

  render() {
    const {classes} = this.props;
    const disqusShortname = "jumpsuit-life";
    const disqusConfig = {
      identifier: this.props.id,
      title: this.props.title,
    };


      return ( 
        <>
                   <div style={style}> 
        <Card className={classes.foo}>

        {this.props.media.localFile &&
        <Img fluid={this.props.media.localFile.childImageSharp.fluid} />
        }
      
        <Typography variant="overline">{this.props.category}</Typography>
        <Typography variant="h1" component="h1">{this.props.title}</Typography>
        <Typography variant="subtitle1" dangerouslySetInnerHTML={{ __html: this.props.summary }} />
              <AuthorDetails
                changed={this.props.changed}
              />
        
        </Card>
       
        <Typography className={classes.body} variant="body1">
        { this.renderElement() }
        </Typography>
        </div>
          <div className={classes.disqus} > 
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </div>
        </>
      )
    }
}

export default withStyles(styles)(Blog);