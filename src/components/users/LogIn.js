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
          <h1 className="mb-5">Sign In</h1>
          <form className="white" onSubmit={this.handleSubmit}>
            <div className="form-group row mb-4">
              <label htmlFor="email" className="col-2 col-form-label">Email</label>
              <div className="col-10">
                <input className="form-control" type="text" id='email' onChange={this.handleChange} />
              </div>
            </div>

            <div className="form-group row mb-4">
              <label htmlFor="password" className="col-2 col-form-label">Password</label>
              <div className = "col-10">
                <input className="form-control" type="password" id='password' onChange={this.handleChange} />
              </div>
            </div>

            <div className="text-center">
              <button className="btn pink lighten-1 z-depth-0">Submit</button>
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