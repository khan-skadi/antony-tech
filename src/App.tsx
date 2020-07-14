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
      <div style={{ flex: '1 0 auto' }}>
        <Navbar />
        <LandingPage />
      </div>
    </ThemeProvider>
  );
};

export default App;
