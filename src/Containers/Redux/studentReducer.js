import{DELETE,EDIT} from './ActionType'

const initialState ={
    studentList: [
        { Id:'1', First_Name:'Ann' ,Last_Name:'Mathew',Aggregate_Mark:70},
        { Id:'2', First_Name:'Riya' ,Last_Name:'Eliz',Aggregate_Mark:90},
        { Id:'3', First_Name:'Rehan' ,Last_Name:'Zavi',Aggregate_Mark:80},
        { Id:'4', First_Name:'Sera' ,Last_Name:'Thomas',Aggregate_Mark:50},
        { Id:'5', First_Name:'Aleena' ,Last_Name:'Jacob',Aggregate_Mark:87}
      
    ],
    modal:false,
    selectedStudent:[]
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
        return{
            ...state,
       //studentList:this.props.lists,
            modal:true,
      selectedStudent:action.params,
       selectedId:action.params.Id,
 
         }     
//     }
        }
    default:return state
}
}
export default studentReducer;