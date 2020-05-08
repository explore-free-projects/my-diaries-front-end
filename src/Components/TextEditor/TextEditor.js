import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Editor, RichUtils } from 'draft-js';
import { BlockStyleControls, InlineStyleControls, customStyle, myBlockStyleFn } from "./TextEditorUtils";

const EditorWrapper = styled.div `
  border: 1px solid #6497b1;
  min-height: 140px;
  padding: 10px;
  border-radius: 2px;
  border-top-left-radius: 0px;
  margin-bottom: 24px;

  .block-quote-style {
    color: #b5b5b5;
    font-family: 'Hoefler Text',Georgia,serif;
    text-align: left;
    border-left: 3px solid #b5b5b5;
    margin: 0;
    padding: 16px 10px 16px 20px;
    letter-spacing: 0.7px;
  }

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
  margin-bottom: 20px;
`;

const EditorTab = styled.div `
  margin-top: 20px;
`;

const EditorTabItem = styled.button `
  padding: 8px 14px;
  border-color: #6497b1;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  margin: 0 5px;
  font-size: 14px;
  font-weight: 500;
  outline: 0;
  position: relative;
  top: 1px;
  cursor: pointer;

  &.is-active {
    border-bottom-color: white;
  }

  &:first-child {
    margin-left: 0
  }

  &:last-child {
    margin-right: 0
  }
`;

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorPreview: false
    }
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.props.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  showEditorPreview (editorPreview = true) {
    this.setState({
      editorPreview: editorPreview 
    })
  }

  render() { 
    const { editorState, onChange } = this.props;
    const { editorPreview } = this.state;
    return (
      <>
        <EditorTab>
          <EditorTabItem onClick={() => this.showEditorPreview(false)} className={editorPreview === false ? "is-active": "un-active"}>Editor</EditorTabItem>
          <EditorTabItem onClick={() => this.showEditorPreview(true)} className={editorPreview === true ? "is-active": "un-active"}>Preview</EditorTabItem>
        </EditorTab>
        <EditorWrapper>
        {editorPreview ? 
          <Editor 
          editorState={editorState} 
          readOnly={true} />
          :
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
              <Editor
                placeholder="Tell your story"
                blockStyleFn={myBlockStyleFn}
                editorState={editorState}
                handleKeyCommand={this.handleKeyCommand}
                onChange={onChange}
                customStyleMap={customStyle}
              />
            </>
          }
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