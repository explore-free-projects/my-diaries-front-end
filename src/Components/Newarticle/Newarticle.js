import React, { Component } from 'react';
import styled from 'styled-components';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { draftToMarkdown, markdownToDraft } from 'markdown-draft-js';
import { TextEditor, Loading } from "components";

const NewArticleWrapper = styled.div `
  max-width: 740px;
`;

const Title = styled.input.attrs({
  type: "text"
}) `
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #6497b1;
  display: inline-block;
  box-sizing: border-box;
  font-size: 14px;
  outline: 0;
`;

const SubmitButton = styled.button `
  padding: 9px 28px;
  background-color: #05386c;
  color: white;
  border: none;
  font-size: 1em;
  min-width: 80px;
  border-radius: 16px;
  outline: 0;
  transition: ease 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #0b4c8e;
    transition: ease 0.3s;
  }
`;

class NewArticle extends Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      title: '',
      editorState: EditorState.createEmpty(),
      isLoading: !!(props.match.params.diaryId) ? true : false,
      diaryId: !!(props.match.params.diaryId) ? props.match.params.diaryId : ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    if(this.state.diaryId) {
      fetch('http://localhost:3000/api/diaries/'+ this.state.diaryId).then(val => val.json())
        .then(data => {
          const rawData = markdownToDraft(data.content);
          const contentState = convertFromRaw(rawData);
          const newEditorState = EditorState.createWithContent(contentState);

          this.setState({
            editorState: newEditorState,
            title: data.title,
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
  }

  handleSubmit(e) {
    const content = this.state.editorState.getCurrentContent();
    const rawObject = convertToRaw(content);
    const markdownString = draftToMarkdown(rawObject);
    
    fetch('http://localhost:3000/api/diaries/'+ this.state.diaryId , {
      method: !!(this.state.diaryId) ? 'PUT' : 'POST',
      body: JSON.stringify({
        title: this.state.title,
        content: markdownString,
        favorite: true
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
  }

  render() { 
    const { title, editorState, isLoading } = this.state;

    return ( 
      <>
        {
          isLoading ? 
            <Loading />
          :
          <NewArticleWrapper>
            <Title 
              value={title}
              onChange={(e) => this.setState({ title:e.target.value})}
              placeholder="Title"
              />
            <TextEditor
              editorState={editorState}
              onChange={(editorState) => this.setState({editorState})}
            />
            <SubmitButton type="submit" onClick={this.handleSubmit}>Save</SubmitButton>
          </NewArticleWrapper>
        }
      </>
    );
  }
}
 
export default NewArticle;