import React from 'react' 
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow
} from '@react-google-maps/api'
import RestDesc from '../components/RestDesc'
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
    const [selected, setSelected] = React.useState(null)

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback(map=> {
        mapRef.current = map
    }, [])

    if(loadError) return "Error Loading Map"
    if(!isLoaded) return "Loading Maps"
    
    
    return(
        <div>
            <GoogleMap 
                mapContainerStyle={mapContainerStyle} 
                zoom={10}
                center={center}
                onLoad={onMapLoad}
            >
                {props.restaurants.map(rest => 
                    <Marker 
                        key={rest.id}
                        position={{
                            lat: parseFloat(rest.location.latitude),
                            lng: parseFloat(rest.location.longitude)
                        }}
                        onClick={()=> setSelected(rest)}
                    />)}
                {selected ? 
                <InfoWindow 
                    position={{lat: parseFloat(selected.location.latitude), lng: parseFloat(selected.location.longitude)}}
                    onCloseClick={()=> setSelected(null)}>
                    <div>
                        <h2>{selected.name}</h2>
                        <RestDesc restaurant={selected} />
                    </div>
                </InfoWindow> : null}
            </GoogleMap>

        </div>
    )
}

export default Map