import React from 'react';
import styled from 'styled-components';
import { NavLink, withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(16).required()
});

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
    padding: 12px 0;
    border-radius: 4px;
    background-color: #035b96;
    font-size: 14px;
    font-weight: 500;
    color: white;
    border: none;
    outline: 0;
    cursor: pointer;
    margin-bottom: 20px;
    
    ~ span {
      font-size: 14px;
    }
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
  margin-bottom: 20px;

  > span {
    font-size: 12px;
    display: block;
    margin-top: 6px;
    color: #fb3c2e;
  }
`;

function SingupForm(props) {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  });

  const [validation, setValidation] = React.useState('');

  const onSubmit = (value) => { 
    fetch(`${API_URL}/user/signup`, {
      method: 'POST',
      body: JSON.stringify(value),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(val => val.json())
    .then(data => {
      if(data.status === 403){
        setValidation(data.message)
        return;
      }
      
      window.localStorage.setItem("jwt", data.token)
      props.history.push("directory");
    }).catch(err => {
      console.error("API ERROR", err)
    })

  }
  return (
    <LoginForm onSubmit={handleSubmit(onSubmit)}>
      <Logo>My Diaries</Logo>
      {validation && validation}
      <LoginInputGroup>
        <InputLabel>Name</InputLabel>
        <LoginInput 
          type="text"
          name="name"
          placeholder="name"
          ref={register}/>
          {errors.name && <span>{errors.name.message}</span>}
      </LoginInputGroup>
      <LoginInputGroup>
        <InputLabel>Email</InputLabel>
        <LoginInput 
          type="text"
          name="email"
          placeholder="Email"
          ref={register}/>
          {errors.email && <span>{errors.email.message}</span>}
      </LoginInputGroup>
      <LoginInputGroup>
        <InputLabel>Password</InputLabel>
        <LoginInput 
          type="password"
          name="password"
          placeholder="Password"
          ref={register}/>
          {errors.password && <span>{errors.password.message}</span>}
      </LoginInputGroup>
      <button type="submit">Create an account</button>
      <span>Already signed up? <NavLink to="/login">Login</NavLink></span>
    </LoginForm>
  )
}

export default withRouter(SingupForm);