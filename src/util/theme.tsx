import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const createTheme = createMuiTheme({
  typography: {
    fontFamily: ['"Barlow", sans-serif', '"Montserrat", sans-serif'].join(',')
  },
  palette: {
    primary: {
      light: '#6573c3',
      main: '#3f51b5', // indigo
      dark: '#2c387e',
      contrastText: '#fff'
    },
    secondary: {
      light: '#4aedc4',
      main: '#1de9b6', // teal
      dark: '#14a37f',
      contrastText: '#000'
    },
    error: {
      main: '#ff1744' // red
    },
    success: {
      main: '#9c9c9c' // darker grey
    },
    info: {
      main: '#4a4a4a' // dark grey
    },
    background: {
      default: '#fff' // white
    }
  }
});

const theme = responsiveFontSizes(createTheme);

export default theme;
