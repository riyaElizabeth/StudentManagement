
// import  React , {Component} from 'react';
// import Navigation from './nav';
// import { connect } from 'react-redux';
// import { findText,clearText } from '../Redux/Action';


// class  Search extends Component{
//  state={
//      input:''
//  }
//     searchText=(event)=>{
//         const searchString = event.target.value
//   console.log("searched value",searchString);
//   this.setState({
//       input:searchString
//   })
//            }

//  render(){
// return(
   
// <div>
// <Navigation/>

// <input type ="text" value={props.input} onChange={(e)=>{searchText(e)}}></input>
// <button onClick = {()=>{this.props.findText()}}>Search</button>
// <button onClick = {()=>{this.props.clearText()}}>Clear</button>
// </div>
// )
// }}

// // const mapDispatchToProps=(dispatch)=>{
// //     return{
// //         findText:()=
// //     }
// // }


// export default Search;