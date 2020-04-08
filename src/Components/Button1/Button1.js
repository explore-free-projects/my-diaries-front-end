import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button `
  font-size: 14px;
  padding: 10px;
  background-color: blue;
`;

class Button1 extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Button
        type={this.props.type}
        >
          Button
      </Button>
    );
  }
}

Button1.propTypes = {
  type: PropTypes.oneOf([1,2,3,4])
}

 
export default Button1;