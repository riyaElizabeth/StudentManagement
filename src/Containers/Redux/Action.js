import {DELETE,EDIT,ADD, FIND_STUDENT, CLEAR_TEXT, CANCEL} from'./ActionType';
export const deleteStudent=(params)=>{
return{
    type:DELETE,
    params
} 
}


export const editNew=(params)=>{
    return{
        type:EDIT,
        params
    }
}


export const Add=(params)=>{
    return{
        type:ADD,
        params
        
    }
}
export const findStudent=(params)=>{
    return{
        type:FIND_STUDENT,
        params
    }
}

export const clearText=()=>{
    return{
        type:CLEAR_TEXT
    }
}

export const cancel=()=>{
    return{
type:CANCEL
    }
} 
    
