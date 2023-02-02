import React, { useState } from "react";
import * as sessionActions from '../../store/session'
import { useDispatch } from "react-redux";
import SignupFormModal from "../SignupFormModal";
// import { Redirect } from 'react-router-dom';// Added for modal

function RequestForm( {setShowModal, onClose }) {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const [condition, setCondition] = useState(true)
  // console.log(setShowModal)
//   const sessionUser = useSelector(state => state.session.user); // Added for modal

//   if (sessionUser) return <Redirect to="/" />;// Added for modal

  const handleDemoSubmit = (e) =>{
    e.preventDefault();
    dispatch(sessionActions.login({ credential:'Demo-lition', password:'password' }))
    .then(()=>setShowModal(false))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .then(()=>setShowModal(false))
      .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) {
          setErrors(data.errors)

        }
        else if (data) {
          setErrors([data])

        }
        else {
          setErrors([res.statusText])
        }
      });
  };

  return (

    <div className='login'>
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map(error => <li key={error}>{error}</li>)}
      </ul>
      <h1>Hi, Welcome Back!</h1>
      <br />
      <br />
      <label>
        Username or Email
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button className='form_button' type="submit">Log In</button>
    </form>
      <h3 id='or'>OR</h3>
      <button id='red-demo'  onClick={handleDemoSubmit}>Use Demo log in</button>
    </div>
  );
}

export default RequestForm;