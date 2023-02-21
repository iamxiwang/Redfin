import { useEffect,useState } from "react"
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import {getListing,fetchListing} from '../../store/listings' 
import Navigation from "../HeadBar";
import './ListingShow.css'
import ListingDetails from "./ListingDetails";
import Footer from "../Footer";




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
                    <div className='media'>
                    <ListingDetails listing= {listing} />
                    
                    {/* <HomeFacts listing ={listing}/> */}
                    </div>
                    {/* <HouseForm /> */}
                    {/* <Map listing={listing} /> */}
                    <Footer />
                </div>
            )

    }
}


export default ListingShowPage