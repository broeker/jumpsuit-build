import React from 'react'
import { withStyles } from '@material-ui/core/styles';

const Disqus  = (props) => {
  const { classes } = props;

  return (
    <>
      <div id="disqus_thread"></div>
}   </>                      
  );
};

export default withStyles(styles)(Disqus);