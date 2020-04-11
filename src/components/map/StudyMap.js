import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import MAPS_API_KEY from '../../config/mapConfig'
import MarkerList from './MarkerList'

class StudyMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentLocation: null
        }
    }

    componentWillMount() {
        // center map on current location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => {
                console.log('initial center', pos.coords);
                this.setState({
                    currentLocation: {
                        lat: pos.coords.latitude,
                        lng: pos.coords.longitude
                    }
                })
            });
        } else {
            this.setState({
                currentLocation: {
                    lat: 30.577457,
                    lng: -97.652851
                }
            })
        }
    }

    currentLocationMarker() {
        console.log('dropped current location marker')
        return (
            <Marker
                position={this.state.currentLocation}
                draggable
                label={{
                    text: 'Drag to Current Location',
                    fontWeight: 'bold'
                }}
            />
        );
    }

    startStudying = () => {
        console.log('start studying button pressed')
    }


    render() {
        const { sessions, auth } = this.props;
        // if (!auth.uid){
        //     console.log('u not signed in fam')
        //     return <Redirect to='/login' /> 
        // } 
        const styles = {
            width: '100%',
            height: '95%',
        }

        return this.state.currentLocation ? (
            <div className="center-block text-center">
                <div className="container map-container">
                    <Map
                        id="studymap"
                        style={styles}
                        google={this.props.google}
                        zoom={15}
                        initialCenter={this.state.currentLocation}
                    >
                        {this.currentLocationMarker()}
                        <MarkerList sessions={sessions} />
                    </Map>
                </div>
                <button
                    className="btn btn-dark center-block"
                    id="study-btn"
                    onClick={this.startStudying}
                >
                    Start Studying
                </button>
            </div>
        ) : (
                <div>Loading...</div>
            )
    }
}

const mapStateToProps = (state) => {
    return {
        sessions: state.session.sessions,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    GoogleApiWrapper({
        apiKey: MAPS_API_KEY
    }))
    (StudyMap)
