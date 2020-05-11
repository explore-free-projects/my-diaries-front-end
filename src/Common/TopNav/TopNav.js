import React, { Component } from 'react';
import styled from 'styled-components'
import { withRouter } from "react-router";

const Header = styled.header `
  position: fixed;
  left: 280px;
  top: 0;
  right: 0;
  display: inline-block;
  box-shadow: 0 0 4px 0px #ddd;
  background-color: white;
  z-index: 2;
  height: 68px;
  padding: 0 24px;
`;

const Row = styled.div `
  display: flex;
  align-items: center;
  height: 100%;

  > div {
    flex: 1
  }
`; 

const HeaderTitle = styled.label `
  font-size: 18px;
  letter-spacing: 0.3px;
  font-weight: 500;
  text-transform: capitalize;
`;

function pageTitleManipulate(paths) {
  let sperateStr = paths.pathname.split("/")[1];
  let captalize = sperateStr.charAt(0).toUpperCase() + sperateStr.slice(1)

  document.title = `${captalize} - My diaries`;

  return captalize;
}

class TopNav extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: pageTitleManipulate(props.history.location)
   }
  }

  changeTitle = (newTitle) => { 
    this.setState({
      title: newTitle
    })
  }

  componentDidMount(){
    this.props.history.listen(() => {
      let title = pageTitleManipulate(this.props.history.location);
      this.changeTitle(title);
    })
  }
  
  render() { 
    return (  
      <Header>
        <Row>
          <div>
            <HeaderTitle>{this.state.title}</HeaderTitle>
          </div>
          <div>

          </div>
        </Row>
      </Header>  
    );
  }
}
 
export default withRouter(TopNav);