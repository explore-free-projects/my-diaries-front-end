import React from 'react';
import styled from 'styled-components';

const LoaderWrapper = styled.div `
  position: absolute;
  left: 0;
  right: 0;
  top: 30%;
  bottom: 0;
  margin: auto;
  width: 100px;
  text-align: center;
`;

const LoaderContent = styled.h6 `
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.6px;
  margin: 16px 0 0;
`;

export default function Loading() {
  return (
    <LoaderWrapper>
      <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 50 50" space="preserve">
          <path fill="#031e4b" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
          <animateTransform attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="0.7s"
            repeatCount="indefinite"/>
          </path>
      </svg>
      <LoaderContent>Please wait...</LoaderContent>
    </LoaderWrapper>
  )
}