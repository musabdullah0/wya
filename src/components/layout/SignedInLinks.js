import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
    <div className={props.containerClasses} >
      
      <ul className="navbar-nav ml-auto">
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
            <button className="nav-link btn-dark" onClick={props.signOut}>Log Out</button>
        </li>
      </ul>
    </div>
  )
}

const mapDispatchToProps=(dispatch)=>{
  return{
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)