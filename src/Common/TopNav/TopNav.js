import React, { Component } from 'react';
import styled from 'styled-components'
import { withRouter } from "react-router";

const Header = styled.header `
  position: fixed;
  left: 280px;
  top: 0;
  right: 0;
  display: inline-block;
  box-shadow: 0 0 4px 0px #ddd;
  background-color: white;
  z-index: 2;
  height: 68px;
  padding: 0 24px;
`;

const Row = styled.div `
  display: flex;
  align-items: center;
  height: 100%;

  > div {
    flex: 1
  }
`; 

const HeaderTitle = styled.label `
  font-size: 18px;
  letter-spacing: 0.3px;
  font-weight: 500;
  text-transform: capitalize;
`;

class TopNav extends Component {
  constructor(props) {
    super(props);
  }
  
  render() { 
    return (  
      <Header>
        <Row>
          <div>
            <HeaderTitle>Page title</HeaderTitle>
          </div>
          <div>

          </div>
        </Row>
      </Header>  
    );
  }
}
 
export default withRouter(TopNav);