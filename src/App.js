import React, { useState } from 'react';
import { Router } from "react-router-dom";
import styled, { ThemeProvider } from 'styled-components'
import { Main } from 'common';
import { GlobalStyle, Themes, History } from 'utils';

const lightTheme = () => ({
  ...Themes['common'],
  ...Themes['light'],
});

const darkTheme = () => ({
  ...Themes['common'],
  ...Themes['dark'],
});

const ThemeToggle = styled.div `
  position: fixed;
  right: 20px;
  top: 20px;
  z-index: 1
`;

function App() {

  const [theme, setTheme] = useState(lightTheme())
  
  console.log(`${API_URL}`);
  
  return (
    <Router history={History}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Main/>
      </ThemeProvider>
    </Router>
  );
}

export default App;
