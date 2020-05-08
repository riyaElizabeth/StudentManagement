import {DELETE,EDIT,CHANGE} from'./ActionType';
export const deleteStudent=(params)=>{
return{
    type:DELETE,
    params
} 
}
export const editStudent=(params)=>{
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