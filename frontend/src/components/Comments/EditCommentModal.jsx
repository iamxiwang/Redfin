import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from '../../context/Modal';
import { updateComment } from '../../store/comment';

const EditComment =({comment}) => {
    const dispatch= useDispatch()
    const [showModal, setShowModal] = useState(false);
    const [body, setBody] = useState(comment.body)



    const handleSubmit =(e) => {
        e.preventDefault();
        const data = {
            id: comment.id,
            listing_id:comment.listingId,
            author_id: comment.authorId,
            body: body
        }
        dispatch(updateComment(data))
        setShowModal(false)
        
    }



    return (
        <>
            <div onClick={() => setShowModal(true)} className='delete-edit-comment'>
            <i className="fa-solid fa-pen-to-square"></i></div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    
                    <form className='edit-comment-form' onSubmit={handleSubmit}>
                        <h2>Edit Your Comment</h2>
    
                        <label >
                            <input type="text" 
                            value={body}
                            onChange={(e) => setBody(e.target.value)}/>
                        </label>
                    
                    <button className='edit-btn'>Edit Comment</button>
                    
                    </form>
                </Modal>
            )}
        </>
        );
}

export default EditComment