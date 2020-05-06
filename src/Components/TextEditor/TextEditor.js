import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Editor, RichUtils } from 'draft-js';
import { BlockStyleControls, InlineStyleControls, customStyle } from "./TextEditorUtils";

const EditorWrapper = styled.div `
  border: 1px solid #6497b1;
  min-height: 140px;
  padding: 10px;
  border-radius: 2px;
  margin-top: 10px;
  margin-bottom: 20px;

  .public-DraftEditorPlaceholder {
    &-root {
      position: relative;
    }
    &-inner{
      position: absolute;
      left: 0;
      z-index: -1;
      color: #757575;
    }
  }
`;

const EditorControls = styled.div `
  margin-top: 20px;
`;

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  render() { 
    const { editorState, onChange } = this.props;
    return (
      <>
        <EditorControls>
          <BlockStyleControls
            editorState={editorState}
            onToggle={blockType => {
              const newState = RichUtils.toggleBlockType(editorState, blockType);
              onChange(newState)
            }}
          />
          <InlineStyleControls
            editorState={editorState}
            onToggle={inlineStyle => {
              const newState = RichUtils.toggleInlineStyle(
                editorState,
                inlineStyle,
              );
              onChange(newState);
            }}
          />
        </EditorControls>
        <EditorWrapper>
          <Editor
            placeholder="Tell your story"
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={onChange}
            customStyleMap={customStyle}
          />
        </EditorWrapper>
      </>
    );
  }
}

TextEditor.propTypes = {
  editorState: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextEditor;