import './Appointment.css'
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAppointments, fetchAppointments, createAppointment, updateAppointment } from '../../store/appointment';


const Appointment =({listing}) => {
    const dispatch = useDispatch();
    const history = useHistory()
    const [tourTime, setTourTime] = useState('')
    const [message, setMessage] = useState('')
    const user = useSelector((state) => (state.session.user))


    const handleSubmit =(e) => {
        e.preventDefault()
        const appointment = {
            agent_id: listing.agentId,
            user_id: user.id,
            listing_id: listing.id,
            tour_time: tourTime,
            message:message,
            cancelled: false
        }
        dispatch(createAppointment(appointment))
        setTourTime('')
        setMessage('')
        history.push('/mygreenfin/tours')
    }

    return (
        <>
        <div className= 'appointment-container'> 
            <form onSubmit={handleSubmit} className='appointment-form' >
                <h2>Go tour this home</h2>
                <label >DateTime
                    <input 
                    value ={tourTime} 
                    onChange={(e) => setTourTime(e.target.value)}
                    type="datetime-local" />
                </label>
                <label >Message
                    <input 
                    value={message} 
                    onChange={(e)=> setMessage(e.target.value)}
                    type="text"  />
                </label>
                <button className='scheduleTourBtn'>Schedule tour</button>
            </form>
        
        </div>

        </>
    )
}

export default Appointment