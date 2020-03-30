import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import { NavItem } from 'reactstrap';


const SignedInLinks = (props) => {
  return (
    <div>
      <NavItem {...props} >
          <NavLink to="/create/">study</NavLink>
      </NavItem>
      <NavItem {...props}>
          <NavLink to="/add-friend" >add friend</NavLink>
      </NavItem>
      <NavItem {...props}>
          <NavLink to="/about" >about</NavLink>
      </NavItem>
      <NavItem {...props}>
          <NavLink to="/contact" >contact</NavLink>
      </NavItem>
      <NavItem {...props}>
          <NavLink to="/log-in" >
            <a onClick={props.signOut}>log out</a>
          </NavLink>
      </NavItem>
    </div>
  )
}

const mapDispatchToProps=(dispatch)=>{
  return{
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)