import React, { useState } from 'react';
import { Router } from "react-router-dom";
import { ThemeProvider } from 'styled-components'
import { MainLayout } from 'common';
import { GlobalStyle, Themes, History } from 'utils';

const lightTheme = () => ({
  ...Themes['common'],
  ...Themes['light'],
});


function App() {
  const [theme] = useState(lightTheme())
  return (
    <Router history={History}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainLayout/>
      </ThemeProvider>
    </Router>
  );
}

export default App;