import {Form,FloatingLabel,Button} from 'react-bootstrap';
import React from 'react';
import './LoginForm.css';


class  LoginForm extends React.Component
{
    constructor(props)
    {
        console.log(props);
        console.log("inside constructor");
        super();
        this.state={email:"",password:""};
    }

    onEmailChange(event)
    {
      const inputValue=event.target.value;
      this.setState({email:inputValue});
    }

    onPasswordChange(event)
    {
      const inputValue=event.target.value;
      this.setState({password:inputValue});
    }




render(){
    
    return (
        <div className="loginForm">
            <h1>Hey, Login to continue</h1>
    <div className="loginFormComponent">
    <FloatingLabel
    controlId="floatingInput"
    label="Email address"
    className="mb-3"
  >
    <Form.Control type="email" onChange={(e)=>this.onEmailChange(e)} value={this.state.email} placeholder="name@example.com" />
  </FloatingLabel>
  <FloatingLabel controlId="floatingPassword" label="Password">
    <Form.Control type="password" onChange={(e)=>this.onPasswordChange(e)} value={this.state.password} placeholder="Password" />
  </FloatingLabel>
  <Button onClick={()=>this.props.onLoginHandler(this.state.email,this.state.password)} className="loginButton"  variant="primary">Login</Button>
  </div>
  </div>
    )
}

}


export default LoginForm;