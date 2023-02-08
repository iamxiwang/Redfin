import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import Appointment from ".";
import { fetchAppointments, getAppointments, updateAppointment,deleteAppointment} from "../../store/appointment";
import { fetchListing, fetchListings, getListings } from "../../store/listings";

import Navigation from "../HeadBar";
import TourListItem from './TourListItem'


const TourList =() => {
    const dispatch = useDispatch()
    const user = useSelector((state) => (state.session.user))
    const appointments = useSelector(getAppointments)
    const listings = useSelector(getListings)

    console.log(listings)


    useEffect( () =>{
        dispatch(fetchListings())
        if(user){
        dispatch(fetchAppointments(user.id))
        }
        window.scrollTo(0, 9999);
    },[dispatch,user])


    if(listings.length !== 0 && user ){
        return (
                <>
                <Navigation />
                <div className="mygreenfin-tour-container">
                    {appointments.map( (appointment ,i) => (
                        <TourListItem  key={i} appointment = {appointment} listings={listings}/>)) 
                    }
                </div>
                </>
            )
    }else if(listings.length === 0){
        return(
            <>
            <Navigation />
            <div>
                <h1>Loading...</h1>
            </div>
            </> 
        )
    }else if(!user){
            return (
                <div className='new-listing-page'>
                    <Navigation />
                    <div className='no-user'>
                    <h1>Please log in to See Tour list</h1>
                    </div> 
                </div>
            )
    
    }
}

export default TourList