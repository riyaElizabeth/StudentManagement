import  React , {Component} from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Navigation from './nav';

const Edit=(props)=>{



 
console.log(props)

    const {studentData,modal,handleInputChange,savehandler,cancel} = props
 
 
    
    
    return(
      <div>
 

   
<Modal isOpen={modal}   className={props.className}>
          <ModalHeader>Modal title</ModalHeader>
          <ModalBody>
          
<label>Id:</label><br/>
<input type="Number"  name="Id" placeholder="Id" onChange={(e)=>{handleInputChange(e)}} value={studentData.Id}/><br/>
<label>First Name:</label><br/>
      <input type="Text" name="First_Name"  onChange={(e)=>{handleInputChange(e)}} placeholder="First Name" value={studentData.First_Name}/><br/>
      <label>Last Name:</label><br/>
      <input type="Text" name="Last_Name"  onChange={(e)=>{handleInputChange(e)}} placeholder="Last Name" value={studentData.Last_Name} /><br/>
      <label>Aggregate Mark:</label><br/>
      <input type="Number" name="Aggregate_Mark" onChange={(e)=>{handleInputChange(e)}} placeholder="Aggregate Mark"  value={studentData.Aggregate_Mark}/><br/>
 
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={()=>{savehandler(studentData)}}>Save</Button>{' '}
            <Button color="secondary" onClick={()=>{cancel()}}>Cancel</Button>
           
          </ModalFooter>
        </Modal>
        </div>
 )}

 

export default Edit





