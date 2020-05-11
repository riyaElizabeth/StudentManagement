import  React , {Component} from 'react';

import edit from './edit'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { deleteStudent,editStudent,editNew, Change } from '../Redux/Action';
import { render } from '@testing-library/react';
class Edit extends Component{

state={
 
}

 


    
handleChangeInput=(e)=>{
  const {name,value}=e.target
  const {selectedStudent}=this.props
  selectedStudent[name]=value
  this.props.Change(selectedStudent)
  
console.log("**",selectedStudent)
}
  render(){
    
    return(


   
<Modal isOpen={this.props.modal}   >
          <ModalHeader>Modal title</ModalHeader>
          <ModalBody>
          
<label>Id:</label><br/>
<input type="Number"  name="Id"  onChange={(e)=>{this.handleChangeInput(e)}} placeholder="Id"  /><br/>
<label>First Name:</label><br/>
      <input type="Text" name="First_Name"  onChange={(e)=>{this.handleChangeInput(e)}}  placeholder="First Name" /><br/>
      <label>Last Name:</label><br/>
      <input type="Text" name="Last_Name"  onChange={(e)=>{this.handleChangeInput(e)}}  placeholder="Last Name"  /><br/>
      <label>Aggregate Mark:</label><br/>
      <input type="Number" name="Aggregate_Mark" onChange={(e)=>{this.handleChangeInput(e)}}  placeholder="Aggregate Mark"  /><br/>
  */}
          </ModalBody>
          <ModalFooter>
             <Button color="primary" onClick={()=>{this.props.Save()}}>Save</Button>{' '}
            {/* <Button color="secondary" onClick={()=>{cancel()}}>Cancel</Button>  */}
           
          </ModalFooter>
        </Modal>
    )}}
const mapStateToProps=state=>{
    console.log(">>>>>>",state.selectedStudent)
    return{
        studentout:state.studentList,
        modal:state.modal,
        selectedStudent:state.selectedStudent,
        selectedId:state.selectedId



    }
    
}
const mapDispatchToProps=(dispach)=>{
  return{
      Change:(newStudent)=>dispach(Change(newStudent)),
      Save:()=>dispach(editNew())
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Edit)