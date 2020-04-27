import React,  { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
 //import {Nav,Link} from 'reactstrap'
// import Increment from './Components/Increment';
// import Decrement from './Components/Decrement';
class Home extends Component{
    render(){
   return(


    <Nav className="justify-content-center" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link  href="/Student">Student</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/Add">Add</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/Search">Search</Nav.Link>
        
      
    </Nav.Item>
  </Nav>
   

   )
    }
}

export default Home; 