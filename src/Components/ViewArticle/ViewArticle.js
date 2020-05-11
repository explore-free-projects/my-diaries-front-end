import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import Moment from 'react-moment';
import { convertFromRaw, EditorState } from 'draft-js';
import { markdownToDraft } from 'markdown-draft-js';
import { Loading, TextEditorPreview } from 'components';

const DiaryTitle = styled.h1 `
  font-size: 24px;
  margin: 0;
  margin-bottom: 6px;
  color: #05396c;
  text-decoration: none;
  font-weight: 500;
`;

const DiaryPreviewOption = styled.div `
  margin-bottom: 24px;
`;

const EditButton = styled(NavLink) `
  margin-bottom: 20px;
  color: #333;
  font-size: 14px;
`;

const DateFormat = styled(Moment) `
  font-size: 12px;
`;

const DiaryDate = styled.span `
  font-size: 12px;
  color: #a2a1a1;
  margin-right: 8px;

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

const FavButton = styled.button `
  margin-top: 24px;
  border: 1px solid  ${({fav}) => fav ? "#ff0100" : "#ddd" };
  background-color: ${({fav}) => fav ? "#ff0100" : "#fff" };
  border-radius: 4px;
  outline: 0;
  cursor: pointer;
  display: inline-block;
  padding: 2px 6px;  
  > svg {
    fill: ${({fav}) => fav ? "white" : "#ddd" };
    margin-top: 2px
  }
`;

const HeartSVG = () => {
  return (
    <svg viewBox="0 -28 512.00002 512" width="16px" height="16px" xmlns="http://www.w3.org/2000/svg"><path d="m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0"/></svg>
  )
}

class ViewArticle extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      content: null,
      data: {},
      isLoading: !!(props.match.params.diaryId) ? true : false,
      diaryId: !!(props.match.params.diaryId) ? props.match.params.diaryId : ''
    }

    this.toggleFav = this.toggleFav.bind(this);
  }
  componentDidMount() {
    fetch('http://localhost:3000/api/diaries/'+ this.state.diaryId).then(val => val.json())
      .then(data => {
        const rawData = markdownToDraft(data.content);
        const contentState = convertFromRaw(rawData);
        const editorState = EditorState.createWithContent(contentState);

        this.setState({
          content: editorState,
          data: data,
          isLoading: false
        })
      })
      .catch(function(err) {
        this.setState({
          isLoading: false
        })
        console.log('Fetch Error :-S', err);
      });
  }

  toggleFav() {
    fetch('http://localhost:3000/api/diaries/'+ this.state.diaryId , {
      method: 'PUT',
      body: JSON.stringify({
        favorite: !this.state.data.favorite
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(val => val.json())
    .then(data => {
      this.setState({
        data: data
      })
    }).catch(err => {
      console.error("API ERROR", err)
    })
  }
  
  render() { 
    const { data, isLoading } = this.state;
    return ( 
      <>
        {
          isLoading ? <Loading /> :
          <div>
            <DiaryTitle>{data.title}</DiaryTitle> 
            <DiaryPreviewOption>
              <DiaryDate>Last Modified: <DateFormat format="dddd Do MMMM hh:mm">{data.updated_at}</DateFormat></DiaryDate><EditButton to={`/directory/${this.state.diaryId}/edit`}>Edit</EditButton>
            </DiaryPreviewOption>
            <TextEditorPreview
              content={this.state.content}/>
            <FavButton 
              onClick={this.toggleFav} 
              fav={data.favorite}>
              <HeartSVG/>
            </FavButton>            
          </div>
        }
      </> 
    );
  }
}
 
export default ViewArticle;