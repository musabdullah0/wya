import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
    <div>
      <ul className="right">
         <li className="nav-item">
            <NavLink className="nav-link" to="/add-friend">Add A Friend</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/create">Create Session</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
            <a onClick={props.signOut}>Log Out</a>
        </li>
      </ul>
    </div>
  )
}

const mapDispatchToProps=(dispatch)=>{
  return{
    signOut: ()=> dispatch(signOut())
  }
}

export default connect(null,mapDispatchToProps)(SignedInLinks)