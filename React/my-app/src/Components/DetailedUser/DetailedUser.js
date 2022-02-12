import React, { useState,useEffect } from 'react';
import {Modal,Button} from 'react-bootstrap';
import './DetailedUser.css';
import Spinner from '../Common/Spinner';
import DetailedUserComponent from '../DetailedUserComponent/DetailedUserComponent';


function ModelComp(props)
{
    const [isLoading,isLoadingChange]=useState(true);
    const [currentUser,changeCurrentUser]=useState(null);

    //componentDidMount

    useEffect(()=>{
        console.log("inside use effect");

        const url=`https://dummyapi.io/data/v1/user/${props.userDetails.id}`

        fetch(url,{
            headers:{"app-id":"61ed31db887c0138889d09ee"}
        }).then(data=>data.json())
        .then(userDetails=>{
            console.log(userDetails);
            changeCurrentUser(userDetails);
            isLoadingChange(false);
        })
    },[]);
    

    //initial Render + //every state update 

    console.log("inside function");

        return (
            <div className="modal">
                <div className="modal-inner">
                <Modal show={true}>
                <Modal.Header closeButton>
                <Modal.Title> Complete user details for {props.userDetails.firstName} </Modal.Title>
              </Modal.Header>
              <div className="modal-body">
                 {
                     (isLoading)?<Spinner/>:
                     <DetailedUserComponent user={currentUser}  />
                 }
    
               </div>
               <Modal.Footer>
                <Button onClick={()=>props.onModelClose()} variant="secondary">
                  Close
                </Button>
              </Modal.Footer>
                </Modal>
                </div>
      </div>
      );
    
}




export default ModelComp;