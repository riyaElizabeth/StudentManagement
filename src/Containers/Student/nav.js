import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Navigation = () => {
  return (
    <div>
    
      <Nav>
        <NavItem>
          <NavLink exact href="/"></NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Home">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Student">Student</NavLink>
        </NavItem>
        <NavItem>
          <NavLink  href="/Add">Add</NavLink>
        </NavItem>
        <NavItem>
          <NavLink  href="/Search">Search</NavLink>
        </NavItem>
      </Nav>
          </div>
  );
}

export default Navigation;