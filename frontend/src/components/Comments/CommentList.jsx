import { useSelector,useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import {createComment, updateComment, deleteComment} from '../../store/comment'

const CommentList = ({comment}) => {
    const dispatch = useDispatch();
    const[showDelete, setShowDelete] = useState(false)


    const handleClick =() => {
        dispatch( deleteComment(comment.id))
        setShowDelete(false)
    }
    const user = useSelector( state => state.session.user)


    return (
        <div className="comment-list">
            <div className="comment-npm">
                <div className="commenter-info">
                    {/* <img src="	https://ssl.cdn-redfin.com/system_files/images/76/076/51600076_158_0.jpg" alt="" /> */}
                    <i className="fa-solid fa-circle-user"></i>
                    <p>{user.username}</p>
                    <p>{comment.createdAt}</p>
                </div>

                <div
                onClick={() => setShowDelete(true)} 
                className="three-dot">
                <i className="fa-solid fa-ellipsis"></i>
                </div>
                {showDelete && 
                    <div 
                        className="flyout"
                        onClick={handleClick}
                    >Delete Comments</div>}
            </div>
        
            <div className="gray-container">
                <div id='commentText'>{comment.body}</div>
            </div>
        </div>

    )
    
}
export default CommentList