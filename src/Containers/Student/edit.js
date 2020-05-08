import  React , {Component} from 'react';

import edit from './edit'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';

const Edit=(props)=>{



 
console.log(props)

    
 const onChange=(e)=>{
   const {name,value} = e.target
   const {studentData}=props
props.studentData[name]=value
console.log("***********************************",name)
 }
 
    
    
    return(


   
<Modal isOpen={props.modal}   className={props.className}>
          <ModalHeader>Modal title</ModalHeader>
          <ModalBody>
          
<label>Id:</label><br/>
<input type="Number"  name="Id" placeholder="Id"  value={props.studentData.Id}/><br/>
<label>First Name:</label><br/>
      <input type="Text" name="First_Name"  onChange={(e)=>{onChange(e)}} placeholder="First Name" value={props.studentData.First_Name}/><br/>
      <label>Last Name:</label><br/>
      <input type="Text" name="Last_Name"  onChange={(e)=>{onChange(e)}} placeholder="Last Name" value={props.studentData.Last_Name} /><br/>
      <label>Aggregate Mark:</label><br/>
      <input type="Number" name="Aggregate_Mark" onChange={(e)=>{onChange(e)}} placeholder="Aggregate Mark"  value={props.studentData.Aggregate_Mark}/><br/>
 
          </ModalBody>
          <ModalFooter>
            {/* <Button color="primary" onClick={()=>{savehandler(studentData)}}>Save</Button>{' '}
            <Button color="secondary" onClick={()=>{cancel()}}>Cancel</Button> */}
           
          </ModalFooter>
        </Modal>
    )}
const mapStateToProps=state=>{
    console.log(">>>>>>",state)
    return{
        studentout:state.studentList,
        modal:state.modal,
        studentData:state.selectedStudent



    }
    
}

export default connect(mapStateToProps)(Edit)