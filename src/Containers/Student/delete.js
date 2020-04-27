
import  React , {Component} from 'react';


const Delete =(props)=>{
console.log(props)
const id='';
const {deleteRow,onpositionChange,deleteId}=props
 
return(
<div>
<input type="Number" name='position' onChange={(e)=>{onpositionChange(e)}} placeholder="index of row to delete" value={deleteId}/>
      <button  onClick = {()=>{deleteRow(deleteId)}}>DELETE</button><br/>
      </div> 
)
}
export default Delete;