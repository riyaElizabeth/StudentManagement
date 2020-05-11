import React, { Component } from 'react';
import Navigation from './nav';
import { connect } from 'react-redux';
import { Change,Add } from '../Redux/Action';

class Addrow extends Component{

handleChangeInput=(e)=>{
  const {name,value}=e.target
  const {selectedStudent}=this.props
  selectedStudent[name]=value
  this.props.Change(selectedStudent)
  
console.log("**",selectedStudent)
}
render(){
    return (
    <div>
        <Navigation/>
        <label>Row No:</label><br/>
      <input type="Number" name='index' onChange={(e)=>{this.handleChangeInput(e)}} placeholder="index" /><br/>
<label>Id:</label><br/>
<input type="Number"  name="Id" placeholder="Id" onChange={(e)=>{this.handleChangeInput(e)}} /><br/>
<label>First Name:</label><br/>
      <input type="Text" name="First_Name" onChange={(e)=>{this.handleChangeInput(e)}} placeholder="First Name" /><br/>
      <label>Last Name:</label><br/>
      <input type="Text" name="Last_Name" onChange={(e)=>{this.handleChangeInput(e)}} placeholder="Last Name" /><br/>
      <label>Aggregate Mark:</label><br/>
      <input type="Number" name="Aggregate_Mark" onChange={(e)=>{this.handleChangeInput(e)}} placeholder="Aggregate Mark"  /><br/>
<button type="button" onClick={()=>{this.props.addItem()}}>Add</button><br/>
</div>
    )
   
}
  }
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
      addItem:(newStudent)=>dispach(Add(newStudent)),
      Change:(newStudent)=>dispach(Change(newStudent)),
  }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Addrow)
