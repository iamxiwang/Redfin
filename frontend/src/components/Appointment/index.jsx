import './Appointment.css'
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Appointment =() => {


    return (
        <>
        <div className= 'appointment-container'> 
            <form className='appointment-form' >
                <h2>Go tour this home</h2>
                <label >DateTime
                    <input type="datetime-local" />
                </label>
                <label >phone
                    <input type="tel"  />
                </label>
                <button className='scheduleTourBtn'>Schedule tour</button>
            </form>
        
        </div>

        </>
    )
}

export default Appointment