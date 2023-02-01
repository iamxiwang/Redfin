import { useMemo } from 'react'
import {GoogleMap, useLoadScript, MarkerF,OverlayView} from '@react-google-maps/api'
import './GoogleMap.css'


//get mutiple props to react component
const SearchMap =({listings, zoom, centerX}) => {
    const google = window.google;
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY
    })

    // console.log(listings)

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
                // (<OverlayView key={i} position ={{lat:listing.lat,lng: listing.lng}}    
                //     mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
                //    <h1>listing</h1></OverlayView>))}
                
                (<MarkerF 
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




export default SearchMap