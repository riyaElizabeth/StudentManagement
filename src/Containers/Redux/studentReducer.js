import{DELETE,EDIT, CHANGE, EDIT_STUDENT, ADD} from './ActionType'

const initialState ={
    studentList: [
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
        console.log(action.params)
        const studentlist = state.studentList.filter(item=>item.Id!==action.params)
return{  
          ...state, 
         studentList:[...studentlist]
}
    }
    case EDIT:{
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
            modal:true,
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
           
              selectedStudent:state.selectedStudent,
                ...state,
    }    }
        

        case EDIT_STUDENT:{
            console.log("mmm",state.newStudent)
            //state.newStudent.Id=action.params.Id
        
        
            
            const {selectedId,selectedStudent,index}=state
                const existingId = state.studentList.findIndex((element)=>element.Id===selectedStudent.Id)
                 if((existingId<0)||selectedId===selectedStudent.Id){
              console.log("jj",existingId)
                   state.studentList.splice(index,1,selectedStudent)
                      console.log("KK",state.studentList)
                                       return{
                                           ...state,
                                studentList:[...state.studentList],
                                modal:!state.modal
                                           
                       }}
                       else{
                           console.log("ID already existing")
                    return{
                        ...state,
                             studentList:state.studentList,
                             modal:!state.modal
                                       
                       }
                    }
                
            }
        case ADD:
            
                {
                    const {studentList,selectedStudent}=state
            //      const newData = []
            //          newData.push({Id:selectedStudent.Id,First_Name:selectedStudent.First_Name,Last_Name:selectedStudent.LastName,Aggregate_Mark:selectedStudent.Aggregate_Mark})
            //  studentList.splice(selectedStudent.Index,0,...newData)
             return{
                 ...state,
              studentList:[...studentList,
        
             {
             Id:selectedStudent.Id,
             First_Name:selectedStudent.First_Name,
             Last_Name:selectedStudent.Last_Name,
             Aggregate_Mark:selectedStudent.Aggregate_Mark
              }
            ]
            }}
    default:return state
}
}
export default studentReducer;