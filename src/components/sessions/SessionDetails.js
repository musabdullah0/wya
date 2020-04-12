import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const SessionDetails = props => {
    const toggle = props.toggle;
    const session = props.session;

    return session ? (
        <div>
            <Modal isOpen={props.isOpen} toggle={toggle} className="primary">
                <ModalHeader toggle={toggle}>Session Details</ModalHeader>
                <ModalBody>
                    <p><b>Who:</b> {session.group}</p>
                    <p><b>Where:</b> {session.location}</p>
                    <p><b>What:</b> {session.subject}</p>
                    <p><b>When:</b> {session.time}</p>
                </ModalBody>
            </Modal>
        </div>
    ) : null;
}

export default SessionDetails;