import React from 'react';
import SearchBar from '../Search/SearchBar';
import { NavLink } from 'react-router-dom';
import { useSelector ,useDispatch,useParams } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import * as sessionActions from "../../store/session";

import './Navigation.css';

function Navigation({textColor, backgroundColor}) {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const style = {
    color: textColor,
    backgroundColor: backgroundColor,
  };



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
        <LoginFormModal textColor='green'/>
        <SignupFormModal textColor= 'green'/>
        </>
    );
  }

  return (
    <div  style={{ backgroundColor: backgroundColor }}className='home-hero-outer-2'>
    
        <div className='header-left-2'>
            <NavLink style = {style} id='logo-2' exact to="/">GREENFIN</NavLink>
            <div className="search-container-2">
              <SearchBar />
            </div>
        </div>       
        <div className='header-right-2' >
            {/* <h3>1-415-231-8101</h3> */}
            {/* <NavLink className='menue_item_clickable-2' exact to='/'>Buy</NavLink>
            <NavLink className='menue_item_clickable-2' exact to='/'>Rent</NavLink>
            <NavLink className='menue_item_clickable-2' exact to='/'>Sell</NavLink>
            <NavLink className='menue_item_clickable-2' exact to='/'>Morgage</NavLink>
            */}
            {sessionLinks}
        </div>
 
    </div>
  );
}

export default Navigation;