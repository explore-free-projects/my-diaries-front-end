import React, { Component } from 'react';
import style from './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 

    return ( 
      <button className={style.btn}>
        Test
      </button>
    );
  }
}
 
export default Button;