import React, { Suspense } from 'react';
import { Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { SideNavigation, TopNav } from 'common';
import { Loading } from "components";

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

const PrivateRoute = ({component:Component, ...rest}) => {
  return <Route {...rest} render={(props)=>{
      return localStorage.getItem('jwt') ? 
        <>
          <SideNavigation/>
          <TopNav/>
          <MainWrapper>
            <Suspense fallback={<Loading/>}>
              <MainWrapperContent>
                <Component {...props} /> 
              </MainWrapperContent>
            </Suspense>
          </MainWrapper>
        </>
      : <Redirect to="/login" />
  }} />
}

export default PrivateRoute; 