import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';


function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
    <div className='profile'>
        <button onMouseEnter={openMenu} id='img-btn'>
        {
          user.imgUrl?
          <img src={user.imgUrl} alt="" /> :
          <i className="fa-solid fa-user"></i>
        }
          </button>
        {showMenu && (
            <ul className="profile-dropdown">
            <div id='my-greenfin'>
              <li id='greenfin-v1'>My Greenfin</li>
              <li>Favorites</li>
              <li>Saved Searches</li>
              <li>Open houses schedule</li>
              <li>Home tours</li>
              <li>Owner Dashboard</li>
              <li onClick={history.push('/listings/new')}>Agent</li>
              <li>Offers</li>
              <li>Reviews</li>
            </div>
            <div id='my-setting'>
              <li id='setting-v1'>Setting</li>
              <li>{user.username}</li>
              <li>Email settings</li>
              <li>Accounting settings</li>
              <li id='profile-dropdown-button'>
                <button onClick={logout}>Log Out</button></li>
            </div>
          </ul>
        )}
      </div>
    </>
  );
}

export default ProfileButton;