import { useEffect,useState } from "react"
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import {getListing,fetchListing} from '../../store/listings' 
import Navigation from "../HeadBar";
import Appointment from "../Appointment";
import HouseForm from "../HouseForm"
import './ListingShow.css'
import Comments from '../Comments'
import ListingDetails from "./ListingDetails";
import HomeFacts from "./HomeFacts";
import Footer from "../Footer";
import Map from '../GoogleMap'



const ListingShowPage = () => {
    const {listingId} = useParams()
    const listing = useSelector(getListing(listingId))
    // console.log(listing)
    const user = useSelector( state => state.session.user)
    const dispatch = useDispatch();
    

    useEffect( () =>{
            dispatch(fetchListing(listingId))  
            window.scrollTo(0, 0);
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
                    {/* <Map listing={listing} /> */}
                    <Footer />
                </div>
            )

    }
}


export default ListingShowPage