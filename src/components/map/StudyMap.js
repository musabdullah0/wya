import React, { Component } from 'react'
import { Spinner } from 'reactstrap';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import MAPS_API_KEY from '../../config/mapConfig'
import MarkerList from './MarkerList'
import CreateSession from '../sessions/CreateSession'
import { firestoreConnect } from 'react-redux-firebase'


class StudyMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentLocation: null,
            modal: false
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

    toggleModal = () => {
        this.setState({ modal: !this.state.modal })
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
        console.log(sessions)
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
                    <CreateSession
                        toggle={this.toggleModal}
                        isOpen={this.state.modal}
                        coords={this.state.currentLocation}
                    />
                </div>
                <button
                    className="btn btn-dark center-block"
                    id="study-btn"
                    onClick={this.toggleModal}
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

const mapStateToProps = (state) => {
    return {
        sessions: state.firestore.sessions,
        auth: state.firebase.auth
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'sessions' },
    ]),
    GoogleApiWrapper({
        apiKey: MAPS_API_KEY
    }))
    (StudyMap)
