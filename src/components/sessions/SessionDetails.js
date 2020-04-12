import React from 'react'

const SessionDetails = props => {
    return (
        <div className="container mt-5">
            <h1>Session Details</h1>
            <div className="container mt-5">
                <p><b>Who:</b> {props.group}</p>
                <p><b>Where:</b> {props.location}</p>
                <p><b>What:</b> {props.subject}</p>
                <p><b>When:</b> {props.time}</p>
            </div>
        </div>
    )
}

export default SessionDetails;