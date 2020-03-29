import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { connect } from 'react-redux'
import { compose } from 'redux'

class StudyMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            center: {
                lat: 30.577457,
                lng: -97.652851
            }        
        }
    }

    dropMarkers() {
        return this.props.sessions.map(session => (
            <Marker 
                session={session} 
                key={session.id}
                position={{ lat: session.latitude, lng: session.longitude }}
                label={{
                    text: session.subject,
                    fontWeight: 'bold'
                }}
            />
        ))
    }

    render() {

        const styles = {
            width: '100%',
            height: '95%',
        }

        return (
            <div className="container map-container">
                <Map
                    style={styles}
                    google={this.props.google}
                    zoom={15}
                    initialCenter={this.state.center}
                >
                {this.dropMarkers()}
                </Map>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sessions: state.session.sessions
    }
}

export default compose(
    connect(mapStateToProps),
    GoogleApiWrapper({
        apiKey: 'AIzaSyBNNJQot0Gv7zqN0f2N1tv-pqDO4_fn_FE'
    }))
    (StudyMap)

/*
{this.state.sessions.map(session => (
    <StudyMarker session={session} />
))}
*/