import React, { useState } from 'react';
import Arrow from "./Arrow";
import {useSelector, useDispatch} from "react-redux";
import {getUserData} from "../store/selectors";
import {logout} from "../store/actions";
import tokenStorage from "../utils/token";

const emojis = '🥕🥦🥬🍽🍴🥄🥢🍰🧁🍥🥘🍲🍜🍙🍱🍗🍖🥩🍕🍔🍟🌭🥓🧇🥞🧀🥗🥠'
  .split(/([\uD800-\uDBFF][\uDC00-\uDFFF])/).filter(Boolean);

const Header = () => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const [emojiIndex] = useState(() => Math.floor(Math.random() * emojis.length));
  const onClick = () => setDropdownActive(active => !active);
  const user = useSelector(getUserData);
  const dispatch = useDispatch();

  const onLogout = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      tokenStorage.clearToken();
      dispatch(logout());
    });
  };

  return (
    <div className="Header">
      <div className="Header-Logo">{emojis[emojiIndex]} FoodLog</div>
      {user && (
        <div className="Header-Profile">
          <div className="Header-ProfileCard" onClick={onClick}>
            <img className="Header-ProfileImage" src={user.picture} alt=""/>
            <Arrow className="Header-ProfileArrow" />
          </div>
          {dropdownActive && (
            <div className="Header-ProfileDropdown">
              <div className="Header-ProfileInfo">
                <p className="Header-ProfileName">{user.name}</p>
                <p className="Header-ProfileEmail">{user.email}</p>
              </div>
              <ul className="Header-ProfileMenu">
                <li><button onClick={onLogout} className="Header-ProfileLink">Выйти</button></li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
