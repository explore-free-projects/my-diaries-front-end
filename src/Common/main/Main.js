import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { BlogsList } from "components";
import { Blogs } from 'mocks';

const StyledMain = styled.main `
  position: absolute;
  left: 280px;
  overflow: auto;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 34px 25px;
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
          <Route path="/" exact>
            <BlogsList 
              data={Blogs}/>
          </Route>
        </Switch>
      </StyledMain>
    );
  }
}

export default Main;