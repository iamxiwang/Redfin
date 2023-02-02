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

    console.log(appointments)
    useEffect( () =>{
        dispatch(fetchListings())
    },[])


    useEffect( () =>{
        dispatch(fetchAppointments(user.id))
        dispatch(fetchListings())
    },[])


    if(listings.length !== 0 ){
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
    }
}

export default TourList