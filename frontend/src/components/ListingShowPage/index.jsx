import { useEffect,useState } from "react"
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import listingsReducer, {getListing,getListings,fetchListing} from '../../store/listings' 
import Navigation from "../HeadBar";
import Appointment from "../Appointment";
import HouseForm from "../HouseForm"
import './ListingShow.css'
import { fetchComments, getComments } from "../../store/comment";
import Comments from '../Comments'
import ListingDetails from "./ListingDetails";
import HomeFacts from "./HomeFacts";



const ListingShowPage = () => {
    const {listingId} = useParams()
    const listing = useSelector(getListing(listingId))
    // console.log(listing)
    const user = useSelector( state => state.session.user)
    const dispatch = useDispatch();
    

    useEffect( () =>{
            dispatch(fetchListing(listingId))  
    },[listingId,dispatch])

    if(listing){
        
            return (
                <div >
                    <Navigation />
                    <ListingDetails listing= {listing} />
                    {user &&
                    <Comments listingId = {listingId}/>
                    }

                    <HomeFacts listing ={listing}/>
                    {/* <HouseForm /> */}
                </div>
            )

    }
}


export default ListingShowPage