
import  React , {Component} from 'react';
import Navigation from './nav';
import { connect } from 'react-redux';
import { findStudent,clearText } from '../Redux/Action';


 class  Search extends Component{
 state={
    input:'',
   

  }
    searchText=(event)=>{
     
        const searchString = event.target.value
  console.log("searched value",searchString);
 // this.state.newList=[...this.props.studentout]
  this.setState({
      input:searchString          
  })
 
           }

navigate=(path)=>{
    console.log("PATH",this.props.history)
this.props.history.push(path)
 }
 clear=()=>{
          console.log("YYYY",this.props.studentout)
         this.setState({
          
             input:" "
         })
         this.props.clearText()
    }
    
    
    render(){
        
return(
    <div>
<Navigation
    navigate={this.navigate}
    />
 <input type ="text" value={this.state.input} onChange={(e)=>{this.searchText(e)}}></input>
 <button onClick = {()=>{ this.props.findText(this.state.input)}}>Search</button>
 <button onClick = {()=>{this.clear()}}>Clear</button>

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
     </tr></tbody>    
 ))}
  </table>
   </div>
  
   )
   
 }} 

 
// )
// }}
const mapDispatchToProps=(dispatch)=>{
    return{
        findText:(input)=>dispatch(findStudent(input)),
       clearText:()=>dispatch(clearText())
    }
}
const mapStateToProps=(state)=>{
    console.log("STATE IN MODAL",state)
    return{
studentout:state.students,

      // modal:state.modal,
     


    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);