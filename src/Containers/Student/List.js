

import  React , {Component} from 'react';
import Navigation from './nav';

import Edit from './edit';
import Delete from './delete';
import { connect } from 'react-redux';
import { deleteStudent,editStudent,editNew, cancel } from '../Redux/Action';


import Addrow from './Addrow';
class  List extends Component{
    state={
        selectedStudent:{
          Id:0,
          First_Name:'',
          Last_Name:'',
          Aggregate_Mark:'',
        },
      
      modal:false,
     
      
      }
      
     
      handleChangeInput=(e)=>{
         console.log("Props",this.props)
        const {name,value}=e.target
        const {selectedStudent}=this.state
        this.state.selectedStudent[name]=value
        
        this.setState({

            selectedStudent:{...selectedStudent}
        })
     
            }
            // setShow=()=>{
            //    this.props.show=false
            // }
          
  onClickEdit=(student,i)=>{
    
   const selectedId=student.Id
   const index=i
    this.setState({
     modal:!this.state.modal,
  selectedStudent:{...student,index,selectedId},
 
  
    })     
}

Saving=()=>{
    this.setState({
        modal:!this.state.modal})
        
this.props.Save(this.state.selectedStudent,)
}
cancel=()=>{
    this.setState({
        modal:!this.state.modal
    })
        
    
}
navigate=(path)=>{
    console.log("PATH",this.props.history)
this.props.history.push(path)
 }
    
    render(){
return(
  
<div>
<Navigation
    navigate={this.navigate}
    />
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
  show={this.props.show}
  cancel={this.cancel}>
  


  </Edit>

  
  </div>
  
  )
  
}}
const mapStateToProps=(state)=>{
    console.log("STATE IN MODAL",state)
    return{
        studentout:state.students,
        show:state.show
    
     


    }
    
}


const mapDispatchToProps=(dispatch)=>{
    console.log("LLLL")
    return{
        delete:(i)=>dispatch(deleteStudent(i)),
      Save:(newStudent,id)=>dispatch(editNew(newStudent,id)),
      cancel:()=>dispatch(cancel())

      }
    }
 


export default connect(mapStateToProps,mapDispatchToProps)(List);