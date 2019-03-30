/* eslint-disable no-underscore-dangle */

import { SheetsRegistry } from 'jss';
import { createMuiTheme, createGenerateClassName } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import blue from '@material-ui/core/colors/blue';
import 'typeface-lalezar';

import 'typeface-roboto';
import 'typeface-work-sans';
import 'typeface-montserrat';
// A theme with custom primary and secondary color.
// It's optional.

const theme = createMuiTheme({
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
     appBar: {
      color: 'primary',
      height: 200,
    },
    textSecondary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
    },
  },
  overrides: {
    mdTemplate: { // Name of the component ⚛️ / style sheet
      foo: { // Name of the rule
        color: 'pink', // Some CSS
      },
    },
  },

  typography: {
    useNextVariants: true,
    fontFamily: '"Work Sans","Roboto","Helvetica", "Arial", sans-serif',
    fontSize: 20,
    lineHeight: 2, 
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    color: 'red',
    TextSecondary: {
      fontSize: 12,
    },
    body1: {
      lineHeight: 2,
      color: '#333',
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
  status: {
    // My business variables
    danger: orange[500],
  },
  indent: {
     indentleft: 'auto',
     indentright: 'auto',
     indenttop: '2rem',
     indentwidth: '80%',
  }
});

function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
  };
}

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}
