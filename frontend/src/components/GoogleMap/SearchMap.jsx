import {useState, useMemo } from 'react'
import {GoogleMap, useLoadScript, MarkerF,OverlayView} from '@react-google-maps/api'
import { useHistory } from "react-router-dom";
import abbrNum from './abbreviateNum';
import './GoogleMap.css'


//get mutiple props to react component
const SearchMap =({listings, zoom, centerX}) => {
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
                (<OverlayView key={i} position ={{lat:listing.lat,lng: listing.lng}}    
                    mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
                    <div className='price' 
                    onClick={() => (history.push(`/listings/${listing.id}`))}>
                        <p>{'$'+ abbrNum((listing.listPrice),1)}</p>
                    </div>
                
                </OverlayView>))}
                
                {/* (<MarkerF 
                    position ={{lat:listing.lat,lng: listing.lng}} 
                    key={i}
                    color='green'
                    // animation={google.maps.Animation.BOUNCE}
                    />)
                )}
                 */}
                </GoogleMap>
            
        )
    }
}




export default SearchMap