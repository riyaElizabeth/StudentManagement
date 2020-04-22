import  React , {Component} from 'react';
import Edit from './edit';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Table extends Component{

    state={  studentList:[],
            input:'',
            selectedStudent:{
                id:0,
                first_Name:'',
                last_Name:'',
                aggregate_Mark:''
            },
       newId:'',
       newindex:'',
       newFirstName:'',
       newlastName:'',
       newmark:'',
       show:true,
       deleteId:'',
       requiredItem:0,
        modal:false,
        newItem:{
            Id:'',
            First_Name:'',
            Last_Name:'',
            Aggregate_Mark:''
        },
        item:{
Id:''
        },
selectedId:0,index:undefined
    }
    
    componentDidMount(){
        const {lists} = this.props    
              this.setState({
            studentList:[...lists]
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
    
    toggle=()=>{
        this.setState( prevState => ({
            modal: !prevState.modal
          }))
    }

    handleChangeInput=(e)=>{
const {name,value}=e.target
const {selectedStudent}=this.state
selectedStudent[name]=value
this.setState({
    selectedStudent
})

    }
  
    viewList=()=>(<table  bordered style={{color:"red", border:"2px solid black" }}>
        <thead><tr><th >Id</th>
        <th>First_Name</th>
<th>Last_Name</th>
<th>Aggregate_Mark</th></tr></thead>
   { this.state.studentList.map((student,i)=>(<tbody><tr key={i} >
            <td>{student.Id}</td>
            <td>{student.First_Name}</td>
            <td>{student.Last_Name}</td>
            <td>{student.Aggregate_Mark}</td>
            <td><button  onClick = {()=>{this.delete(i)}}>DELETE</button>
            <button  onClick = {()=>{this.onClickEdit(student,i)}}>Edit</button></td>
                             </tr></tbody>    
         ))}
          </table>
          
          )
          save=(studentData)=>
          { 
              const {selectedId,index}=this.state
   const existingId = this.state.studentList.findIndex((element)=>element.Id===studentData.Id)
    if((existingId<0)||selectedId===studentData.Id){
 
         this.state.studentList.splice(index,1,studentData)
                           this.setState({
                   studentList:this.state.studentList,
                   modal:!this.state.modal
                           })     
          }
          else{
              console.log("ID already existing")
            this.setState({
                studentList:this.state.studentList,
                modal:!this.state.modal
                        })     
          }
                    
        }
           

                cancel=()=>{
                    this.setState({
                        modal:!this.state.modal})
                 }
            
    searchText=(event)=>{
              const searchString = event.target.value
        console.log("searched value",searchString);
        this.setState({
            input:searchString
        })
                 }
       delete=(i)=>{
           const {studentList}=this.state
         
                studentList.splice(i,1)
               this.setState({
        studentList:studentList,
        position:""
        })
   
   
     }
   
        onindexChange=(e)=>{
                       this.setState({
                newindex: e.target.value
                })
        }
        onIdChange=(e)=>{
            this.setState({
     newId: e.target.value
     })
}
        onfirstNameChange=(e)=>{
            this.setState({ 
     newFirstName: e.target.value
     })
}
onlastNameChange=(e)=>{
    this.setState({
newlastName: e.target.value
})
}
onmarkChange=(e)=>{
    this.setState({
newmark: e.target.value
})
}

    findText=()=>{
        const {studentList}=this.state
     const list=  studentList.filter((item)=>{
              return item.First_Name.toLowerCase().concat(item.Last_Name.toLowerCase()).includes(this.state.input.toLowerCase())
            })
               this.setState({
          studentList:list
    })
  }
clearText=()=>{
    const {studentList}=this.state
    this.setState({
        studentList:studentList,
        input:" "
    })
}
onpositionChange=(e)=>{
      this.setState({
       deleteId: e.target.value
    })
}

deleteRow=(row)=>{
   
const index = this.state.studentList.findIndex((item)=>item.Id===row)
const {studentList}=this.state
     studentList.splice(index,1)
    this.setState({
studentList:studentList})
}

addItem=()=>{
       const {studentList}=this.state
    const newData = []
        newData.push({Id:this.state.newId,First_Name:this.state.newFirstName,Last_Name:this.state.newlastName,Aggregate_Mark:this.state.newmark})
studentList.splice(this.state.newindex,0,...newData)
 this.setState({
 studentList:studentList,
 selectedindex:"",
id:"",
first_Name:"",
last_Name:"",
aggregate_Mark:""
 })
}
    render(){
        
    return (<div>     <div>
           <h1 > student Table</h1>
          
                 {this.viewList()}
           <input type ="text" value={this.state.input} onChange={this.searchText}></input>
        <button onClick = {this.findText}>Search</button>
        <button onClick = {this.clearText}>Clear</button>
           
        </div>
        <div>
    
        
        <label>Row No:</label><br/>
      <input type="Number" name='selectedindex' onChange={this.onindexChange} placeholder="index" value={this.state.selectedindex}/><br/>
<label>Id:</label><br/>
<input type="Number"  name="id" placeholder="Id" onChange={this.onIdChange} value={this.state.id}/><br/>
<label>First Name:</label><br/>
      <input type="Text" name="first_Name" onChange={this.onfirstNameChange} placeholder="First Name" value={this.state.first_Name}/><br/>
      <label>Last Name:</label><br/>
      <input type="Text" name="last_Name" onChange={this.onlastNameChange} placeholder="Last Name" value={this.state.last_Name} /><br/>
      <label>Aggregate Mark:</label><br/>
      <input type="Number" name="aggregate_Mark" onChange={this.onmarkChange} placeholder="Aggregate Mark"  value={this.state.aggregate_Mark}/><br/>
<button type="button" onClick={()=>{this.addItem()}}>Add</button><br/>
   <label>Row No:</label><br/>
      <input type="Number" name='position' onChange={this.onpositionChange} placeholder="index of row to delete" value={this.state.deleteId}/>
      <button  onClick = {()=>{this.deleteRow(this.state.deleteId)}}>DELETE</button><br/>
      </div> 
      <Edit 
      modal={this.state.modal}
      toggle={this.toggle}
      studentData={this.state.selectedStudent}
      onChange={this.handleChangeInput}
      saveHandler={this.save}
      cancel={this.cancel}
      ></Edit>      
      </div> 
    
    );
  }
}

export default Table;
 