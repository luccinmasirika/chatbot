import * as React from 'react';
import { Home } from './screens';
import { ThemeProvider } from '@mui/material';
import { theme } from './utils/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;

