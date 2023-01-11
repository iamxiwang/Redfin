import { useMemo } from 'react'
import {GoogleMap, useLoadScript, MarkerF} from '@react-google-maps/api'
import './GoogleMap.css'

const Map =({listing}) => {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY
    })
    // console.log(listing)
    const latValue = listing.lat;
    const lngValue = listing.lng

    const center = useMemo( () => ({lat: latValue,lng: lngValue}), [])
    if(!isLoaded){
        return <div>Loading...  <i className="fa-duotone fa-spinner"></i></div>
    }else{
        return (
            
            <GoogleMap
                zoom={11}
                center ={{lat: 37.767257858624205, lng: -122.43880342502935}}
                mapContainerClassName ='map-container'>
                <MarkerF position ={center}  />
                {/* <MarkerF position={{ lat: 40.712776, lng: -74.005974 }} /> */}
            </GoogleMap>
        )
    }
}




export default Map