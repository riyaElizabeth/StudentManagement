// import  React , {Component} from 'react';

// import { deleteStudent,editStudent } from '../Redux/Action';
// //import {connect} from 'react-redux'
// import List from './List';

// import  {connect} from'react-redux';
// import  Navigation from './nav';

// class Student extends Component{

//     state={ 
            
//             selectedStudent:{
//                 id:0,
//                 first_Name:'',
//                 last_Name:'',
//                 aggregate_Mark:''
//             },
     
// selectedId:0,index:undefined
//     }
    
    
    
    

   

    
  

//                 cancel=()=>{
//                     this.setState({
//                         modal:!this.state.modal})
//                  }
            
//     searchText=(event)=>{
//               const searchString = event.target.value
//         console.log("searched value",searchString);
//         this.setState({
//             input:searchString
//         })
//                  }
   
//     // findText=()=>{
//     //         const {studentList}=this.state
        
//     //  const list=  studentList.filter((item)=>{
//     //           return item.First_Name.toLowerCase().concat(item.Last_Name.toLowerCase()).includes(this.state.input.toLowerCase())
//     //         })
//     //         console.log(list)
//     //            this.setState({
//     //       studentList:list
//     // })
//  // }
// // clearText=()=>{
// //     console.log(this.props)
// //    // const {lists}=this.props
// //     this.setState({
// //         //studentList:lists,
// //         input:" "
// //     })
// //}

// deleteRow=(row)=>{
//    console.log(row)
// const index = this.state.studentList.findIndex((item)=>item.Id===row)
// const {studentList}=this.state
//      studentList.splice(index,1)
//     this.setState({
// studentList:studentList})
// }




//  componentWillReceiveProps(newProps) {    
//     console.log('Component WILL RECIEVE PROPS!')
//  }
//  shouldComponentUpdate(newProps, newState) {
//      console.log("should update?")
//     return true;
//  }
// //  componentWillUpdate(nextProps, nextState) {
// //     {this.viewList()}
// //  }
//  componentDidUpdate(prevProps, prevState) {
//     console.log('Component DID UPDATE!')
//  }
//  componentWillUnmount() {
//     console.log('Component WILL UNMOUNT!')
//  }
 
//     render(){
//       console.log("==",this.props)
//     return (
       
//         <div>          
//         <List
//     studentout={this.props.studentout}
//        delete={this.props.delete}
//     //    Edit={this.props.edit}
//         ></List> 
        
       


                
                 

// </div>
//       )  }}


// const mapStateToProps=state=>{
//     console.log(">>>>>>",state)
//     return{
//         studentout:state.students
//     }
    
// }


// export default connect(mapStateToProps,mapDispatchToProps)(Student);
 