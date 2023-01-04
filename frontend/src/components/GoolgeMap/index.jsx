import { useMemo } from 'react'
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api'
import './GoogleMap.css'

const Map =({prop}) => {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY
    })
    const latValue = parseFloat(prop.lat);
    const lngValue = parseFloat(prop.lng)
    const center = useMemo( () => ({lat: latValue,lng: lngValue}), [])
    if(!isLoaded){
        return <div>Loading...  <i className="fa-duotone fa-spinner"></i></div>
    }else{
        return (
            <GoogleMap
                zoom={10}
                center ={center}
                mapContainerClassName ='map-container'>
                <Marker position ={center} />
            </GoogleMap>
        )
    }
}

export default Map