import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const BlogWrapper = styled.section `
  max-width: 680px;
  border-bottom: 1px solid ${props => props.theme.borderColor};
  margin-bottom: 20px;
  padding-bottom: 20px;

  &:last-child {
    margin-bottom: 0px;
    border: none;
  }
`;

const BlogTitle = styled.h1 `
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

const BlogSubtitle = styled.span `
  font-size: 14px;
  color: ${props => props.theme.textMute};
`;

function BlogsList(props) {   
  return ( 
    <Fragment>
      {
        props.data.map((blog) => 
          <BlogWrapper key={blog.id}>
            <BlogTitle>{blog.title}</BlogTitle>
            <BlogContent>{blog.content}</BlogContent>
            <div>
              <BlogSubtitle>{blog.date}</BlogSubtitle>
            </div>
          </BlogWrapper>
        )
      }
    </Fragment>
  );
}
 
export default BlogsList;