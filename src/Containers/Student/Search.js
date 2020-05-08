
import  React , {Component} from 'react';
import Navigation from './nav';


const Search =(props)=>{
 

const {input,searchText,findText,clearText}=props
 
return(
   
<div>
<Navigation/>
<input type ="text" value={props.input} onChange={(e)=>{searchText(e)}}></input>
<button onClick = {()=>{findText()}}>Search</button>
<button onClick = {()=>{clearText()}}>Clear</button>
</div>
)
}
export default Search;