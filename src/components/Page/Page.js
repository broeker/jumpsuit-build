import React from 'react';
import PropTypes from 'prop-types';
//import GridList from '@material-ui/core/GridList';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
//import Img from 'gatsby-image';
import ParagraphText from '../ParagraphText/ParagraphText';
import ParagraphImage from '../ParagraphImage/ParagraphImage';


const styles = theme => ({
  // custom CSS here ...
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
   
   const sideList = (
        <div>

        <Typography variant="headline" component="h2">
        <h2>{this.props.title}</h2>
      </Typography>
      </div>
    );
   

    return (
    <>
     <Typography variant="headline" component="h2">
        {this.props.title}
      </Typography>
 { this.renderElement() } 
  
    
</>

     )
}
}



export default withStyles(styles)(Page);