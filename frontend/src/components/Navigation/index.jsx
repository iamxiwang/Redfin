import React from 'react';

import { NavLink } from 'react-router-dom';
import { useSelector ,useDispatch} from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import * as sessionActions from "../../store/session";

import './Navigation.css';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();


 // login a prefix user
  const handleDemo =() => {
    dispatch(sessionActions.login({ credential:'Demo-lition', password:'password' }))
  }


  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
        <>
        <button id='demo'  onClick={handleDemo}>Demo User</button>
        <LoginFormModal />
        <SignupFormModal />
        </>
    );
  }

  return (
    <div className='home-hero-outer'>
    <header>
        <div className='header-left'>
            <NavLink id='logo' exact to="/">GREENFIN</NavLink>
        </div>
        {}
        <div className='header-right' >
            <h3>1-844-759-7732</h3>
            {/* <NavLink className='menue_item_clickable' exact to='/'>Buy</NavLink>
            <NavLink className='menue_item_clickable' exact to='/'>Rent</NavLink>
            <NavLink className='menue_item_clickable' exact to='/'>Sell</NavLink>
            <NavLink className='menue_item_clickable' exact to='/'>Morgage</NavLink> */}
           
            {sessionLinks}
        </div>
    </header>
    
    </div>
  );
}

export default Navigation;