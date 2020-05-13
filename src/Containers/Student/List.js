
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
          Id:0,
          First_Name:'',
          Last_Name:'',
          Aggregate_Mark:''
      },
      modal:false
      }
     
      handleChangeInput=(e)=>{
          console.log("MARIYO",this.state.selectedStudent)
        const {name,value}=e.target
        const {selectedStudent}=this.state
        selectedStudent[name]=value
        this.setState({
            selectedStudent:this.state.selectedStudent
        })
        
            }
  onClickEdit=(student,i)=>{
    this.setState({
        modal:!this.state.modal,
  selectedStudent:{...student},
  selectedId:student.Id,
index:i
    })     
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
  />
  
  </div>
  
  )
  
}}

export default List;