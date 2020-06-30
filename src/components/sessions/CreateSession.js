import React, { Component } from 'react'
import { connect } from 'react-redux'
import TimePicker from './TimePicker'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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

    }

    render() {
        const toggle = this.props.toggle;

        const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

        return (
            <div>
                <Modal isOpen={this.props.isOpen} toggle={toggle} className="primary">
                    <ModalHeader toggle={toggle} close={closeBtn}>Create Session</ModalHeader>
                    <ModalBody>
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
                        </form>

                    </ModalBody>
                    <ModalFooter className="text-center">
                        <Button color="primary" onClick={this.handleSubmit}>Create Session</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default CreateSession