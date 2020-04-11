import React from 'react'
import { Marker } from 'google-maps-react';

const MarkerList = props => {
    /* Map sends props directly to marker children, since we're nesting markers inside
       a list component, we need to propogate those props down
     */
    if (props.sessions) {
        return props.sessions.map(session => (
            <Marker
                {...props}
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
}

export default MarkerList
