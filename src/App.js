import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import history from "./history.js";
import { Main, SideNav } from './Common/';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0
  }
`;

function App() {
  return (
    <Router history={history}>
      <GlobalStyle />
      <SideNav/>
      <Main/>
    </Router>
  );
}

export default App;
