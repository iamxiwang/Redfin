import './Comments.css'
import { useSelector,useDispatch } from "react-redux"
import { useEffect, useState } from 'react'

import CommentList from './CommentList'
import { createComment, fetchComments, getComments  } from '../../store/comment'



const Comments = ({listingId}) =>{

    const user = useSelector( state => state.session.user)
    const comments = useSelector(getComments)
    const [commentValue, setCommentValue] = useState('')
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(fetchComments(listingId))
    }, [dispatch])

    const handleSubmit = (e) => {
        e.preventDefault();
        const newComment = {
            author_id: user.id,
            listing_id: listingId,
            body: commentValue
        }
        setCommentValue('')
        dispatch(createComment(newComment))
    }
    return (
        <div className="comment-container">
            <div className='header-line'>
                <h2>Your comments</h2>
                {/* <img src="	https://ssl.cdn-redfin.com/system_files/images/76/076/51600076_158_0.jpg" alt="" /> */}
                <i className="fa-solid fa-circle-user"></i>
            </div>

            {comments.map(
                (comment,i) => {
                    if(comment.authorId === user.id){
                            return <CommentList comment = {comment} key ={i} />
                    }})
            }
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                id='comment-value' 
                placeholder='Add a comment'
                value={commentValue}
                onChange={(e) => setCommentValue(e.target.value)}/>
                <button type='submit' id='red-save' >SAVE</button>
            </form>
            <p>Visible only to you</p>
        </div>
    )
    
}

export default Comments



