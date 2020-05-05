import React, { Component } from 'react';
import { TextEditor } from "components";

class NewArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <TextEditor/>
    );
  }
}
 
export default NewArticle;