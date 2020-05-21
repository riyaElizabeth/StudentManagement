import React, { Component } from 'react';
import Navigation from './nav';
import { connect } from 'react-redux';
import { cancel,Add } from '../Redux/Action'
import alert from './Alert'
import { Alert,Button } from 'react-bootstrap';

class Addrow extends Component{
state={
  selectedStudent:{
    Id:undefined,
      First_Name:undefined,
      Last_Name:undefined,
      Aggregate_Mark:undefined,
      selectedId:undefined,
      index:undefined,
    
    },
}
handleChangeInput=(e)=>{
  const {name,value}=e.target
   this.state. selectedStudent[name]=value
 }
navigate=(path)=>{
  console.log("PATH",this.props.history)
  this.props.history.push(path)
   }
   setShow=()=>{
     this.props.cancel()
   }
render(){
      return (
    <div>
        <Navigation
          navigate={this.navigate}/>
        <label>Row No:</label><br/>
      <input type="Number" name='index' onChange={(e)=>{this.handleChangeInput(e)}} value={this.state.selectedStudent.index} placeholder="index" /><br/>
<label>Id:</label><br/>
<input type="Number"  name="Id" placeholder="Id"  value={this.state.selectedStudent.Id} onChange={(e)=>{this.handleChangeInput(e)}} /><br/>
<label>First Name:</label><br/>
      <input type="Text" name="First_Name" onChange={(e)=>{this.handleChangeInput(e)}}  value={this.state.selectedStudent.First_Name} placeholder="First Name" /><br/>
      <label>Last Name:</label><br/>
      <input type="Text" name="Last_Name" onChange={(e)=>{this.handleChangeInput(e)}}  value={this.state.selectedStudent.Last_Name} placeholder="Last Name" /><br/>
      <label>Aggregate Mark:</label><br/>
      <input type="Number" name="Aggregate_Mark" onChange={(e)=>{this.handleChangeInput(e)}}  value={this.state.selectedStudent.Aggregate_Mark} placeholder="Aggregate Mark"  /><br/>
<button type="button" onClick={()=>{this.props.addItem(this.state.selectedStudent)}}>Add</button><br/>

<alert show={this.props.show}></alert>


</div>
    )
   
}
  }
  const mapStateToProps=state=>{
    console.log("IN ADDDROW",state)
return{    
      
  show:state.show
       

    }
    
 }
const mapDispatchToProps=(dispatch)=>{
  console.log("%%")
  
   return{
      addItem:(selectedStudent)=>dispatch(Add(selectedStudent)),
      cancel:()=>dispatch(cancel())
    
  }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Addrow)
