import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from "react-router";
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { draftToMarkdown, markdownToDraft } from 'markdown-draft-js';
import { TextEditor, Loading } from "components";

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
  margin-bottom: 24px;
`;

const Button = styled.button `
  padding: 8px 22px;
  background-color:  ${({isPrimary}) => isPrimary ? "#05386c" : "#b3cde0" };
  color: ${({isPrimary}) => isPrimary ? "white" : "#333" };
  border: none;
  font-size: 14px;
  min-width: 80px;
  border-radius: 16px;
  outline: 0;
  transition: ease 0.3s;
  cursor: pointer;

  ~ button {
    margin-left: 10px;
  }

  &:hover {
    background-color: ${({isPrimary}) => isPrimary ? "#0b4c8e" : "#bdd7ea" };
    transition: ease 0.3s;
  }
`;


const FormLabel = styled.label `
  font-size: 14px;
  letter-spacing: 0.4px;
  margin-bottom: 8px;
  display: inline-block;
  font-weight: 500;
  color: #333;
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

    this.handleSubmit = this.handleSubmit.bind(this);
    this.goToDirectory = this.goToDirectory.bind(this)
  }

  componentDidMount() {
    if(this.state.diaryId) {
      fetch('http://localhost:3000/api/diaries/'+ this.state.diaryId)
        .then(val => val.json())
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
        content: markdownString
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(val => val.json())
    .then(data => {
      this.props.history.push("/directory/"+data._id)
    }).catch(err => {
      console.error("API ERROR", err)
    })
  }

  goToDirectory() {
    this.props.history.push("/directory")
  }

  render() { 
    const { title, editorState, isLoading } = this.state;

    return ( 
      <>
        {
          isLoading ? 
            <Loading />
          :
          <div>
            <FormLabel>Story title</FormLabel>
            <Title 
              value={title}
              onChange={(e) => this.setState({ title:e.target.value})}
              placeholder="Title"
              />
            <FormLabel>Story description</FormLabel>
            <TextEditor
              editorState={editorState}
              onChange={(editorState) => this.setState({editorState})}
            />
            <Button isPrimary type="submit" onClick={this.handleSubmit}>Save</Button>
            <Button isSecondary onClick={this.goToDirectory}>Cancel</Button>
          </div>
        }
      </>
    );
  }
}
 
export default withRouter(NewArticle);