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

    const ThumnailListing = ({listing}) => {
        const price = '$' + new Intl.NumberFormat().format(listing.listPrice)
        const bds = listing.beds.toString()+'beds' + ' ' +listing.baths.toString() +'baths' + ' '+new Intl.NumberFormat().format(listing.sqft) +'sqft'
        return (
        <div className='thumnail' onClick={() => (history.push(`/listings/${listing.id}`))}>
            <img id='thumnail-img'src={listing.photoUrl[0]} />
            <div className="details">
                <h3 id='dollor'>{price}</h3>
                <div id='sqft'>
                    <p id='bedbath'>{listing.beds.toString()+' '+'beds'}</p>
                    <p id='bedbath'>{listing.baths.toString()+' '+'baths'}</p>
                    <p id='bedbath'>{new Intl.NumberFormat().format(listing.sqft) +' '+'Sq.ft'}</p>
                </div>
            </div>
        </div>)
    }
    const PriceTab =({listing}) => {
        const [showWindow, setShowWindow] = useState(false)
        return (
            <>
            <div className='price' 
                onClick={() => (showWindow? setShowWindow(false) : setShowWindow(true))}>
                    <p>{'$ '+ abbrNum((listing.listPrice),1)}</p>
            </div>
            {showWindow &&
            <ThumnailListing listing={listing} />
            }
            </>
        )
    }
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
                    
                <PriceTab listing={listing} />
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