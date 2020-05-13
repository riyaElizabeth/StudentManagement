import  React , {Component} from 'react';

import edit from './edit'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { deleteStudent,editStudent,editNew, Change } from '../Redux/Action';
import { render } from '@testing-library/react';
const Edit=(props)=>{
console.log(props)


 




    
    return(


   
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
  */}
          </ModalBody>
          <ModalFooter>
             <Button color="primary" onClick={()=>{this.props.Save(this.props.selectedStudent)}}>Save</Button>{' '}
            {/* <Button color="secondary" onClick={()=>{cancel()}}>Cancel</Button>  */}
           
          </ModalFooter>
        </Modal>
    )}
const mapStateToProps=(state)=>{
    console.log("STATE IN MODAL",state)
    return{
        studentout:state.students,
     //   modal:state.modal,
       // selectedStudent:state.selectedStudent,
        selectedId:state.selectedId



    }
    
}
const mapDispatchToProps=(dispach)=>{
  return{
     
      Save:(newStudent)=>dispach(editNew(newStudent))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Edit)