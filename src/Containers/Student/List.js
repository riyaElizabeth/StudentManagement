

import  React , {Component} from 'react';
import Navigation from './nav';

import Edit from './edit';
import Delete from './delete';
import { connect } from 'react-redux';
import { deleteStudent,editStudent,editNew, Change } from '../Redux/Action';


import Addrow from './Addrow';
class  List extends Component{
    state={
        selectedStudent:{
          Id:0,
          First_Name:'',
          Last_Name:'',
          Aggregate_Mark:'',
          
      },
      index:'',
      modal:false
      }
     
      handleChangeInput=(e)=>{
          console.log("INHANDLE",this.state.selectedStudent)
        const {name,value}=e.target
        const {selectedStudent}=this.state
        this.state.selectedStudent[name]=value
        console.log("INnnnnHANDLE",this.state.selectedStudent)
        this.setState({

            selectedStudent:{...selectedStudent}
        })
        console.log("CHANGE AAYo",this.state.selectedStudent)
            }
          
  onClickEdit=(student,i)=>{
      console.log("OOOOOO",this.props)
   const selectedId=student.Id
   const index=i
    this.setState({
     modal:!this.state.modal,
  selectedStudent:{...student,selectedId,index},
 
  
    })     
}

Saving=()=>{

this.props.Save(this.state.selectedStudent,)
this.setState({
    modal:!this.state.modal})
}

    
    render(){
return(
    
<div>

<table  bordered style={{color:"red", border:"2px solid black" }}>
<thead><tr><th >Id</th>
<th>First_Name</th>
<th>Last_Name</th>
<th>Aggregate_Mark</th></tr></thead>
{this.props.studentout.map((student,i)=>(<tbody><tr key={i} >
    <td>{student.Id}</td>
    <td>{student.First_Name}</td>
    <td>{student.Last_Name}</td>
    <td>{student.Aggregate_Mark}</td>
<td><button  onClick = {()=>{this.props.delete(student.Id)}}>DELETE</button>
    <button onClick = {()=>{this.onClickEdit(student,i)}} >Edit</button></td>
                     </tr></tbody>    
 ))}
  </table>
  <Edit
  selected={this.state.selectedStudent}
  handleChangeInput={this.handleChangeInput}
  modal={this.state.modal}
  Save={this.Saving}
  />
  
  </div>
  
  )
  
}}
const mapStateToProps=(state)=>{
    console.log("STATE IN MODAL",state)
    return{
        studentout:state.students,
       modal:state.modal,
     index:state.Index,
        selectedId:state.selectedId



    }
    
}
const mapDispatchToProps=(dispach)=>{
  return{
     
      Save:(newStudent,id)=>dispach(editNew(newStudent,id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(List);