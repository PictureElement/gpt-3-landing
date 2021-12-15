import React, { useState } from 'react';
import './Header.scss';
import logo from '../assets/logo.svg';
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";


function Menu() {
  return (
    <>
      <ul>
        <li><a href=".">Home</a></li>
        <li><a href=".">About</a></li>
        <li><a href=".">OpenAI</a></li>
        <li><a href=".">Case studies</a></li>
        <li><a href=".">Library</a></li>
      </ul>
    </>
  )
}

function Header() {
  const [isMobileMenuVisible, SetIsMobileMenuVisible] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">


          <div className="header__desktop-left">
            <a className="header__desktop-brand" href=".">
              <img src={logo} alt="logo" />
            </a>
            <div className="header__desktop-menu">
              <Menu />
            </div>
          </div>
          <div className="header__desktop-right">
            <button type="button" className="header__desktop-signin">Sign in</button>
            <button type="button" className="header__desktop-signup">Sign up</button>
          </div>


          <div className="header__mobile-left">
            <a className="header__mobile-brand" href=".">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="header__mobile-right">
            {isMobileMenuVisible
              ? <button onClick={() => SetIsMobileMenuVisible(false)} className="header__toggler" type="button" aria-controls="navbarSupportedContent" aria-label="Toggle navigation"><RiCloseLine /></button>
              : <button onClick={() => SetIsMobileMenuVisible(true)} className="header__toggler" type="button" aria-controls="navbarSupportedContent" aria-label="Toggle navigation"><RiMenu3Line /></button>
            }
            {isMobileMenuVisible &&
              <div className="header__mobile-menu scale-up-center" id="navbarSupportedContent">
                <Menu />
              </div>
            }
          </div>




        </nav>
      </div>
    </header>
  )
}

export default Header;
