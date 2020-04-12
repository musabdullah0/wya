import React, { useState } from 'react'
import { Marker, InfoWindow } from 'google-maps-react';
import SessionDetails from '../sessions/SessionDetails'

const MarkerList = props => {
    /* Map sends props directly to marker children, since we're nesting markers inside
       a list component, we need to propogate those props down
     */
    const { sessions } = props;
    const [selectedMarker, setSelectedMarker] = useState(null);

    if (sessions) {
        return (
            sessions.map((session) => (
                <Marker
                    {...props}
                    key={session.id}
                    position={{ lat: session.coords.lat, lng: session.coords.lng }}
                    label={{
                        text: session.subject,
                        fontWeight: 'bold'
                    }}
                    onClick={() => props.onClick(session)}
                />
            ))
        );
    } else {
        return null;
    }
}

export default MarkerList
