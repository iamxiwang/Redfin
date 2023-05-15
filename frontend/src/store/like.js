import csrfFetch from "./csrf";

export const RECEIVE_LIKES = 'likes/RECEIVE_LIKES';
export const REMOVE_LIKE = 'likes/REMOVE_LIKE';
export const RECEIVE_LIKE ='likes/RECEIVE_LIKE'
export const CLEAR_LIKES = 'likes/CLEAR_LIKES'

//action creator function

const receiveLikes = (likes) => (
    {
        type: RECEIVE_LIKES,
        payload: likes
    }
)

const receiveLike = (like) => (
    {
        type :RECEIVE_LIKE,
        payload: like
    }
)

const removeLike = (likeId) => (
    {
        type: REMOVE_LIKE,
        payload: likeId
    }
)

const clearLikes = () => ({
    type: CLEAR_LIKES
})

export {
    receiveLikes,
    receiveLike,
    removeLike,
    clearLikes, // Add this line
};
//store selector i only need to display all listings associated with the logged in user

export const getLikes = (state) => {
    if (state && state.likes){
        let res= []
        let arr =  Object.values(state.likes)
        for(let i = 0; i < arr.length; i++){
            res.push(arr[i].listingId)
        }
        return res
    }
}

// thunk action

export const fetchLikes = (userId) => async(dispatch) => {
    const res = await csrfFetch(`/api/users/${userId}/likes`)
    if(res.ok){
        const data = await res.json()
        dispatch(receiveLikes(data))
    }
}

export const createLike = (like) => async(dispatch) => {
    const res = await csrfFetch('/api/likes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(like) 
    })

    if(res.ok){
        const data = await res.json()
        dispatch(receiveLike(data))
    }
}

export const deleteLike = (likeId) =>async(dispatch) => {
    const res = await csrfFetch(`/api/likes/${likeId}`, {
        method: 'DELETE'
    })

    if(res.ok){
        dispatch(removeLike(likeId))
    }
}


//reducer 
const likesReducer = (state = {}, action) => {
    switch(action.type){
        case RECEIVE_LIKES:
            return{...action.payload}
        case REMOVE_LIKE:
            const newState = {...state}
            delete newState[action.payload]
            return newState
        case CLEAR_LIKES:
            return {}
        default:
            return state
    }
}


export default likesReducer