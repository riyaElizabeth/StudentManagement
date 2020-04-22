import  React , {Component} from 'react';
import edit from './edit'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Edit=(props)=>{



 
console.log(props)

    const {studentData,modal} = props
 
 
    
    
    return(


   
<Modal isOpen={modal}   className={props.className}>
          <ModalHeader>Modal title</ModalHeader>
          <ModalBody>
          
<label>Id:</label><br/>
<input type="Number"  name="Id" placeholder="Id" onChange={(e)=>{props.onChange(e)}} value={studentData.Id}/><br/>
<label>First Name:</label><br/>
      <input type="Text" name="First_Name"  onChange={(e)=>{props.onChange(e)}} placeholder="First Name" value={studentData.First_Name}/><br/>
      <label>Last Name:</label><br/>
      <input type="Text" name="Last_Name"  onChange={(e)=>{props.onChange(e)}} placeholder="Last Name" value={studentData.Last_Name} /><br/>
      <label>Aggregate Mark:</label><br/>
      <input type="Number" name="Aggregate_Mark" onChange={(e)=>{props.onChange(e)}} placeholder="Aggregate Mark"  value={studentData.Aggregate_Mark}/><br/>
 
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={()=>{props.saveHandler(studentData)}}>Save</Button>{' '}
            <Button color="secondary" onClick={()=>{props.cancel()}}>Cancel</Button>
           
          </ModalFooter>
        </Modal>
        
 )}

 

export default Edit