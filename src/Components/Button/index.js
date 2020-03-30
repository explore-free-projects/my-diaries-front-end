import React, { Component } from 'react';
import styles from './button.css'

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <button className={styles.error}>
        Button
      </button>
     );
  }
}
 

export default Button;