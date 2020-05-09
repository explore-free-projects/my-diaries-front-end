import React, { Component } from 'react';
import { Editor } from 'draft-js';
import { myBlockStyleFn } from "./TextEditorUtils";

class TextEditorPreview extends Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return ( 
      <Editor 
        editorState={this.props.content} 
        blockStyleFn={myBlockStyleFn}
        readOnly={true} />
    );
  }
}
 
export default TextEditorPreview;