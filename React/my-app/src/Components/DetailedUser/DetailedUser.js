import React from 'react';
import {Modal,Button} from 'react-bootstrap';
import './DetailedUser.css';
import Spinner from '../Common/Spinner';
import DetailedUserComponent from '../DetailedUserComponent/DetailedUserComponent';


class ModelComp extends React.Component 
{
    constructor()
    {
        super();

        this.state={isLoading:true,currentUser:null};
    }


    componentDidMount()
    {
        const url=`https://dummyapi.io/data/v1/user/${this.props.userDetails.id}`

        fetch(url,{
            headers:{"app-id":"61ed31db887c0138889d09ee"}
        }).then(data=>data.json())
        .then(userDetails=>{
            this.setState({isLoading:false,currentUser:userDetails})
        })
    }


    render(){
        console.log(this.props);
    return (
        <div className="modal">
            <div className="modal-inner">
            <Modal show={true}>
            <Modal.Header closeButton>
            <Modal.Title> Complete user details for {this.props.userDetails.firstName} </Modal.Title>
          </Modal.Header>
          <div className="modal-body">
             {
                 (this.state.isLoading)?<Spinner/>:
                 <DetailedUserComponent user={this.state.currentUser}  />
             }

           </div>
           <Modal.Footer>
            <Button onClick={()=>this.props.onModelClose()} variant="secondary">
              Close
            </Button>
          </Modal.Footer>
            </Modal>
            </div>
  </div>
  );
  }
}

export default ModelComp;