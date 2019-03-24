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
  typography: {
    useNextVariants: true,
    fontFamily: '"Work Sans","Roboto","Helvetica", "Arial", sans-serif',
    fontSize: 22,
    lineHeight: 2, 
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    h1: {
      fontSize: 60,
      fontWeight: 900,
      fontFamily: 'Montserrat',
      color: '#455A64', 
      lineHeight: '1.2',
      },
    h3: {
      fontSize: 35,
      color: '#455A64',
      fontWeight: 900,

      fontFamily: 'Montserrat',
    },
    subtitle1: {
      color: '#999',
      lineHeight: '1.6',
      fontSize: 30,
    },
    subtitle2: {
      color: '#666',
      lineHeight: '1.6',
      fontSize: 22,
      fontWeight: 300,
    },
    overline: {
      color: '#666',
      fontSize: 14,
      textAlign: 'right',
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
