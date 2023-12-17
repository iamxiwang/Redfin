import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';

function SignupFormModal({textColor}) {
  const [showModal, setShowModal] = useState(false);
  const style = {
    color: textColor,
  }
  return (
    <>
      <button style = {style} id='sign_log' onClick={() => setShowModal(true)}>Sign Up</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupForm />
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;