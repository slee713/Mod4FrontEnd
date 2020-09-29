// import React from 'react'
// import './Search.css'
// import usePlacesAutoComplete, {
//     getGeocode,
//     getLatLng
// } from 'use-places-autocomplete'

// import {
//     Combobox,
//     ComboboxInput,
//     ComboboxPopover,
//     ComboboxList,
//     ComboboxOption
// } from '@reach/combobox'
// import '@reach/combobox/styles.css'

// const Search = props => {
//     const {
//         ready,
//         value,
//         suggestions: {status, data},
//         setValue,
//         clearSuggestion
//     } = usePlacesAutoComplete({
//         requestOptions:{
//             locations: {lat: () => 38.907192, lng: () => -77.036873},
//             radius: 10 * 1000
//         }
//     })
//     return (
//         <div className="search">
//             <Combobox onSelect={(address)=> console.log(address)}>
//                 <ComboboxInput
//                     value={value}
//                     onChange={(e)=> setValue(e.target.value)}
//                     disabled={!ready}
//                     placeholder ="Search For Location"
//                 />
//                 <ComboboxPopover>
//                     {status === "OK" && data.map(({id, description}) =>
//                         <ComboboxOption key={id} value={description}/>)}
//                 </ComboboxPopover>

//             </Combobox>
//         </div>)
// }

// export default Search






