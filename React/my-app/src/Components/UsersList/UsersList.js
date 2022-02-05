import React from 'react';
import User from '../User/User';
import './UsersList.css';
import Spinner from '../Common/Spinner';
import DetailedUser from '../DetailedUser/DetailedUser';


class UsersList extends React.Component
{
    constructor()
    {
        super();
        this.state={isModelOpen:false,clickedUserDetails:null}

    }

  onUserClick(user)
  {
      this.setState({isModelOpen:true,clickedUserDetails:user});
  }

  onModelClose()
  {
      console.log("on model closr");
    this.setState({isModelOpen:false});
  }

 showUsers()
 {
     return this.props.usersData.map((user)=>{
         return <div> <User  onUserClick={this.onUserClick.bind(this)}  userDetails={user}  /> </div>
     });
 }

  

    render(){
    return <div className="user-list-box" >

        <div className="all-users-box">
        { 
        (!this.props.usersData)?
        <Spinner/>:
        this.showUsers() 
        }
        </div>
        {
            this.state.isModelOpen && 
            <DetailedUser  userDetails={this.state.clickedUserDetails}  onModelClose={this.onModelClose.bind(this)} />
        
        }
    </div>
    }
}


export default UsersList;