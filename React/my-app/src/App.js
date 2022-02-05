import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import LoginForm from './Components/LoginForm/LoginForm';


class App extends Component{

  constructor()
  {
    super();
    this.state={currentlyLoggedInUser:null};  
  }



   onLogin(email,password)
  {
    const user={email,password};

    this.validateCredentials(user).then((userData)=>{
      this.setState({currentlyLoggedInUser:userData});
    })
    .catch(err=>{
      console.log(err);
    })
  
  }


  validateCredentials(user) {

    const correctCredentials={email:"user@gmail.com",password:"qwerty123"};

    
      return new Promise((resolve,reject)=>{

        if(correctCredentials.email===user.email && correctCredentials.password===user.password)
        {
          resolve(user);;
        }

        reject("OOPS! invalid credentials");

      })
    
  }


  render()
  {
    return (
      <div>
        {
          (this.state.currentlyLoggedInUser)?
            <>
            <Header/>
            <Main/>
            <Footer/>
            </>:
          <LoginForm onLoginHandler={this.onLogin.bind(this)} />
        }
      </div>
    );
    
  }

}

export default App;
