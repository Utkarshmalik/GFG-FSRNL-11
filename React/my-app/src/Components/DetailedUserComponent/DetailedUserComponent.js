import React from 'react';
import {Modal,Button,Card} from 'react-bootstrap';
import './DetailedUserComponent.css';
import Spinner from '../Common/Spinner';


class ModelComp extends React.Component 
{
    constructor()
    {
        super();

    }

  

    render(){
        console.log(this.props);

        const {firstName,lastName,picture,gender,email,dateofbirth,phone}=this.props.user;
    return (
     <div>
      <Card className="card" >
  <Card.Img className="card-image" variant="top" src={picture} />
  <Card.Body>
    <Card.Title> {firstName+ " "+lastName}</Card.Title>
    <Card.Text>
     <p>{dateofbirth}</p>
     <p>{email}</p>
     <p>{gender}</p>
     <p>{phone}</p>


    </Card.Text>
    <Button variant="primary">Refer</Button>
  </Card.Body>
</Card>

  </div>
  );
  }
}

export default ModelComp;