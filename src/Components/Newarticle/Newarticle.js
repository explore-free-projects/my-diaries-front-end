import React, { Component } from 'react';
import { TextEditor } from "components";
import styled from 'styled-components';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';

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
      newData: null
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    const rawState = JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()));
    // const convertedContent = convertFromRaw(storyContent);
  }

  render() { 
    const { title, editorState, convertedContent } = this.state;

    if(convertedContent){
      this.setState({editorState: convertContet})
    }
    return ( 
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
    );
  }
}
 
export default NewArticle;