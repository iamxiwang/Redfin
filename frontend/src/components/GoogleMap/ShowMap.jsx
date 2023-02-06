import {useState, useMemo } from 'react'
import {GoogleMap, useLoadScript, Marker,OverlayView} from '@react-google-maps/api'
import { useHistory } from "react-router-dom";

import './GoogleMap.css'


//get mutiple props to react component
const ShowMap =({listings, zoom, centerX}) => {
    const history = useHistory();
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY
    })

    const center = useMemo( () => (centerX), [centerX])

    if(!isLoaded){
        return <div>Loading...  <i className="fa-duotone fa-spinner"></i></div>
    }else{
        return (
            
            <GoogleMap
                zoom={zoom}
                // center ={{lat:37.77919842412621, lng: -122.44240831361468}}
                center={center}
                mapContainerClassName ='map-container'>

                {listings.map (
                    (listing,i) => 

                (<Marker 
                    position ={{lat:listing.lat,lng: listing.lng}} 
                    key={i}
                    color='green'
                    // animation={google.maps.Animation.BOUNCE}
                    />)
                )}
                </GoogleMap>
            
        )
    }
}




export default ShowMap