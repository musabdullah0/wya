import React, { Component } from 'react'

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
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.SignUp(this.state);
  }
  render() {
    const {authError} = this.props;
    return (
      <div className="container mt-5">
        <form className="white" onSubmit={this.handleSubmit}>
          <h1 className="grey-text text-darken-3">Sign Up</h1>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id='firstName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id='lastName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
            <div className = "red-text center">
                {authError ? <p>messed up the signup, stooopid</p>: null}
              </div>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp