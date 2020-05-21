import  React , {Component} from 'react';

import edit from './edit'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { connect } from 'react-redux';
import Allert from './Alert'
import { deleteStudent,editStudent,editNew, Change } from '../Redux/Action';
import { render } from '@testing-library/react';
const Edit=(props)=>{
console.log(props)


 




    
    return(


   <div>
<Modal isOpen={props.modal}   >
          <ModalHeader>Modal title</ModalHeader>
          <ModalBody>
          
<label>Id:</label><br/>
<input type="Number"  name="Id"  onChange={(e)=>{props.handleChangeInput(e)}} value={props.selected.Id} placeholder="Id"  /><br/>
<label>First Name:</label><br/>
      <input type="Text" name="First_Name"  onChange={(e)=>{props.handleChangeInput(e)}}  value={props.selected.First_Name} placeholder="First Name" /><br/>
      <label>Last Name:</label><br/>
      <input type="Text" name="Last_Name"  onChange={(e)=>{props.handleChangeInput(e)}}  value={props.selected.Last_Name} placeholder="Last Name"  /><br/>
      <label>Aggregate Mark:</label><br/>
      <input type="Number" name="Aggregate_Mark" onChange={(e)=>{props.handleChangeInput(e)}}  value={props.selected.Aggregate_Mark} placeholder="Aggregate Mark"  /><br/>

          </ModalBody>
          <ModalFooter>
             <Button color="primary" onClick={()=>{props.Save()}}>Save</Button>{' '}
            <Button color="secondary" onClick={()=>{props.cancel()}}>Cancel</Button> 
           
          </ModalFooter>
          
        </Modal>

{/* <Allert/> */}
</div>
    )
  }



export default Edit