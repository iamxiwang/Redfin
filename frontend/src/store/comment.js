import csrfFetch from "./csrf"


export const RECEIVE_COMMENTS = 'comments/RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'comments/RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'comments/REMOVE_COMMENT'

//action creator function
const receiveComments = (comments) => ({
    type: RECEIVE_COMMENTS,
    payload: comments
})

const receiveComment = (comment) =>({
    type: RECEIVE_COMMENT,
    payload: comment
})

const removeComment = (commentId) => ({
    type: REMOVE_COMMENT,
    payload: commentId
})

// store selector

export const getComments = (state) => {
    if (state && state.comments){
        return Object.values(state.comments)
    }
    return [];
}


export const getComment = (commentId) =>(state) => {
    if(state && state.comments){
        return state.comments[commentId]
    }else{
        return null
    }
}

//thunk 

export const fetchComments = (listingId) => async dispatch => {
    const res = await csrfFetch(`/api/listings/${listingId}/comments`)

    if(res.ok){
        const data = await res.json();
        dispatch(receiveComments(data))
    }
}

export const fetchComment =(commentId) => async dispatch => {
    const res = await csrfFetch(`/api/comments/${commentId}`)

    if(res.ok){
        const data = await res.json()
        dispatch(receiveComment(data))
    }
}
export const createComment = (comment) => async (dispatch) => {
    const res = await csrfFetch('/api/comments',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment) 
    })
    if(res.ok){
        const data = await res.json()
        dispatch(receiveComment(data))
    }
}

export const updateComment = (comment) => async dispatch => {
    const res = await csrfFetch(`/api//comments/${comment.id}`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment) 
    })

    if(res.ok){
        const data = await res.json();
        dispatch(receiveComment(data))
    }
}

export const deleteComment = (commentId) => async(dispatch) => {
    const res = await csrfFetch(`/api/comments/${commentId}`,{
        method: 'DELETE'
    })

    if(res.ok){
        dispatch(removeComment(commentId))
    }
}

//reducer 

const commentsReducer = (state={}, action) => {
    switch(action.type){
        case RECEIVE_COMMENTS:
            return {...action.payload}
        case RECEIVE_COMMENT:
            return {...state,[action.payload.id]: action.payload}
        case REMOVE_COMMENT:
            const newState = {...state};
            delete newState[action.payload];
            return newState;
        default: 
            return state
        
    }
}

export default commentsReducer