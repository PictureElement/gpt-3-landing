import React, { useState } from 'react';
import './Header.scss';
import logo from '../assets/logo.svg';
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

function Header() {
  const [isDropdownMenuVisible, SetIsDropdownMenuVisible] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <div className="header__left">
            <a className="header__brand" href=".">
              <img src={logo} alt="logo" />
            </a>
            <div className="header__inline-menu">
              <ul>
                <li><a href=".">Home</a></li>
                <li><a href=".">About</a></li>
                <li><a href=".">OpenAI</a></li>
                <li><a href=".">Case studies</a></li>
                <li><a href=".">Library</a></li>
              </ul>
            </div>
          </div>
          <div className="header__right">
              <button type="button" className="header__signin">Sign in</button>
              <button type="button" className="header__signup">Sign up</button>
              <div className="header__toggler-wrapper">
                {isDropdownMenuVisible
                  ? <button onClick={() => SetIsDropdownMenuVisible(false)} className="header__toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation"><RiCloseLine /></button>
                  : <button onClick={() => SetIsDropdownMenuVisible(true)} className="header__toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><RiMenu3Line /></button>
                }
              </div>
              {isDropdownMenuVisible &&
                <div className="header__dropdown-menu scale-up-center" id="navbarSupportedContent">
                  <ul>
                    <li><a href=".">Home</a></li>
                    <li><a href=".">About</a></li>
                    <li><a href=".">OpenAI</a></li>
                    <li><a href=".">Case studies</a></li>
                    <li><a href=".">Library</a></li>
                    <li><button type="button" className="header__signin header__signin_dropdown">Sign in</button></li>
                    <li><button type="button" className="header__signup header__signup_dropdown">Sign up</button></li>
                  </ul>
                </div>
              }
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;
