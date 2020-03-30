import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavItem } from 'reactstrap';


const SignedOutLinks = (props) => {
  return (
    <div>
      <NavItem {...props} >
          <NavLink to="/login">login</NavLink>
      </NavItem>
      <NavItem {...props}>
          <NavLink to="/sign-up" >sign up</NavLink>
      </NavItem>
    </div>
  )
}

export default SignedOutLinks