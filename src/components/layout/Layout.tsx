import * as React from 'react';
import { ThemeProvider } from '@mui/material';
import { theme } from '../../utils/theme';
import Stack from '@mui/material/Stack';

interface Props {
  children: React.ReactElement[] | React.ReactElement;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Stack sx={{ bgcolor: 'background.paper', minHeight: '100vh' }}>
        {children}
      </Stack>
    </ThemeProvider>
  );
};

export default Layout;
