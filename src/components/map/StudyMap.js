import React, { Component } from 'react'
import { Spinner } from 'reactstrap';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import MAPS_API_KEY from '../../config/mapConfig'
import MarkerList from './MarkerList'
import CreateSession from '../sessions/CreateSession'
import { firestoreConnect } from 'react-redux-firebase'
import SessionDetails from '../sessions/SessionDetails';


class StudyMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentLocation: null,
            createSessionModal: false,
            sessionDetailsModal: false,
            selectedSession: null
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

    markerMoved = (markerProps, marker, coord) => {
        const { latLng } = coord;
        this.setState({
            currentLocation: {
                lat: latLng.lat(),
                lng: latLng.lng()
            }
        })
    }

    currentLocationMarker() {
        /*
            don't show when in session
        */
        return (
            <Marker
                key={'currentLocationMarker'}
                position={this.state.currentLocation}
                draggable
                label={{
                    text: 'Drag to Current Location',
                    fontWeight: 'bold'
                }}
                onDragend={this.markerMoved}
            />
        );
    }

    toggleCreateSessionModal = () => {
        this.setState({ createSessionModal: !this.state.createSessionModal })
    }

    toggleSessionDetailsModal = () => {
        this.setState({ sessionDetailsModal: !this.state.sessionDetailsModal })
    }

    handleMarkerClick = (session) => {
        this.setState({
            sessionDetailsModal: true,
            selectedSession: session
        })
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
                        <MarkerList sessions={sessions} key='markerList' onClick={this.handleMarkerClick} />
                    </Map>
                    <CreateSession
                        toggle={this.toggleCreateSessionModal}
                        isOpen={this.state.createSessionModal}
                        coords={this.state.currentLocation}
                    />
                    <SessionDetails
                        session={this.state.selectedSession}
                        toggle={this.toggleSessionDetailsModal}
                        isOpen={this.state.sessionDetailsModal}
                    />
                </div>
                <button
                    className="btn btn-dark center-block"
                    id="study-btn"
                    onClick={this.toggleCreateSessionModal}
                >
                    Start Studying
                </button>
            </div>
        ) : (
                <div className="jumbotron d-flex align-items-center min-vh-100">
                    <div className="container text-center">
                        <Spinner color="dark" />
                    </div>
                </div>
            )
    }
}



export default StudyMap
