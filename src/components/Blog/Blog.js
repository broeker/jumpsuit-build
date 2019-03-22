import React from 'react';
import PropTypes from 'prop-types';
//import GridList from '@material-ui/core/GridList';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Img from 'gatsby-image';
import BlogList from '../BlogList/BlogList';
import GatsbyLinks from '../GatsbyLinks/GatsbyLinks';

import ParagraphText from '../ParagraphText/ParagraphText';
import ParagraphImage from '../ParagraphImage/ParagraphImage';


const styles = theme => ({
    // custom CSS here ...
    hero: {
      height: '50vh',
  },
});

class Blog extends React.Component {


    renderElement() {

        if (  this.props.content  ) {
        return (
            <div>


          { this.props.content.map((item, key) => {
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

    }

    render() {
const {classes} = this.props;
        const sideList = (
            <div>
             

        <Typography variant="headline" component="h2">
        <h2>{this.props.title}</h2>
        </Typography>
      </div>
        );


        return ( <
            >

    {this.props.media.localFile &&
      <Img className={classes.hero} fluid={this.props.media.localFile.childImageSharp.fluid} />
    }
      <Typography variant="headline" component="h2">
        {this.props.title}
      </Typography> { this.renderElement() }


            <
            />

        )
    }
}








export default withStyles(styles)(Blog);