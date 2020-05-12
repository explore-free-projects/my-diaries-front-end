import React, { Component } from 'react';
import styled from 'styled-components';
import { LocalStorage } from 'utils';
import { withRouter } from "react-router";

const localStore = LocalStorage();

const LoginForm = styled.form `
  padding: 10px;
  width: 320px;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 50%;
  transform: translateY(-54%);

  > button {
    width: 100%;
    padding: 7px 0;
    border-radius: 4px;
    background-color: #035b96;
    font-size: 14px;
    font-weight: 500;
    color: white;
    border: none;
    outline: 0;
    cursor: pointer;
  }
`;

const LoginInput = styled.input `
  padding: 4px 10px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 14px;
  line-height: 21px;
  outline: 0;
`;

const Logo = styled.h1 `
  font-size: 33px;
  color: #333;
  text-decoration: none;
  font-weight: 700;
  display: inline-block;
  margin-bottom: 28px;
  text-align: center;
  margin: auto;
  display: block;
  line-height: 72px;
`;

const InputLabel = styled.label `
  font-size: 14px;
  display: block;
  margin-bottom: 6px;
`;

const LoginInputGroup = styled.div `
  margin-bottom: 20px
`;

class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: 'demo',
      password: 'demo'
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let JWT = localStore.getName("jwt");
    if(JWT === "true"){
      this.props.history.push("directory");
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const { username, password } = this.state;
    if( username === "demo" && password === "demo" ) {
      localStore.setName("jwt", "true")
      this.props.history.push("directory");
    }
  }

  render() { 
    return ( 
      <LoginForm onSubmit={this.handleSubmit}>
        <Logo>My Diaries</Logo>
        <LoginInputGroup>
          <InputLabel>Username</InputLabel>
          <LoginInput type="text" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})}/>
        </LoginInputGroup>
        <LoginInputGroup>
          <InputLabel>Password</InputLabel>
          <LoginInput type="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/>
        </LoginInputGroup>
        <button type="submit">Login</button>
      </LoginForm>
    );
  }
}
 
export default withRouter(Login);