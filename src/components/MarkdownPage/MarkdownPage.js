import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import AuthorDetails from '../AuthorDetails/AuthorDetails'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  indent: {
    width: theme.indent.indentwidth,
    marginLeft: theme.indent.indentleft,
    marginRight: theme.indent.indentright,
    marginTop: theme.indent.indenttop,
  },
  hero: {
    padding: '0em',
  },
  mdimage: {
    padding: '10em'
  }
});

class MarkdownPage extends React.Component {

 render() {
   
 const { classes } = this.props;
    return (
    <>
<Typography variant="h1" component="h1">{this.props.title}</Typography>
<AuthorDetails
  changed={this.props.changed}
  />
<Typography className={classes.foo} gutterBottom dangerouslySetInnerHTML={{ __html: this.props.html }} />  
    
</>
     )
  }
}



export default withStyles(styles)(MarkdownPage);