import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react-17'
import { useState } from 'react';
const REACT_APP_GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY

const mapStyles = {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
    height: '50%'
}

const MapContainer = (props) => {
    const [showInfoWindow, setShowInfoWindow] = useState(false)
    const [activeMarker, setActiveMarker] = useState({})
    const [selectedPlace, setSelectedPlace] = useState({})
    
    const onMarkerClick = (props, marker, e) => {
        setSelectedPlace(props)
        setActiveMarker(marker)
        setShowInfoWindow(true)
    }

    const onMapClick = (props) => {
        if (showInfoWindow) {
            setShowInfoWindow(false)
            setActiveMarker(null)
        }
    }
    return (
        <div className='mapContainer' >
            <Map 
                onClick={onMapClick}
                google={props.google}
                style={mapStyles}
                initialCenter={{
                    lat: props.trail.latitude,
                    lng: props.trail.longitude
                }}
                zoom={14}
                >

                {props.trail && <Marker 
                                    onClick={onMarkerClick}
                                    position={{lat: props.trail.latitude, lng: props.trail.longitude}}
                                    name={props.trail.name}
                                    location={props.trail.location}
                                    difficulty={props.trail.difficulty}
                                    length={props.trail['length'] } 
                                    elevationChange={props.trail.elevationChange}
                                    routeType={props.trail.routeType}
                                />                    
                } 

                {props.trails && 
                    props.trails.map((trail, index) => (
                        <Marker 
                            key={index}
                            onClick={onMarkerClick}
                            position={{lat: trail.latitude, lng: props.trail.longitude}}
                            name={trail.name}
                            location={trail.location}
                            difficulty={trail.difficulty}
                            length={trail['length'] } 
                            elevationChange={trail.elevationChange}
                            routeType={trail.routeType}
                        />
                    ))
                                                    
                }   

                <InfoWindow
                    marker={activeMarker}
                    visible={showInfoWindow}
                    >
                        <h1>{selectedPlace.name}</h1>
                        <h4>{`Location: ${selectedPlace.location}`}</h4>
                        <h4>{`Difficulty: ${selectedPlace.difficulty} miles `}</h4>
                        <h4>{`Length: ${selectedPlace['length']}`}</h4>
                        <h4>{`Elevation Change: ${selectedPlace.elevationChange}`}</h4>
                        <h4>{`Route type:: ${selectedPlace.routeType}`}</h4>
                    </InfoWindow>

            </Map>
        </div>
    )
  
}

export default GoogleApiWrapper({
  apiKey: REACT_APP_GOOGLE_API_KEY
})(MapContainer)