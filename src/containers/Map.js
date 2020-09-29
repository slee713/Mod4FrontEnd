import React from 'react' 
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow
} from '@react-google-maps/api'

const libraries = ["places"]
const mapContainerStyle = {
    width: '80vw',
    height: '80vh'
}
const center = {
    lat: 38.907192,
    lng: -77.036873
}

const Map = props => {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLES_MAPS_API_KEY,
        libraries
    })

    if(loadError) return "Error Loading Map"
    if(!isLoaded) return "Loading Maps"
    
    
    return(
        <div>
            <GoogleMap 
                mapContainerStyle={mapContainerStyle} 
                zoom={10}
                center={center}
            >
                {props.restaurants.map(rest => 
                    <Marker 
                        key={rest.id}
                        position={{
                            lat: parseFloat(rest.location.latitude),
                            lng: parseFloat(rest.location.longitude)
                        }}
                    />)}
            </GoogleMap>

        </div>
    )
}

export default Map