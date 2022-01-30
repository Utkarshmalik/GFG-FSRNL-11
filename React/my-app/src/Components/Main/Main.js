import React from 'react';
import './Main.css'
import UsersList from '../UsersList/UsersList';
import { filter } from 'async';


class Main extends React.Component
{

    constructor()
    {
        super();

        this.state={textFieldValue:"",usersData:null,allUsers:null}

    }

    onInputChange(e)
    {
        const inputValue=e.target.value.toLowerCase();

        this.setState({textFieldValue:inputValue});

        //filter the usersData array 

        const filteredUsersData=this.state.allUsers.filter((user)=>{

            return user.firstName.toLowerCase().startsWith(inputValue);
        })


        //change the state 
        this.setState({usersData:filteredUsersData});
    }

    componentDidMount()
    {
      fetch("https://dummyapi.io/data/v1/user?limit=90",{
          headers:{
              "app-id":"61ed31db887c0138889d09ee"
          }
      }).then(data=>data.json())
      .then(users=>{
        
        this.setState({usersData:users.data,allUsers:users.data});

      })
    }


    render(){
    return <div className="main">

<div className="head-box">
        <h2>Users</h2>
        </div>

        <div className="search-box">
            <input onChange={(e)=>this.onInputChange(e)}  style={{width:"100%"}} type="text" value={this.state.textFieldValue} />
        </div>

        <UsersList usersData={this.state.usersData} />
    </div>
    }

}

export default Main;