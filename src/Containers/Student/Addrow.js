import React, { Component } from 'react';
import Navigation from './nav';
import { connect } from 'react-redux';
import { Change,Add } from '../Redux/Action';

class Addrow extends Component{

handleChangeInput=(e)=>{
  const {name,value}=e.target
  const {selectedStudent}=this.props
  selectedStudent[name]=value
  console.log("**",selectedStudent)
}
navigate=(path)=>{
  this.props.history.push(path)
   }
render(){
  console.log("_____",this.props.studentList)
    return (
    <div>
        <Navigation
          navigate={this.navigate}/>
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
<button type="button" onClick={()=>{this.props.addItem(this.props.selectedStudent)}}>Add</button><br/>
</div>
    )
   
}
  }
  const mapStateToProps=state=>{
    console.log("IN ADDDROW",state)
return{    
        studentList:state.students,
       // modal:state.modal,
        selectedStudent:state.selectedStudent,
        selectedId:state.selectedId



    }
    
}
const mapDispatchToProps=(dispach)=>{
  console.log("%%")
  
   return{
      addItem:(selectedStudent)=>dispach(Add(selectedStudent)),
      Change:(newStudent)=>dispach(Change(newStudent)),
  }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Addrow)
