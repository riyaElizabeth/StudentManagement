import React from 'react';
import Navigation from './nav';
const Addrow =(props)=>{
console.log(props)
const {selectedindex,first_Name,id,handleChangeInput,
last_Name,aggregate_Mark,addItem,onChange}=props
        
    return (
    <div>
        <Navigation/>
        <label>Row No:</label><br/>
      <input type="Number" name='selectedindex' onChange={(e)=>{handleChangeInput(e)}} placeholder="index" value={selectedindex}/><br/>
<label>Id:</label><br/>
<input type="Number"  name="id" placeholder="Id" onChange={(e)=>{handleChangeInput(e)}} value={id}/><br/>
<label>First Name:</label><br/>
      <input type="Text" name="first_Name" onChange={(e)=>{handleChangeInput(e)}} placeholder="First Name" value={first_Name}/><br/>
      <label>Last Name:</label><br/>
      <input type="Text" name="last_Name" onChange={(e)=>{handleChangeInput(e)}} placeholder="Last Name" value={last_Name} /><br/>
      <label>Aggregate Mark:</label><br/>
      <input type="Number" name="aggregate_Mark" onChange={(e)=>{handleChangeInput(e)}} placeholder="Aggregate Mark"  value={aggregate_Mark}/><br/>
<button type="button" onClick={()=>{addItem()}}>Add</button><br/>
</div>
    )
   
    
  }

  export default Addrow;
