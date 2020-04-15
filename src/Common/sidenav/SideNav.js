import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledNav = styled.aside `
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 280px;
  background-color: ${props => props.theme.bgColor};
`;

const StyledLogo = styled.h1 `
  padding: 0px 25px;
  font-size: 32px;
  color: #616161;
`;

const StyledNavUl = styled.ul `
  list-style:none;
  margin: 0;
  padding: 0 25px;
`;

const StyledNavList = styled.li `
  margin-bottom: 5px;
`;

const StyledNavLink = styled(Link) `
  text-decoration: none;
  color: #77bca6;
  font-size: 1rem;
  display: block;
  padding: 6px 0;

  &:hover {
    color: #4ba789;
  }
`;

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <StyledNav>
        <StyledLogo>Noteworthy</StyledLogo>
        <StyledNavUl>
          <StyledNavList>
            <StyledNavLink to="/">Blogs</StyledNavLink>
          </StyledNavList>
        </StyledNavUl>
      </StyledNav>
    );
  }
}
 
export default SideNav;