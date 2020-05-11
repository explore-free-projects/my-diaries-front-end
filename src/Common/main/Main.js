import React, { Component } from 'react';
import styled from 'styled-components';
import { Switch, Route, Redirect, IndexRoute } from 'react-router-dom';
import { NewArticle, ViewArticle, } from "components";
import { SideNav, TopNav } from 'common';
import { Directory, Favourites, Tags } from "routes";

const MainWrapper = styled.main `
  position: absolute;
  left: 280px;
  overflow: auto;
  right: 0;
  top: 68px;
  bottom: 0;
  padding: 24px;
  min-width: 980px;
  overflow: auto;
`;

const MainWrapperContent = styled.div `
  max-width: 740px;
  margin-left: auto;
  margin-right: auto;
`;

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return (
      <>
        <SideNav/>
        <TopNav/>
        <MainWrapper>
          <MainWrapperContent>
            <Switch>
              <Route path="/directory" exact component={Directory} />
              <Route path="/directory/new" component={NewArticle}/>
              <Route path="/directory/:diaryId/edit" component={NewArticle}/>
              <Route path="/directory/:diaryId" component={ViewArticle} />
              
              <Route path="/favourites" component={Favourites} />
              <Route path="/tags" component={Tags} />
              <Redirect from="/" to="/directory" />
            </Switch>
          </MainWrapperContent>
        </MainWrapper>
      </>
    );
  }
}

export default Main;