import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import blue from '@material-ui/core/colors/blue';
import 'typeface-lalezar';

import 'typeface-roboto';
import 'typeface-work-sans';
import 'typeface-montserrat';

const theme = createMuiTheme({
  custom: {
    logofont: 'Baloo Bhaina',
    TextSecondary: '#ffffff',
    secondarytext: '#666',
  },
  foo: {
    foobar: 'green',
  },
  palette: {
    primary: {
      light: orange[300],
      main: orange[500],
      dark: orange[700],
    },
    secondary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
    },
  },

  typography: {
    useNextVariants: true,
    fontFamily: '"Work Sans", "Roboto","Helvetica", "Arial", sans-serif',
    fontSize: 14, // default value
    body1: {
      lineHeight: 3,
    },
    h1: {
      fontSize: 60,
      fontWeight: 900,
      fontFamily: 'Montserrat',
      color: '#607D8B', 
      lineHeight: '1.2',
      },
    h3: {
      fontSize: 35,
      color: '#607D8B',
      fontWeight: 900,

      fontFamily: 'Montserrat',
    },
    subtitle1: {
      color: '#999',
      lineHeight: '1.6',
      fontSize: 30,
    },
    subtitle2: {
      color: '#333',
      lineHeight: '1.6',
      fontSize: 20,
      fontWeight: 300,
    },
    overline: {
      fontSize: 14,
      fontWeight: 700,
      color: '#90A4AE',
    },
    ListItemText: {
      fontSize: 10,
    } 
  },
  indent: {
     indentleft: 'auto',
     indentright: 'auto',
     indenttop: '2rem',
     indentwidth: '80%',
  }
});

export default theme;

