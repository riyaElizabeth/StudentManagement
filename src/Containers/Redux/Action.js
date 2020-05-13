import {DELETE,EDIT,CHANGE,EDIT_STUDENT,ADD} from'./ActionType';
import { render } from '@testing-library/react';
export const deleteStudent=(params)=>{
return{
    type:DELETE,
    params
} 
}
export const editStudent=(params)=>{
    return{
        type:EDIT_STUDENT,
        params
    }
}

export const editNew=(params)=>{
    return{
        type:EDIT,
        params
    }
}
export const Change =(params)=>{
    return{
        type:CHANGE,
        params
    }
}

export const Add=(params)=>{
    return{
        type:ADD,
        params
        
    }
}