import React from 'react';
import {useState} from 'react';
import User from '../User/User';
import './UsersList.css';
import Spinner from '../Common/Spinner';
import DetailedUser from '../DetailedUser/DetailedUser';



 


function UsersList(props){

    const {onUserClick,showUsers,onModelClose,isModelOpen,clickedUserDetails}=useUserListHook();
  
    return <div className="user-list-box" >
          <div className="all-users-box">
           { 
            (!props.usersData)?
             <Spinner/>:
              showUsers(props.usersData) 
             }
             </div>
             {
                 isModelOpen && 
                 <DetailedUser  userDetails={clickedUserDetails}  onModelClose={onModelClose} /> 
             }
     </div>
}



function useUserListHook()
{
    const [isModelOpen,isModelOpenChange]=useState(false);
    const [clickedUserDetails,clickedUserDetailsChange]=useState(null);


    const  onUserClick=(user)=>
    { 
       isModelOpenChange(true);
       clickedUserDetailsChange(user);
     }
 
     
     const showUsers=(usersData)=>
     {
      return usersData.map((user)=>{
          return <div> <User  onUserClick={onUserClick}  userDetails={user}  /> </div>
      });
     }
 
  const onModelClose=()=>
   {
     isModelOpenChange(false);
   }

   return {onUserClick,showUsers,onModelClose,isModelOpen,clickedUserDetails};

}


export default UsersList;