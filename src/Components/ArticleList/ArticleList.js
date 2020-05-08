import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const BlogWrapper = styled.section `
  max-width: 680px;
  border-bottom: 1px solid ${props => props.theme.borderColor};
  margin-bottom: 20px;
  padding-bottom: 20px;
  word-break: break-all;

  &:last-child {
    margin-bottom: 0px;
    border: none;
  }
`;

const BlogTitle = styled(NavLink) `
  font-size: 28px;
  margin: 0;
  color: ${props => props.theme.textPrimary};
`;

const BlogContent = styled.p `
  color: ${props => props.theme.textSecondary};
  font-size: 16px;
  line-height: 23px;
  margin-top: 20px;
  margin-bottom: 16px;
`;

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const diarie = this.props.data;
    return ( 
      <>
        <BlogWrapper key={diarie._id}>
          <BlogTitle to={`/directory/${diarie._id}`}>{diarie.title}</BlogTitle>
          <BlogContent>{diarie.content}</BlogContent>
        </BlogWrapper>
      </>
    );
  }
}
 
export default ArticleList;