import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from "react-router";

function debounce(a, b, c) {
  var d, e;
  return function () {
    function h() {
      (d = null), c || (e = a.apply(f, g));
    }
    var f = this,
      g = arguments;
    return (
      clearTimeout(d), (d = setTimeout(h, b)), c && !d && (e = a.apply(f, g)), e
    );
  };
}

const SearchInput = styled.input `
  width: 240px;
  padding: 6px 10px;
  border-radius: 4px;
  border: 1px solid #6497b1;
  display: inline-block;
  box-sizing: border-box;
  font-size: 14px;
  outline: 0;
`;

const FlexRow = styled.div `
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  margin-top: 20px;

  > div:last-child {
    text-align: right;
    flex: 1;
  }
`;

const PaginationButton = styled.button `
  padding: 8px 12px;
  min-width: 80px;
  background-color: #b3cde0;
  border: 1px solid #6397b1;
  cursor: pointer;
  outline: 0;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:first-child {
    border-right: none;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
  }

  &:last-child {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
  }
`;

class ModuleSearch extends Component {
  constructor(props) {
    super(props);
    this.setSearchKeysearchTerm = this.setSearchKeysearchTerm.bind(this)
  }

  setSearchKeysearchTerm(searchTerm) {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: searchTerm.length > 0 ? `?query=${searchTerm}` : ''
    })
    this.setSearchTerm()  
  }

  setSearchTerm = debounce(() => {
    this.props.onSearch( );
  }, 600);

  render() { 
    const { placeHolder, pageMeta, queryValue }  = this.props; 
    return ( 
      <FlexRow>
        <SearchInput
          value={queryValue}
          placeholder={placeHolder || "Search"}
          onChange={e => {this.setSearchKeysearchTerm(e.target.value)}} 
        />
        <div>
          <PaginationButton
            disabled={!pageMeta.hasPrevPage}
            >Previous</PaginationButton>
          <PaginationButton
            disabled={!pageMeta.hasNextPage}
            >Next</PaginationButton>
        </div>
      </FlexRow>
    );
  }
}
 
export default withRouter(ModuleSearch);