import { useMemo } from 'react'
import {GoogleMap, useLoadScript, MarkerF} from '@react-google-maps/api'
import './GoogleMap.css'


//get mutiple props to react component
const SearchMap =({listings, zoom, center}) => {
    const google = window.google;
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY
    })
    // console.log(listings)
    // const latValue = listing.lat;
    // const lngValue = listing.lng

    // const center = useMemo( () => ({lat: latValue,lng: lngValue}), [])



    if(!isLoaded){
        return <div>Loading...  <i className="fa-duotone fa-spinner"></i></div>
    }else{
        return (
            
            <GoogleMap
                zoom={zoom}
                // center ={{lat:37.77919842412621, lng: -122.44240831361468}}
                center={center}
                mapContainerClassName ='map-container'>
                {listings?.map ((listing,i) => 

                (<MarkerF 
                    position ={{lat:listing.lat,lng: listing.lng}} 
                    key={i}
                    color='green'
                    // animation={google.maps.Animation.BOUNCE}
                    />))
                }
                {/* <MarkerWithLabel
                    position-bind="$page.map.center"
                    title="This is a custom icon marker with label"
                    icon="https://codaxy.github.io/cx-google-maps/assets/img/cx.png"
                    labelAnchor={new google.maps.Point(0,0)}
                    labelStyle={{
                        backgroundColor: "rgba(20, 40, 120, 0.5)",
                        color: "white",
                        fontSize: "24px",
                        padding: "16px"
                    }}
                    onClick="onMarkerClick">
                    <span>cx-google-maps</span>
                </MarkerWithLabel> */}
            
            </GoogleMap>
        )
    }
}




export default SearchMap