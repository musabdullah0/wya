import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'
import API from '../../config/api';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = async e => {
    e.preventDefault();
    //this.props.signUp(this.state)
    await API.post("/user/create", {email: this.state.email, password:this.state.password}).then(res => {
      console.log(res);
      console.log(res.data);
    }).catch(console.log("error"));

    

  }
  render() {
    const {auth, authError} = this.props;
    if (auth.uid) {
      console.log('already signed in');
      return <Redirect to='/' />
    }
    return (
      <div className="container mt-5">
      <h1 className="mb-5">Sign Up</h1>
      <form className="white" onSubmit={this.handleSubmit}>

        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
          <input placeholder="mike scott" className="form-control" type="text" id='name' onChange={this.handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input placeholder="email" className="form-control" type="text" id='email' onChange={this.handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input placeholder="password" className="form-control" type="password" id='password' onChange={this.handleChange} />
        </div>

        <div className="text-center mt-5">
          <button className="btn btn-primary">Submit</button>
          <div className = "red-text center">
            {authError ? <p>{authError}</p>: null}
          </div>
        </div>
      </form>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)