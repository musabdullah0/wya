import React, { Component } from 'react'
import TimePicker from './TimePicker'

class CreateSession extends Component {

    constructor(props) {
        super(props);
        let today = new Date();
        let now = today.getHours() + ':' + today.getMinutes();
        this.state = {
            time: now,
            location: '',
            subject: '',
            group: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.table([this.state]);
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="container mt-5">
                <h1 className="mb-5">Create Session</h1>
                <form>
                    <TimePicker onChange={this.handleChange} />

                    <div className="form-group row mb-4">
                        <label htmlFor="location" className="col-2 col-form-label">Location</label>
                        <div className="col-10">
                            <input className="form-control" type="text" placeholder="PCL 5th" id="location" onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="form-group row mb-4">
                        <label htmlFor="subject" className="col-2 col-form-label">Subject</label>
                        <div className="col-10">
                            <input className="form-control" type="text" placeholder="Computer Architecture" id="subject" onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="form-group row mb-4">
                        <label htmlFor="group" className="col-2 col-form-label">Group</label>
                        <div className="col-10">
                            <input className="form-control" type="text" placeholder="CS Gang" id="group" onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit} >Start Studying</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateSession;