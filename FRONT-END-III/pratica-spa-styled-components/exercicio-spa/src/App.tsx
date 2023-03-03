import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Config/GlobalStyle';
import theme from './Config/theme';
import AppRoutes from './Routes/AppRoutes';


function App() {
  return (
    <ThemeProvider theme={theme.dark}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>

  );
}

export default App;
