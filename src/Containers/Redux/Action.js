import {DELETE,EDIT} from'./ActionType';
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