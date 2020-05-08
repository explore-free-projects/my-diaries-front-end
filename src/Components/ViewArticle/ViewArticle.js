import React, { Component } from 'react';
import { convertFromRaw, EditorState, Editor } from 'draft-js';
import { markdownToDraft } from 'markdown-draft-js';
import { Loading } from 'components';

class ViewArticle extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: '',
      content: null,
      isLoading: !!(props.match.params.diaryId) ? true : false,
      diaryId: !!(props.match.params.diaryId) ? props.match.params.diaryId : ''
    }
  }
  componentDidMount() {
    fetch('http://localhost:3000/api/diaries/'+ this.state.diaryId).then(val => val.json())
      .then(data => {
        const rawData = markdownToDraft(data.content);
        const contentState = convertFromRaw(rawData);
        const editorState = EditorState.createWithContent(contentState);

        this.setState({
          content: editorState,
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
  
  render() { 
    return ( 
      <>
        {
          this.state.isLoading ? <Loading /> :
          <div>
            <h1>{this.state.title}</h1>
            <Editor editorState={this.state.content} readOnly={true} />
          </div>
        }
      </> 
    );
  }
}
 
export default ViewArticle;