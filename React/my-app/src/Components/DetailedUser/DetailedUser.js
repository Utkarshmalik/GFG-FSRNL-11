import {Modal,Button} from 'react-bootstrap';
import './DetailedUser.css';

function ModelComp(props)
{
    return (
        <div class="model">
    <Modal.Dialog>
    <Modal.Header closeButton>
      <Modal.Title>{props.userDetails.id}</Modal.Title>
    </Modal.Header>
  
    <Modal.Body>
      <p>Modal body text goes here.</p>
    </Modal.Body>
  
    <Modal.Footer>
      <Button onClick={props.onModelClose} variant="secondary">Close</Button>
      <Button  variant="primary">Save changes</Button>
    </Modal.Footer>
  </Modal.Dialog>
  </div>
  );
}

export default ModelComp;