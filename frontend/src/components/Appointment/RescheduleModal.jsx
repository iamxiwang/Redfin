import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from '../../context/Modal';
import { updateAppointment } from '../../store/appointment';



const RescheduleModal =({appointment,listing}) => {
    const dispatch= useDispatch()
    const [showModal, setShowModal] = useState(false);
    const [tourTime, setTourTime] =useState(appointment.tourTime)
    const [message, setMessage] = useState(appointment.message)

    const handleSubmit =(e) => {
        e.preventDefault();
        const data = {
            id: appointment.id,
            agent_id:appointment.agentId,
            user_id: appointment.userId,
            listing_id: appointment.listingId,
            tour_time: tourTime,
            message:message,
            cancelled: false
        }
        dispatch(updateAppointment(data))
        setShowModal(false)
    }

    return (
    <>
        <button onClick={() => setShowModal(true)}>Reschedule</button>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                
                <form className='reschedule-appointment' onSubmit={handleSubmit}>
                    <h1>Reschedule Your Tour</h1>
                    <label >DateTime
                        <input type="datetime-local" 
                        value={tourTime}
                        onChange={(e) => setTourTime(e.target.value)}/>
                    </label>

                    <label >Message
                        <input type="text" 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}/>
                    </label>
                
                <button className='reschedule-btn'>Reschedule</button>
                
                </form>
                <div className='current-tour'>
                    <p>CURRENT TOUR</p>
                    <h3>{appointment.tourTime}</h3>
                </div> 
              
            </Modal>
        )}
    </>
    );
}

export default RescheduleModal