import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { NewArticle, ViewArticle } from "components";
import { PrivateRoute } from 'common';
import { Directory, Favourites, Tags, Login } from "routes";


class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return (
      <>
        <Switch>
          <PrivateRoute path="/directory" exact component={Directory} />
          <PrivateRoute path="/directory/new" component={NewArticle}/>
          <PrivateRoute path="/directory/:diaryId/edit" component={NewArticle}/>
          <PrivateRoute path="/directory/:diaryId" component={ViewArticle} />
          <PrivateRoute path="/favourites" component={Favourites} />
          <PrivateRoute path="/tags" component={Tags} />
          <Route path="/login" component={Login}/>
          <Redirect from="/" to="/login" />
        </Switch>
      </>
    );
  }
}

export default Main;