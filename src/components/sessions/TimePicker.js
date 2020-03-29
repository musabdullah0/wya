import React from 'react'
import TimeField from 'react-simple-timefield';

const TimePicker = (props) => {
    let today = new Date();
    let now = today.getHours() + ':' + today.getMinutes();
    return (
        <div className="form-group row mb-4">
            <label htmlFor="time-input" className="col-2 col-form-label">Time</label>
            <div className="col-10">
                <TimeField
                    value={now}
                    onChange={props.onChange}
                    style={{
                        width: '100%',
                    }}
                    className="form-control"
                    input={<input type="text" id="time" placeholder="Enter time in 24 hour format" />}
                />
            </div>
        </div>
    )
}

export default TimePicker
