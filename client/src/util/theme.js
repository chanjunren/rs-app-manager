import React from 'react';
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles';

import Nunito from '../resources/fonts/Nunito-Regular.ttf';
import { CssBaseline } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

const nunito = {
  fontFamily: 'Nunito',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Nunito'),
    local('Nunito'),
    url(${Nunito}) format('truetype')
  `,
};

let theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#CCD3D9',
      main: '#1B2026',
      dark: '#070A0D',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#01bf71',
      contrastText: '#fff',
    },
    error: red
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  typography: {
    body1: {
      fontFamily: 'Nunito',
      
    },
    body2: {
      fontFamily: 'Nunito',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [nunito],
      },
    },
  },
});

theme = responsiveFontSizes(theme);

const Theme = (props) => {
  const { children } = props;
  return <ThemeProvider theme={theme}>
    <CssBaseline/>
    {children}</ThemeProvider>;
};

export const withTheme = (Component) => {
  return (props) => {
    return (
      <Theme>
        <Component {...props} />
      </Theme>
    );
  };
};