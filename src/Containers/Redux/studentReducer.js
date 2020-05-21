import{DELETE,EDIT, CHANGE, EDIT_STUDENT, ADD, FIND_STUDENT, CLEAR_TEXT, CANCEL} from './ActionType'
const student= [
    { Id:'1', First_Name:'Ann' ,Last_Name:'Mathew',Aggregate_Mark:70},
    { Id:'2', First_Name:'Riya' ,Last_Name:'Eliz',Aggregate_Mark:90},
    { Id:'3', First_Name:'Rehan' ,Last_Name:'Zavi',Aggregate_Mark:80},
    { Id:'4', First_Name:'Sera' ,Last_Name:'Thomas',Aggregate_Mark:50},
    { Id:'5', First_Name:'Aleena' ,Last_Name:'Jacob',Aggregate_Mark:87}
  
]
const initialState ={
   students:student,
        modal:false,
    selectedStudent:{
        Id:'',
          First_Name:'',
          Last_Name:'',
          Aggregate_Mark:'',
               },
        selectedId:undefined,
        index:undefined,
        input:'',
    newStudent:{
        Id:'',
        FirstName:'',
        Last_Name:'',
        Aggregate_Mark:''
    },
   filteredList:student,
   show:false
}

const studentReducer=(state=initialState,action)=>{
    console.log("vannu")
switch(action.type){
    case DELETE:{
                const {students}=state
    const   studentList=[...students]
        const list= studentList.filter(item=>item.Id!==action.params)
       return{  
          ...state, 
              students:[...list],
           filteredList:[...students]
}
    }

        case EDIT:{
            const {selectedId,newStudent,selectedStudent,index}=state
                newStudent.Id=action.params.Id
       newStudent.First_Name=action.params.First_Name
       newStudent.Last_Name=action.params.Last_Name
       newStudent.Aggregate_Mark=action.params.Aggregate_Mark     
        const studentList =[...state.students]
                const existingId = studentList.findIndex((element)=>element.Id=== newStudent.Id)
                 if((existingId<0)|| newStudent.Id==action.params.selectedId){
                           studentList.splice( action.params.index,1,newStudent)
                                       return{
                                           ...state,
                                students:[...studentList],
                                modal:!state.modal,
                                newStudent:{
                                    Id:'',
                                    FirstName:'',
                                    Last_Name:'',
                                    Aggregate_Mark:''
                                },
                                filteredList:[...state.students]
                       }}
                       else{
                        console.log("ID already existing")
       
                                              return{
                        ...state,
                             students:state.students,
                             modal:!state.modal,
                             filteredList:[...state.students],
          show:!state.show
                       }
                    }
                
            }
        case ADD:{
const {selectedId,newStudent}=state
            console.log("iii",action.params)
            console.log("ddd",state.selectedStudent)
       newStudent.Id=action.params.Id
       newStudent.First_Name=action.params.First_Name
       newStudent.Last_Name=action.params.Last_Name
       newStudent.Aggregate_Mark=action.params.Aggregate_Mark
        state.index=action.params.index
        const  List=[...state.students]

        const existingId = List.findIndex((element)=>element.Id=== newStudent.Id)
        if((existingId<0))

{
        //   console.log("OOO",state.selectedStudent)
           
            console.log("QQ",state.index)
            List.splice( state.index,0,state.newStudent)
            console.log("AA",List)
            return{
                ...state,
students:[...List],
filteredList:[...state.students]
                }}
            
            else{
                console.log("ID already existing")
                return{
                    ...state,
                    show:!state.show,
                    students:[...List],
                    filteredList:[...state.students]        }
            }}
          case CANCEL:{
              console.log("kerii")
              return{
                  ...state,
                  modal:!state.modal,
                  show:!state.show
              }
          }
case CLEAR_TEXT:{
    const {students}=state 
    return{
students:[...state.filteredList]
    }
}


            case FIND_STUDENT:{
                const {students}=state
        
               const   studentList=state.filteredList
              const List= studentList.filter((item)=>{
                         return item.First_Name.toLowerCase().concat(item.Last_Name.toLowerCase()).includes(action.params.toLowerCase())
                       })
return{
    ...state, 
       
      students:[...List],
     
            }}
    default:return state
}
}
export default studentReducer;