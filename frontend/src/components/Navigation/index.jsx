import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
        <>
        <LoginFormModal />
        <SignupFormModal />
        </>
    );
  }

  return (
    <div class='home-hero-outer'>
    <header>
        <div class='header-left'>
            <NavLink id='logo' exact to="/">GREENFIN</NavLink>
        </div>
        <div class='header-right' >
            <h3>1-844-759-7732</h3>
            <NavLink class='menue_item_clickable' exact to='/'>Buy</NavLink>
            <NavLink class='menue_item_clickable' exact to='/'>Rent</NavLink>
            <NavLink class='menue_item_clickable' exact to='/'>Sell</NavLink>
            <NavLink class='menue_item_clickable' exact to='/'>Morgage</NavLink>
            {sessionLinks}
        </div>
    </header>
    
    </div>
  );
}

export default Navigation;