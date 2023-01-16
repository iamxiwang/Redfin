import { useSelector,useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import {createComment, updateComment, deleteComment} from '../../store/comment'
import EditComment from "./EditCommentModal";

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
                    <img src={comment.profileImgUrl} alt="" />
                    <p id='username-black'>{user.username}</p>
                    <p>{comment.createDate}</p>
                </div>
                <div className="comment-edit-container">
                <div className="delete-edit-comment"
                        onClick={handleClick}
                    > <i className="fa-solid fa-trash-can"></i></div>

                <EditComment comment={comment}  />
                </div>

                {/* <div
                onClick={() => 
                    {showDelete ? setShowDelete(false) : setShowDelete(true)}} 
                className="three-dot">
                <i className="fa-solid fa-ellipsis"></i>
                </div>
                {showDelete && 
                <div  className="flyout" >
                    <button className="delete-edit-comment"
                        onClick={handleClick}
                    >Delete Comments</button>

                    <EditComment comment={comment}  />
                </div>
                } */}
            </div>
        
            <div className="gray-container">
                <div id='commentText'>{comment.body}</div>
            </div>
        </div>

    )
    
}
export default CommentList