import React, { Component } from 'react';
import styled from 'styled-components';
import { convertFromRaw } from 'draft-js';
import Moment from 'react-moment';
import { markdownToDraft } from 'markdown-draft-js';
import { NavLink } from 'react-router-dom';

const DiaryWrapper = styled.section `
  border-bottom: 1px solid #f3f3f3;
  margin-bottom: 16px;
  padding-bottom: 16px;
  word-break: break-all;
  
  &:last-child {
    margin-bottom: 0px;
    border: none;
  }
`;

const DiaryDetails = styled.div `
  margin: 6px 0;
  display: flex;
`;

const DiaryTitle = styled(NavLink) `
  font-size: 24px;
  margin: 0;
  color: #05396c;
  text-decoration: none;
  font-weight: 500;
`;

const DiaryContent = styled.p `
  color: #4c4c4c;
  font-size: 14px;
  line-height: 21px;
  margin: 10px 0;
`;

// const HashTag = styled.span `
//   padding: 3px 5px;
//   background-color: #b3cde0;
//   border-radius: 4px;
//   font-size: 12px;
//   color: #4c4949;
//   margin: 0 3px;

//   &:first-child {
//     margin-left: 0
//   }

//   &:last-child {
//     margin-right: 0
//   }

//   &::before {
//     content: "#"
//   }
// `;

const DateFormat = styled(Moment) `
  font-size: 12px;
`;

const DiaryDate = styled.span `
  font-size: 12px;
  color: #a2a1a1;
  margin-right: 10px;

  &::after {
    content: '';
    width: 4px;
    height: 4px;
    background-color: #e2e2e2;
    display: inline-block;
    vertical-align: middle;
    margin-left: 7px;
    border-radius: 100%;
  }

  &:last-child {
    margin-right: 0;
    &:after {
      background-color: transparent;
    }
  }
  
`;

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  convertString = (content) => {
    const rawData = markdownToDraft(content);
    const plainText = convertFromRaw(rawData).getPlainText();
    const trimmedText = plainText.slice(0, 160);
    return trimmedText;
  }

  render() { 
    const diarie = this.props.data;
    return ( 
      <DiaryWrapper>
        <DiaryTitle to={this.props.redirectTo}>{diarie.title}</DiaryTitle>
        {/* <DiaryDetails>
          {diarie.tags.map((tag, index) => 
            <HashTag key={index.toString()}>
              {tag}
            </HashTag>
          )}
        </DiaryDetails> */}
        <DiaryDetails>
          <DiaryDate><DateFormat format="DD MMM YYYY">{diarie.created_at}</DateFormat></DiaryDate>
          {/* <DiaryDate>Modfied: <DateFormat date={diarie.updated_at} durationFromNow /></DiaryDate> */}
        </DiaryDetails>
        <DiaryContent>{this.convertString(diarie.content)}</DiaryContent>
      </DiaryWrapper>
    );
  }
}
 
export default ArticleList;