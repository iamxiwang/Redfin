import { useEffect } from "react"
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import {getListing, fetchListing} from '../../store/listings' 
import Navigation from "../HeadBar";
import Appointment from "../Appointment";
import HouseForm from "../HouseForm"
import './ListingShow.css'

const ListingShowPage = () => {
    const {listingId} = useParams()
    const listing = useSelector(getListing(listingId))

    const dispatch = useDispatch();

    useEffect( () =>{
        if(listingId){
            dispatch(fetchListing(listingId))
        }
        //[listingId] can add to independency
    },[listingId])
    console.log(listing)

    return (
        <div className="show">
            <Navigation />
            {/* <img src={listing.imgUrl} alt="" />
            <h2>{listing.city}</h2> */}
            <Appointment/>
            <HouseForm />
        </div>
    )
}


export default ListingShowPage