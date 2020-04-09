import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
  }
    render() {
      const {authError} = this.props;
      return (
        <div className="container mt-5">
          <h1 className="mb-5">Log In</h1>
          <form className="white" onSubmit={this.handleSubmit}>

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
    return{
      authError: state.auth.authError
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      signIn: (creds) => dispatch(signIn(creds))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SignIn)