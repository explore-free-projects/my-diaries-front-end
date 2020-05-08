import React, { Component } from 'react';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';
import { DiaryDirectory, Favourites, Tags, NewArticle, ViewArticle } from "components";

const MainWrapper = styled.main `
  position: absolute;
  left: 280px;
  overflow: auto;
  right: 0;
  top: 68px;
  bottom: 0;
  padding: 24px;
`;

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return (
      <MainWrapper>
        <Switch>
          <Route path="/directory" exact component={DiaryDirectory} />
          <Route path="/directory/new" component={NewArticle} />
          <Route path="/directory/:diaryId/edit" component={NewArticle} />
          <Route path="/directory/:diaryId" component={ViewArticle} />
          <Route path="/favourites" component={Favourites} />
          <Route path="/tags" component={Tags} />
          <Redirect from="/" to="/directory" />
        </Switch>
      </MainWrapper>
    );
  }
}

export default Main;