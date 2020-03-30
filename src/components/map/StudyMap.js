import React, { Component } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import MAPS_API_KEY from '../../config/mapConfig'
import MarkerList from './MarkerList'

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
                <MarkerList sessions={this.props.sessions} />
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
        apiKey: MAPS_API_KEY
    }))
    (StudyMap)

/*
{this.state.sessions.map(session => (
    <StudyMarker session={session} />
))}
*/