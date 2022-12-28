import { useEffect } from "react"
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import {getListing, fetchListing} from '../../store/listings' 
import Navigation from "../HeadBar";
import './ListingShow.css'

const ListingShowPage = () => {
    const {listingId} = useParams()
    const listing = useSelector(getListing(listingId))

    const dispatch = useDispatch();

    useEffect( () =>{
        if(listingId){
            dispatch(fetchListing(listingId))
        }
    },[listingId])

    return (
        <div className="show">
            <Navigation />
            <h2>{listing.city}</h2>
        </div>
    )
}


export default ListingShowPage