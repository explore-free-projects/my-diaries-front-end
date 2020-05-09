import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: system, -apple-system, ".SFNSText-Regular", "San Francisco", "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif;
    background-color: #fbfbfb;
    font-size: 1rem;
  }
  .draftjs-block-quote-style {
    color: #b5b5b5;
    font-family: 'Hoefler Text',Georgia,serif;
    text-align: left;
    border-left: 3px solid #b5b5b5;
    margin: 0;
    padding: 16px 10px 16px 20px;
    letter-spacing: 0.7px;
  }

  .draftjs-code-style {
    background-color: rgba(0, 0, 0, 0.05);
    font-family: "Inconsolata", "Menlo", "Consolas", monospace;
    font-size: 14px;
    padding: 10px;
    border-radius: 4px;
    white-space: normal;
    word-break: break-word;
    display: inline-block;
  }
`;


export default GlobalStyle;