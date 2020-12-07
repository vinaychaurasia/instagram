import React from 'react';
import logo from '../../static/public/images/logo.png';
import Button from './Button'

function Header() {
    return (
        <div className="App">
            <header className="header">
                <nav className="nav flex-row">
                    <div className="logo-container">
                        <img className="logoImg" src={logo} alt="logo" />
                    </div>
                    <div className="nav-links">
                        <ul className="nav-links-ul flex-row">
                            <li className="nav-link-li">Resume Template</li>
                            <li className="nav-link-li">About us</li>
                            <li className="nav-link-li"><Button text="Register"></Button></li>
                            <li className="nav-link-li">Sign in</li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;