import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Navigation = (props) => {
  return (
    <div>
    
      <Nav>
        <NavItem>
          <NavLink exact onClick={()=>{props.navigate('/')}}></NavLink>
        </NavItem>
        <NavItem>
          <NavLink  onClick={()=>{props.navigate('/Home')}}>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink  onClick={()=>{props.navigate('/Student')}}>Student</NavLink>
        </NavItem>
        <NavItem>
          <NavLink   onClick={()=>{props.navigate('/Add')}}>Add</NavLink>
        </NavItem>
        <NavItem>
          <NavLink   onClick={()=>{props.navigate('/Search')}}>Search</NavLink>
        </NavItem>
      </Nav>
          </div>
  );
}

export default Navigation;