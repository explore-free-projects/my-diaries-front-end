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
        <svg xmlns="http://www.w3.org/2000/svg" fill="#6497b1" viewBox="0 0 64 64" width="80" height="80">
          <g id="Outline"><path d="M5.29,5.29a1.032,1.032,0,0,0-.21.33.942.942,0,0,0,0,.76.933.933,0,0,0,.21.33,1.014,1.014,0,0,0,1.42,0,1.014,1.014,0,0,0,0-1.42A1.047,1.047,0,0,0,5.29,5.29Z"/><path d="M8.62,5.08a.933.933,0,0,0-.33.21,1.014,1.014,0,0,0,0,1.42A1,1,0,0,0,10,6a1.052,1.052,0,0,0-.29-.71A1.017,1.017,0,0,0,8.62,5.08Z"/><path d="M11.62,5.08a1.032,1.032,0,0,0-.33.21,1.014,1.014,0,0,0,0,1.42,1.155,1.155,0,0,0,.33.21A1,1,0,0,0,12,7a.99.99,0,0,0,1-1,1.052,1.052,0,0,0-.29-.71A1.037,1.037,0,0,0,11.62,5.08Z"/><rect x="15" y="19" width="14" height="2"/><rect x="15" y="25" width="14" height="2"/><rect x="15" y="31" width="19" height="2"/><rect x="15" y="37" width="13" height="2"/><rect x="15" y="43" width="8" height="2"/><rect x="15" y="49" width="6" height="2"/><path d="M58.171,14a3.8,3.8,0,0,0-2.707,1.122L52,18.586V5a3,3,0,0,0-3-3H5A3,3,0,0,0,2,5V59a3,3,0,0,0,3,3H49a3,3,0,0,0,3-3V29.414l8.878-8.878A3.828,3.828,0,0,0,58.171,14ZM4,5A1,1,0,0,1,5,4H49a1,1,0,0,1,1,1V8H4ZM50,59a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V10H50V20.586l-6,6v-3L33.414,13H10V57H44V37.414l6-6ZM26.126,44.46l-2.707,8.121,8.121-2.707L34.414,47,42,39.414V55H12V15H32V25H42v3.586l-13,13ZM29,44.414,31.586,47,30.46,48.126l-3.879,1.293,1.293-3.879Zm5-28L40.586,23H34ZM33,45.586,30.414,43,54,19.414,56.586,22ZM59.464,19.122,58,20.586,55.414,18l1.464-1.464a1.829,1.829,0,1,1,2.586,2.586Z"/></g></svg>
        <EmptyStateContent>{this.props.content}</EmptyStateContent>
      </EmptyStateWrapper>
    );
  }
}
 
export default withRouter(EmptyState);