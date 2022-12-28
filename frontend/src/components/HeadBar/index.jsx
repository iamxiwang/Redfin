import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useSelector ,useDispatch,useParams } from 'react-redux';
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
    <div class='home-hero-outer-2'>
    
        <div class='header-left-2'>
            <NavLink id='logo-2' exact to="/">GREENFIN</NavLink>
        </div>
        
        <form className="search-container-2">
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit"><i class="fa fa-search"></i></button>
        </form>
                
        <div class='header-right-2' >
            <h3>1-844-759-7732</h3>
            <NavLink class='menue_item_clickable-2' exact to='/'>Buy</NavLink>
            <NavLink class='menue_item_clickable-2' exact to='/'>Rent</NavLink>
            <NavLink class='menue_item_clickable-2' exact to='/'>Sell</NavLink>
            <NavLink class='menue_item_clickable-2' exact to='/'>Morgage</NavLink>
           
            {sessionLinks}
        </div>
 
    </div>
  );
}

export default Navigation;