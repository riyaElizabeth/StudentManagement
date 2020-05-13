import{DELETE,EDIT, CHANGE, EDIT_STUDENT, ADD} from './ActionType'

const initialState ={
    students: [
        { Id:'1', First_Name:'Ann' ,Last_Name:'Mathew',Aggregate_Mark:70},
        { Id:'2', First_Name:'Riya' ,Last_Name:'Eliz',Aggregate_Mark:90},
        { Id:'3', First_Name:'Rehan' ,Last_Name:'Zavi',Aggregate_Mark:80},
        { Id:'4', First_Name:'Sera' ,Last_Name:'Thomas',Aggregate_Mark:50},
        { Id:'5', First_Name:'Aleena' ,Last_Name:'Jacob',Aggregate_Mark:87}
      
    ],
        modal:false,
    selectedStudent:{
        Id:0,
          First_Name:'',
          Last_Name:'',
          Aggregate_Mark:'',
          Index:0
        },
    selectedId:0,
    index:0,
    newStudent:{
        Id:'',
        FirstName:'',
        Last_Name:'',
        Aggregate_Mark:''
    }
}


const studentReducer=(state=initialState,action)=>{
switch(action.type){
    case DELETE:{
        console.log("@@@@@@@",state.students)
        const {students}=state
    const   studentList=[...students]
    console.log("delete ne munpe",state.students)
    console.log("copy of std",studentList)
        console.log(action.params)
        const list= studentList.filter(item=>item.Id!==action.params)
        console.log("delete chythu",list)
return{  
          ...state, 
       
       students:[...list]
}
    }

    case EDIT_STUDENT:{
        console.log("uuu",action.params)
        const {selectedStudent}=state
        selectedStudent.Id=action.params.i.student.Id
        selectedStudent.
            First_Name=action.params.i.student.First_Name
            selectedStudent.
            Last_Name=action.params.i.student.Last_Name
            selectedStudent.
            Aggregate_Mark=action.params.i.student.Aggregate_Mark
        return{
            ...state,
       //studentList:this.props.lists,
       modal:!state.modal,
     // selectedStudent:action.params,
       selectedId:action.params.i.student.Id,
       index:action.params.i.i,
 selectedStudent:state.selectedStudent

         }     
//     }
        }
        case CHANGE:{
            const {selectedId,selectedStudent,index}=state
            console.log("iii",action.params)
            console.log("ddd",state.selectedStudent)
       selectedStudent.Id=action.params.Id
       selectedStudent.First_Name=action.params.First_Name
       selectedStudent.Last_Name=action.params.Last_Name
       selectedStudent.Aggregate_Mark=action.params.Aggregate_Mark
   selectedStudent.Index=action.params.Index
          console.log("OOO",state.selectedStudent)
          return{
              
            //modal:true,
            ...state,
         
              selectedStudent:state.selectedStudent
                
    }    }
        

        case EDIT:{
            console.log("mmm",state.newStudent)
            //state.newStudent.Id=action.params.Id
        
        
            
            const {selectedId,students,selectedStudent,index}=state
        const studentList =[...students]
                const existingId = studentList.findIndex((element)=>element.Id===selectedStudent.Id)
                 if((existingId<0)||selectedId===selectedStudent.Id){
              console.log("jj",existingId)
                   studentList.splice(index,1,selectedStudent)
                      console.log("KK",studentList)
                                       return{
                                           ...state,
                                students:[...studentList],
                                modal:!state.modal
                                           
                       }}
                       else{
                           console.log("ID already existing")
                    return{
                        ...state,
                             students:state.students,
                             modal:!state.modal
                                       
                       }
                    }
                
            }
        case ADD:{
            const {selectedId,newStudent,index}=state
            console.log("iii",action.params)
            console.log("ddd",state.selectedStudent)
       newStudent.Id=action.params.Id
       newStudent.First_Name=action.params.First_Name
       newStudent.Last_Name=action.params.Last_Name
       newStudent.Aggregate_Mark=action.params.Aggregate_Mark
       newStudent.Index=action.params.Index
          console.log("OOO",state.selectedStudent)
            const  List=[...state.students]
            console.log("QQ",List)
            List.splice(0,0,state.newStudent)
            console.log("AA",List)
            return{
                ...state,
students:[...List],
                }
// studentList:[...state.studentList],
//                 modal:!state.modal
//                             //  studentList:state.studentList,
//                             //  modal:!state.modal
//             },
            console.log("###",state.studentList)
        }
            
            //     {
            //         const {studentList,selectedStudent}=state
            //         console.log("!!!",studentList)
            // //       const  List=[...studentList]
            // //       console.log("@@",List)
               
            // //         // newData.push({Id:selectedStudent.Id,First_Name:selectedStudent.First_Name,Last_Name:selectedStudent.LastName,Aggregate_Mark:selectedStudent.Aggregate_Mark})
            // //  List.splice(0,0,selectedStudent)
            // // console.log("EE",List)
            //  return{
            //       ...state, 
            //    //   selectedStudent:state.selectedStudent
            //     //  studentList:{
            //     //      List
            //     //  }
            //  // selectedStudent:state.selectedStudent  
            // //   selectedindex:"",
            // //  id:"",
            // //  first_Name:"",
            // //  last_Name:"",
            // //  aggregate_Mark:""
            //   },console.log("PPPPPPPP",studentList)
             
            // }
    default:return state
}
}
export default studentReducer;