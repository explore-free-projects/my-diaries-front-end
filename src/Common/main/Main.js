import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

const StyledMain = styled.main `
  position: absolute;
  left: 280px;
  overflow: auto;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 25px;
`;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <StyledMain>
        <Switch>
          <Route exact path="/">
            Home
          </Route>
          <Route path="/about">
            About
          </Route>
          <Route path="/dashboard">
            Dashboard
          </Route>
        </Switch>
      </StyledMain>
    );
  }
}

export default Main;