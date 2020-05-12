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
  vertical-align: middle;
`;

const BackButton = styled.button `
  background-color: #ddd;
  padding: 7px 9px;
  border: none;
  vertical-align: middle;
  border-radius: 4px;
  margin-right: 8px;
  outline: 0;
  cursor: pointer;
`;


function pageTitleManipulate(paths) {
  let sperateStr = paths.pathname.split("/")[1];
  let captalize = sperateStr.charAt(0).toUpperCase() + sperateStr.slice(1)

  document.title = `${captalize} - My diaries`;

  return captalize;
}

const URLLength = (props) =>{
  return props.pathname.split("/").length >= 3
}

const SVGBackIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="10px" xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 492 492" space="preserve">
      <path d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12    C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084    c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864    l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"/>
    </svg>
  )
}

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: pageTitleManipulate(props.history.location),
      backButtom: URLLength(props.history.location)
    }

    this.goBackPrevPage = this.goBackPrevPage.bind(this);
  }

  changeTitle = (newTitle, backButton) => { 
    this.setState({
      title: newTitle,
      backButtom: backButton
    })
  }

  componentDidMount(){
    this.props.history.listen(() => {
      let title = pageTitleManipulate(this.props.history.location);
      let backOption = URLLength(this.props.history.location);
      this.changeTitle(title, backOption);
    })
  }

  goBackPrevPage() {
    this.props.history.goBack()
  }
  
  render() { 
    return (  
      <Header>
        <Row>
          <div>
            { this.state.backButtom && 
              <BackButton onClick={this.goBackPrevPage}><SVGBackIcon/></BackButton> 
            }
            <HeaderTitle> 
              {this.state.title}
            </HeaderTitle>
          </div>
          <div>

          </div>
        </Row>
      </Header>  
    );
  }
}
 
export default withRouter(TopNav);