import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { DiaryDirectory, Favourites, Tags } from "components";
import { Blogs,  } from 'mocks';

const MainWrapper = styled.main `
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
      <MainWrapper>
        <Switch>
          <Route path="/" exact>
            <DiaryDirectory 
              data={Blogs}/>
          </Route>
          <Route path="/tags">
            <Tags />
          </Route>
          <Route path="/favourites">
            <Favourites/>
          </Route>
        </Switch>
      </MainWrapper>
    );
  }
}

export default Main;