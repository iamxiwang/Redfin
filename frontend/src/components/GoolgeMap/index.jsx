import { useMemo } from 'react'
import {GoogleMap, useLoadScript, MarkerF} from '@react-google-maps/api'
import './GoogleMap.css'

const Map =({prop}) => {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY
    })
    // console.log(prop)
    const latValue = prop.lat;
    // console.log(latValue)
    const lngValue = prop.lng
    const center = useMemo( () => ({lat: latValue,lng: lngValue}), [])
    // console.log(Marker)
    if(!isLoaded){
        return <div>Loading...  <i className="fa-duotone fa-spinner"></i></div>
    }else{
        return (
            
            <GoogleMap
                zoom={14}
                center ={center}
                mapContainerClassName ='map-container'>
                <MarkerF position ={center} />
            </GoogleMap>
        )
    }
}

export default Map