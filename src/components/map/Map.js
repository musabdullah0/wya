import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';


export default class Map extends Component {

    constructor(props) {
        super(props);
        this.state = {
            center: {
                lat: 30.577457,
                lng: -97.652851
            },
            zoom: 15
        }
    }

    render() {
        return (
            <div className="container map-container">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyBNNJQot0Gv7zqN0f2N1tv-pqDO4_fn_FE' }}
                    defaultCenter={this.state.center}
                    defaultZoom={this.state.zoom}
                >
                </GoogleMapReact>
            </div>
        )
    }
}
