
import  React , {Component} from 'react';
import Navigation from './nav';
const List=(props)=>{
console.log(props)
    const {studentList,onClickEdit}=props




    
return(
<div>

<table  bordered style={{color:"red", border:"2px solid black" }}>
<thead><tr><th >Id</th>
<th>First_Name</th>
<th>Last_Name</th>
<th>Aggregate_Mark</th></tr></thead>
{studentList.map((student,i)=>(<tbody><tr key={i} >
    <td>{student.Id}</td>
    <td>{student.First_Name}</td>
    <td>{student.Last_Name}</td>
    <td>{student.Aggregate_Mark}</td>
    <td><button  onClick = {()=>{props.delete(i)}}>DELETE</button>
    <button  onClick = {()=>{onClickEdit(student,i)}}>Edit</button></td>
                     </tr></tbody>    
 ))}
  </table>
  </div>
  )
}

export default List;