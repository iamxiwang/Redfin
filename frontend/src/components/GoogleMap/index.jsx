import { useMemo } from 'react'
import {GoogleMap, useLoadScript, MarkerF, OverlayView} from '@react-google-maps/api'
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
                zoom={13}
                center ={{lat: 37.767257858624205, lng: -122.43880342502935}}
                mapContainerClassName ='map-container'>
                    <OverlayView
                position={{lat: 37.767257858624205, lng: -122.43880342502935}}
                mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                getPixelPositionOffset={(width, height) => ({
                    x: -(width / 2),
                    y: -(height / 2)
                })}
            >
                <div
                    style={{ backgroundColor: "red", height: "50px", width: "50px" }}
                >Text
                </div>
            </OverlayView>    
            </GoogleMap>
        )
    }
}




export default Map