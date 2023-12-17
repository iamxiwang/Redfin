import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

function LoginFormModal({textColor}) {
  const [showModal, setShowModal] = useState(false);
  const style = {
    color: textColor,
  }
  return (
    <>
      <button style = {style} id='sign_log'  onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
