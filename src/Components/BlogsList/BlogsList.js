import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const StyledBlogWrapper = styled.section `
  max-width: 680px;
  border-bottom: 1px solid #ededed;
  margin-bottom: 20px;
  padding-bottom: 20px;

  &:last-child {
    margin-bottom: 0px;
    border: none;
  }
`;

const StyledBlogTitle = styled.h1 `
  font-size: 28px;
  margin: 0;
  color: #606060;
`;

const StyledBlogContent = styled.p `
  color: #797979;
  font-size: 16px;
  line-height: 23px;
  margin-top: 20px;
  margin-bottom: 16px;
`;

const StyledBlogSubtitle = styled.span `
  font-size: 14px;
  color: #c1c1c1;
`;

function BlogsList(props) {   
  return ( 
    <Fragment>
      {
        props.data.map((blog) => 
          <StyledBlogWrapper key={blog.id}>
            <StyledBlogTitle>{blog.title}</StyledBlogTitle>
            <StyledBlogContent>{blog.content}</StyledBlogContent>
            <div>
              <StyledBlogSubtitle>{blog.date}</StyledBlogSubtitle>
            </div>
          </StyledBlogWrapper>
        )
      }
    </Fragment>
  );
}
 
export default BlogsList;