import csrfFetch from "./csrf"

export const RECEIVE_APPOINTMENTS ='appointments/RECEIVE_APPOINTMENTS';
export const RECEIVE_APPOINTMENT ='appointments/RECEIVE_APPOINTMENT'
export const REMOVE_APPOINTMENT ='appointments/REMOVE_APPOINTMENT'


// action createor function

const receiveAppointments = (appointments) =>({
    type: RECEIVE_APPOINTMENTS,
    payload: appointments
})


const receiveAppointment = (appointment) =>({
    type: RECEIVE_APPOINTMENT,
    payload: appointment
})

const removeAppointment = (appointmentId) => ({
    type: REMOVE_APPOINTMENT,
    payload: appointmentId
})


// store selector

export const getAppointments =(state) => {
    if(state && state.appointments){
        return Object.values(state.appointments)
    }

    return []
}

export const getAppointment =(appointmentId) =>(state) =>{
    if(state && state.appointments){
        return state.appointments[appointmentId]
    }else{
        return null
    }
}


// thunk action

export const fetchAppointments = (userId) => async(dispatch) => {
    const res = await csrfFetch(`/api/users/${userId}/appointments`)

    if(res.ok){
        const data = await res.json()
        dispatch(receiveAppointments(data))
    }
}

export const fetchAppointment = (appointmentId) => async(dispatch) => {
    const res = await csrfFetch(`/api/appointments/${appointmentId}`)

    if(res.ok) {
        const data = await res.json()
        dispatch(receiveAppointment(data))
    }
}

export const createAppointment =(appointment) => async(dispatch) => {
    const res = await csrfFetch('/api/appointments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(appointment) 
    })

    if(res.ok){
        const data = await res.json()
        dispatch(receiveAppointment(data))
    }
}


export const updateAppointment = (appointment) => async(dispatch) => {
    const res = await csrfFetch(`/api/appointments/${appointment.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(appointment)
    })

    if(res.ok){
        const data = await res.json();
        dispatch(receiveAppointment(data))
    }
}

export const deleteAppointment =(appointmentId) => async(dispatch) => {
    const res = await csrfFetch(`/api/appointments/${appointmentId}`, {
        method: 'DELETE'
    })
    if(res.ok){
        dispatch(removeAppointment(appointmentId))
    }
}

// reducer

const appointmentsReducer =(state={}, action) => {
    switch(action.type){
        case RECEIVE_APPOINTMENTS:
            return{...action.payload}
        case RECEIVE_APPOINTMENT:
            return{...state,[action.payload.id]:action.payload}
        case REMOVE_APPOINTMENT:
            const newState ={...state}
            delete newState[action.payload]
            return newState
        default: 
            return state
    }
}

export default appointmentsReducer

