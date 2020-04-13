import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledNav = styled.aside `
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #ddd;
  width: 280px;
`;

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <StyledNav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </StyledNav>
    );
  }
}
 
export default SideNav;