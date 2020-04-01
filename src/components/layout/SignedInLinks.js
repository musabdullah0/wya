import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import { NavItem, Nav } from 'reactstrap';


const SignedInLinks = (props) => {
  return (
    <Nav className="ml-auto" navbar {...props}>
        <NavItem>
          <NavLink to="/create">study</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/add-friend" >add friend</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about" >about</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact" >contact</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/logout" onClick={props.signOut}>log out</NavLink>
        </NavItem>
    </Nav>
  )
}

const mapDispatchToProps=(dispatch)=>{
  return{
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)