import React, { useState } from 'react';
import { Router } from "react-router-dom";
import { ThemeProvider } from 'styled-components'
import history from "./history.js";
import { Main, SideNav } from './Common/';
import { themes } from './utils/theme';
import { GlobalStyle } from './utils/global';

const lightTheme = () => ({
  ...themes['common'],
  ...themes['light'],
})

const darkTheme = () => ({
  ...themes['common'],
  ...themes['dark'],
})

function App() {
  const [theme, setTheme] = useState(lightTheme())
  const setDarkTheme = () => setTheme(darkTheme())
  const setLightTheme = () => setTheme(lightTheme())

  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SideNav/>
        {/* <button onClick={setLightTheme}>Make it light</button>
                <button onClick={setDarkTheme}>Make it dark</button> */}
        <Main/>
      </ThemeProvider>
    </Router>
  );
}

export default App;
