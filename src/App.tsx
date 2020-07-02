import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './util/theme';

import Navbar from './views/Navbar';
import LandingPage from './views/LandingPage';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Navbar />
        <LandingPage />
        <h1>Ruskiy</h1>
      </div>
    </ThemeProvider>
  );
};

export default App;
