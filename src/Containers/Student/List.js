
import {connect} from 'react-redux'
import  React , {Component} from 'react';
import Navigation from './nav';
import { deleteStudent,editStudent } from '../Redux/Action';
import Student from './Student';
const List=(props)=>{
console.log("///")
  //const {studentList,onClickEdit}=props

//console.log("++",studentList)


    
return(
<div>

<table  bordered style={{color:"red", border:"2px solid black" }}>
<thead><tr><th >Id</th>
<th>First_Name</th>
<th>Last_Name</th>
<th>Aggregate_Mark</th></tr></thead>
{props.studentList.map((student,i)=>(<tbody><tr key={i} >
    <td>{student.Id}</td>
    <td>{student.First_Name}</td>
    <td>{student.Last_Name}</td>
    <td>{student.Aggregate_Mark}</td>
<td><button  onClick = {()=>{props.delete(student.Id)}}>DELETE</button>
    <button onClick = {()=>{props.edit({i,student})}} >Edit</button></td>
                     </tr></tbody>    
 ))}
  </table>
  </div>
  )
}
// const mapStateToProps=state=>{
//     // console.log("%%%",state)
//     // return{
//     //     classmates:state.classmates
//     // }
// }
const mapDispatchToProps=(dispatch)=>{
    console.log("LLLL")
    return{
        delete:(i)=>dispatch(deleteStudent(i)),
        edit:(i)=>dispatch(editStudent({i}))
    }
}
export default connect(null,mapDispatchToProps)(List);