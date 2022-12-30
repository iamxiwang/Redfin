import { useEffect } from "react"
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import {getListing, fetchListing} from '../../store/listings' 
import Navigation from "../HeadBar";
import Appointment from "../Appointment";
import HouseForm from "../HouseForm"
import Map from "../GoolgeMap";
import Reviews from "../Reviews";
import './ListingShow.css'

const ListingShowPage = () => {
    const {listingId} = useParams()
    const listing = useSelector(getListing(listingId))
    console.log(listing)

    const dispatch = useDispatch();

    useEffect( () =>{
        if(listingId){
            dispatch(fetchListing(listingId))
        }
        
    },[listingId])


    const fullAddress = listing.streetAddress +listing.city +' '+ listing.state +' '+listing.zip
    const priceValue = '$' + new Intl.NumberFormat().format(listing.listPrice)
    const bedValue = listing.beds.toString() 
    const bathValue = listing.baths.toString()
    const sqftValue = new Intl.NumberFormat().format(listing.sqft)
    const estMonthlyPayment = 'Est. '+ '$' + new Intl.NumberFormat().format(listing.estMoPayment)

    return (
        <div >
            <Navigation />
            <div className="single-listing-container">
                <img id ='single-listing-img' src={listing.imgUrl} alt="" />
                <div className="listing-main-stats">
                    <div className='abp-address'>
                        <div id='bold-address'>{listing.streetAddress}</div>
                        <div id='sub-text'>{listing.city}</div>
                        <div id='sub-text'>{listing.state}</div>
                        <div id='sub-text'>{listing.zip}</div>
                    </div>
                    <div className="middle-meat">
                        <h2>{priceValue}</h2>
                        <div id='abp-beds'>
                            <div id='abp-number'>{bedValue}</div>
                            <div id='abp-string'>Beds</div>
                        </div>

                        <div id='abp-baths'>
                            <div id='abp-number'>{bathValue}</div>
                            <div id='abp-string'>Baths</div>
                        </div>
                        <div id='abp-sqft'>
                            <div id='abp-number'>{sqftValue}</div>
                            <div id='abp-string'>Sqft</div>
                        </div>
                        <Map prop ={listing}/>
                    </div>
            </div>
            {/* <Appointment/>
            <HouseForm /> */}
            <Reviews />
            </div>
        </div>
    )
}


export default ListingShowPage