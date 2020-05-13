
import {connect} from 'react-redux'
import  React , {Component} from 'react';
import Navigation from './nav';
import { deleteStudent,editStudent } from '../Redux/Action';
import Edit from './edit';
import Delete from './delete';
import Addrow from './Addrow';
class  List extends Component{
    state={
        selectedStudent:{
          id:0,
          first_Name:'',
          last_Name:'',
          aggregate_Mark:''
      },
      }
 
onClickEdit=(student,i)=>{
    this.setState({
       // studentList:this.props.lists,
        modal:!this.state.modal,
  selectedStudent:{...student},
  selectedId:student.Id,
index:i
    })
    this.props.Edit(student)     
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
    <button onClick = {()=>{this.onClickEdit({i,student})}} >Edit</button></td>
                     </tr></tbody>    
 ))}
  </table>
  <Edit
  selectedStudent={this.state.selectedStudent}
  />
  
  </div>
  
  )
  
}}

export default List;