import React,  { Component } from 'react';
import Navigation from './nav';
class Home extends Component{
  navigate=(path)=>{
    console.log("PATH",this.props.history)
    this.props.history.push(path)
     }
    render(){
   return(

     <div>

<Navigation
 navigate={this.navigate}
></Navigation>

<h1>WELCOME</h1>
</div>
   )
    }
}

export default Home; 