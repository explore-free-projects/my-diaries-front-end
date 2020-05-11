import React, { Component } from 'react';
import { withRouter } from "react-router";
import styled from 'styled-components';

const EmptyStateWrapper = styled.div `
  position: absolute;
  left: 0;
  right: 0;
  top: 30%;
  bottom: 0;
  margin: auto;
  text-align: center;
`;

const EmptyStateContent = styled.h6 `
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.6px;
  margin: 16px 0 0;
`;

class EmptyState extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <EmptyStateWrapper>
        <img src={`/public/empty-article.svg`} width="80"/>
        <EmptyStateContent>{this.props.content}</EmptyStateContent>
      </EmptyStateWrapper>
    );
  }
}
 
export default withRouter(EmptyState);