import './Appointment.css'
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Appointment =() => {


    return (
        <>
        <div class= 'appointment'> 
            <form >
                <h1>Appointment</h1>
                <label >email
                    <input type="text" name="" id="" />
                </label>
                <label >phone
                    <input type="text" name="" id="" />
                </label>


            </form>
        
        </div>

        </>
    )
}

export default Appointment