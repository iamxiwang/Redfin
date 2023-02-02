import './Appointment.css'
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAppointments, fetchAppointments, createAppointment, updateAppointment } from '../../store/appointment';
import { Modal } from '../../context/Modal';
import LoginForm from '../LoginFormModal/LoginForm';
import RequestForm from "../SaveModalRequest/RequestForm";



const Appointment =({listing}) => {
    const dispatch = useDispatch();
    const history = useHistory()
    const [tourTime, setTourTime] = useState('')
    const [message, setMessage] = useState('')
    const user = useSelector((state) => (state.session.user))
    const [showModal, setShowModal] = useState(false)
    const [errors, setErrors] = useState([]);

    const handleSubmit =(e) => {
        e.preventDefault()
        setErrors([]);
        if(!user){
            setShowModal(true)
        }else{
        const appointment = {
            agent_id: listing.agentId,
            user_id: user.id,
            listing_id: listing.id,
            tour_time: tourTime,
            message:message,
            cancelled: false
            
        }
        console.log(tourTime)
        dispatch(createAppointment(appointment))
            .catch(async (res) => {
                let data;
                try {
                // .clone() essentially allows you to read the response body twice
                data = await res.clone().json();
                } catch {
                data = await res.text(); // Will hit this case if the server is down
                }
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else setErrors([res.statusText]);
            });
        setTourTime('')
        setMessage('')
    }
    }

    return (
        <>
        <div className= 'appointment-container'> 
            <form onSubmit={handleSubmit} className='appointment-form' >
                <ul className='errors'>
                    {errors.map(error => <li key={error}>{error}</li>)}
                </ul>
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
                <button className='scheduleTourBtn'>Schedule Tour</button>
            </form>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                <RequestForm setShowModal={setShowModal} onClose={() => setShowModal(false)} />
                </Modal>
            )}
        
        </div>

        </>
    )
}

export default Appointment