import  React , {Component} from 'react';

import edit from './edit'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { deleteStudent,editStudent,editNew, Change } from '../Redux/Action';
import { render } from '@testing-library/react';
class Edit extends Component{

state={
  selectedStudent:{
    id:0,
    first_Name:'',
    last_Name:'',
    aggregate_Mark:''
},
}

 


    
handleChangeInput=(e)=>{
  console.log("***",e)
  const {name,value}=e.target
  const {selectedStudent}=this.props
  selectedStudent[name]=value

console.log("**",selectedStudent)
}
  render(){
    console.log("PROPS IN MODAL",this.props)
    return(


   
<Modal isOpen={this.props.modal}   >
          <ModalHeader>Modal title</ModalHeader>
          <ModalBody>
          
<label>Id:</label><br/>
<input type="Number"  name="Id"  onChange={(e)=>{this.handleChangeInput(e)}} value={this.props.selectedStudent.Id} placeholder="Id"  /><br/>
<label>First Name:</label><br/>
      <input type="Text" name="First_Name"  onChange={(e)=>{this.handleChangeInput(e)}}  placeholder="First Name" /><br/>
      <label>Last Name:</label><br/>
      <input type="Text" name="Last_Name"  onChange={(e)=>{this.handleChangeInput(e)}}  placeholder="Last Name"  /><br/>
      <label>Aggregate Mark:</label><br/>
      <input type="Number" name="Aggregate_Mark" onChange={(e)=>{this.handleChangeInput(e)}}  placeholder="Aggregate Mark"  /><br/>
  */}
          </ModalBody>
          <ModalFooter>
             <Button color="primary" onClick={()=>{this.props.Save(this.props.selectedStudent)}}>Save</Button>{' '}
            {/* <Button color="secondary" onClick={()=>{cancel()}}>Cancel</Button>  */}
           
          </ModalFooter>
        </Modal>
    )}}
const mapStateToProps=(state)=>{
    console.log("STATE IN MODAL",state)
    return{
        studentout:state.students,
        modal:state.modal,
        selectedStudent:state.selectedStudent,
        selectedId:state.selectedId



    }
    
}
const mapDispatchToProps=(dispach)=>{
  return{
     
      Save:(newStudent)=>dispach(editNew(newStudent))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Edit)