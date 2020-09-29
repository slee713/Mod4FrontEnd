import React from 'react' 
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow
} from '@react-google-maps/api'
import RestDesc from '../components/RestDesc'

import usePlacesAutocomplete, {
    getGeocode,
    getLatLng
} from 'use-places-autocomplete'

import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption
} from '@reach/combobox'
import '@reach/combobox/styles.css'
// import Search from '../components/Search'

const libraries = ["places"]
const mapContainerStyle = {
    width: '60vw',
    height: '60vh'
}
const center = {
    lat: 38.907192,
    lng: -77.036873
}



export default function Map(props) {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: "AIzaSyAqOoEyh98vsAdgV2Rl4N7v9agnavbl_k0",
        libraries
    })
    const [selected, setSelected] = React.useState(null)

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback(map=> {
        mapRef.current = map
    }, [])

    const panTo = React.useCallback(({lat,lng}) => {
        mapRef.current.panTo({lat, lng})
        mapRef.current.setZoom(14)
    }, [])

    if(loadError) return "Error Loading Map"
    if(!isLoaded) return "Loading Maps"
    
    
    return(
        <div>
            <Search panTo={panTo}/>
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

function Search ({panTo}) {
    const {
        ready,
        value,
        suggestions: {status, data},
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions:{
            location: {lat: () => 38.907192, lng: () => -77.036873},
            radius: 10 * 1000
        }
    })
    return (
        <div className="search">
            <Combobox onSelect={
                async (address)=> {
                    setValue(address, false)
                    clearSuggestions()
                    try{
                        const results = await getGeocode({address})
                        const {lat, lng} = await getLatLng(results[0])
                        panTo({lat, lng})
                    } catch (error) {
                        console.log('error!')
                    }
                
            }}>
                <ComboboxInput
                    value={value}
                    onChange={(e)=> setValue(e.target.value)}
                    disabled={!ready}
                    placeholder ="Search For Location"
                />
                <ComboboxPopover >
                    <ComboboxList>
                    {status === "OK" && 
                    data.map(({id, description}) => (
                        <ComboboxOption key={id} value={description}/>
                    ))}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </div>
    )
}
