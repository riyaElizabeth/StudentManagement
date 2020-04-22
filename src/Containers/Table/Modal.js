
import React , {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends Component {
  return(){
  <div >
  {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
<Modal isOpen={this.state.modal}  className={this.props.className}>
    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
    <ModalBody>
   
<label>Id:</label><br/>
<input type="Number"  name="id" placeholder="Id" onChange={this.onnewId} value={this.state.Id}/><br/>
<label>First Name:</label><br/>
<input type="Text" name="first_Name" onChange={this.onnewfirstName} placeholder="First Name" value={this.state.first_Name}/><br/>
<label>Last Name:</label><br/>
<input type="Text" name="last_Name" onChange={this.onnewlastName} placeholder="Last Name" value={this.state.last_Name} /><br/>
<label>Aggregate Mark:</label><br/>
<input type="Number" name="aggregate_Mark" onChange={this.onnewmarkhange} placeholder="Aggregate Mark"  value={this.state.aggregate_Mark}/><br/>

    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={this.save}>Save</Button>{' '}
      <Button color="secondary" onClick={this.toggle}>Cancel</Button>
     
    </ModalFooter>
  </Modal>
</div> 
  }
}
export default ModalExample;