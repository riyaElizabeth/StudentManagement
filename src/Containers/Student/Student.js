import  React , {Component} from 'react';
import Edit from './edit';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Students from './Table'
import Search from './Search';

//import {connect} from 'react-redux'
import List from './List';
import  Addrow from './Addrow';
import Delete from './delete';
import  {connect} from'react-redux';
import  Navigation from './nav';
import { deleteStudent,Change } from '../Redux/Action';
import studentReducer from '../Redux/studentReducer';

class student extends Component{

    state={ 
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
        List:{},
selectedId:0,index:undefined
    }
    
    componentDidMount(props){
        console.log("__",props)
     //   const {lists} = this.props  
        
           //
      //  })
        console.log("||",this.state.studentList)
    }
//     onClickEdit=(student,i)=>{
//         this.setState({
//             studentList:this.props.lists,
//             modal:!this.state.modal,
//       selectedStudent:{...student},
//       selectedId:student.Id,
// index:i
//         })     
//     }
    
    

    handleChangeInput=(e)=>{
const {name,value}=e.target
const {selectedStudent}=this.state
selectedStudent[name]=value
this.props.Change(selectedStudent)
}

    
  
//     viewList=()=>(<table  bordered style={{color:"red", border:"2px solid black" }}>
//         <thead><tr><th >Id</th>
//         <th>First_Name</th>
// <th>Last_Name</th>
// <th>Aggregate_Mark</th></tr></thead>
//    {studentList.map((student,i)=>(<tbody><tr key={i} >
//             <td>{student.Id}</td>
//             <td>{student.First_Name}</td>
//             <td>{student.Last_Name}</td>
//             <td>{student.Aggregate_Mark}</td>
//             <td><button  onClick = {()=>{this.props.delete(i)}}>DELETE</button>
//             <button  onClick = {()=>{this.onClickEdit(student,i)}}>Edit</button></td>
//                              </tr></tbody>    
//          ))}
//           </table>
          
//           )
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
    //    /delete=(i)=>{
    //        const {studentList}=this.state
         
    //             studentList.splice(i,1)
    //            this.setState({
    //     studentList:studentList,
    //     position:""
    //     })
   
   
    // }
   
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

    // findText=()=>{
    //         const {studentList}=this.state
        
    //  const list=  studentList.filter((item)=>{
    //           return item.First_Name.toLowerCase().concat(item.Last_Name.toLowerCase()).includes(this.state.input.toLowerCase())
    //         })
    //         console.log(list)
    //            this.setState({
    //       studentList:list
    // })
 // }
// clearText=()=>{
//     console.log(this.props)
//    // const {lists}=this.props
//     this.setState({
//         //studentList:lists,
//         input:" "
//     })
//}
onChange=(e)=>{
      this.setState({
       name: e.target.value
    })
}

deleteRow=(row)=>{
   console.log(row)
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

 componentWillReceiveProps(newProps) {    
    console.log('Component WILL RECIEVE PROPS!')
 }
 shouldComponentUpdate(newProps, newState) {
     console.log("should update?")
    return true;
 }
 componentWillUpdate(nextProps, nextState) {
    console.log('Component WILL UPDATE!');
 }
 componentDidUpdate(prevProps, prevState) {
    console.log('Component DID UPDATE!')
 }
 componentWillUnmount() {
    console.log('Component WILL UNMOUNT!')
 }
    render(){
    //    console.log("==",this.props.studentout.studentList)
    return (
       
        <div>
            
            <Navigation/>
        <List
        studentList={this.props.studentout}
      //  delete={this.delete}
       // onClickEdit={this.onClickEdit}
        ></List> */}
        */}
       


<Edit/>                  */}
                 

</div>
      )  }}
// const mapDispatchToProps=(dispatch)=>{
//     console.log("LLLL")
//     return{
//         delete:(i)=>dispatch(deleteStudent(i))
//     }
// }

const mapStateToProps=state=>{
    console.log(">>>>>>",state)
    return{
        studentout:state.studentList
    }
    
}

export default connect(mapStateToProps)(student);
 