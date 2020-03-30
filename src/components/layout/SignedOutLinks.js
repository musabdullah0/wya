import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right">
        <li className="nav-item">
            <NavLink className="nav-link" to="/login">Sign In</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/sign-up">Sign Up</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default SignedOutLinks