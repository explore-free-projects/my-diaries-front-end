import React from 'react';
import styled from 'styled-components';

const IconButton = styled.button `
  padding: 6px;
  border-radius: 4px;
  margin: 0px 4px;
  font-weight: 600;
  background-color: ${({isActiveState}) => (isActiveState === true) ? "#031d4b": "#b3cce0"};
  color: ${({isActiveState}) => (isActiveState === true) ? "white": "#333"};
  border: none;
  cursor: pointer;

  &:first-child {
    margin-left: 0
  }
  
  &:last-child {
    margin-right: 0
  }
`;

const BLOCK_TYPES = [
  {label: 'H1', style: 'header-one'},
  {label: 'H2', style: 'header-two'},
  {label: 'H3', style: 'header-three'},
  {label: 'H4', style: 'header-four'},
  {label: 'H5', style: 'header-five'},
  {label: 'H6', style: 'header-six'},
  {label: 'Blockquote', style: 'blockquote'},
  {label: 'UL', style: 'unordered-list-item'},
  {label: 'OL', style: 'ordered-list-item'},
  {label: 'Code Block', style: 'code-block'}
];

const INLINE_STYLES = [
  {label: 'Bold', style: 'BOLD'},
  {label: 'Italic', style: 'ITALIC'},
  {label: 'Underline', style: 'UNDERLINE'}
];

const StyleButton = ({onToggle, active, label, style}) => {
  return (
    <IconButton
      isActiveState={active}
      onMouseDown={e => {
        e.preventDefault();
        onToggle(style);
      }}>
      {label}
    </IconButton>
  );
}

const customStyle = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

const BlockStyleControls = ({editorState, onToggle})  => {
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <>
      {BLOCK_TYPES.map(type => (
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={onToggle}
          style={type.style}
        />
      ))}
    </>
  );
}

const InlineStyleControls = ({editorState, onToggle}) => {
  const currentStyle = editorState.getCurrentInlineStyle();
  return (
    <>
      {INLINE_STYLES.map(type => (
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={onToggle}
          style={type.style}
        />
      ))}
    </>
  );
};

function myBlockStyleFn (contentBlock) {
  const type = contentBlock.getType();
  if (type === 'blockquote') {
    return 'block-quote-style';
  }
}


export {
  InlineStyleControls,
  BlockStyleControls,
  customStyle,
  myBlockStyleFn
}