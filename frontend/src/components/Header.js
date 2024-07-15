import React from 'react';
import '../App.css';

const Header = () => {
    return (
            <div id="tm-sidebar" className="tm-sidebar"> 
                <nav className="tm-nav">
                    <button className="navbar-toggler" type="button" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div>
                        <div className="tm-brand-box">
                            <h1 className="tm-brand">ShuttleSky</h1>
                        </div>                
                        <ul id="tm-main-nav">
                            <li className="nav-item">                                
                                <a href="#home" className="nav-link current">
                                    <div className="triangle-right"></div>
                                    <i className="fas fa-home nav-icon"></i>
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#gallery" className="nav-link">
                                    <div className="triangle-right"></div>
                                    <i className="fas fa-images nav-icon"></i>
                                    Gallery
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#about" className="nav-link">
                                    <div className="triangle-right"></div>
                                    <i className="fas fa-user-friends nav-icon"></i>
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#services" className="nav-link">
                                    <div className="triangle-right"></div>
                                    <i className="fas fa-user-friends nav-icon"></i>
                                    Services
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className="nav-link">
                                    <div className="triangle-right"></div>
                                    <i className="fas fa-envelope nav-icon"></i>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
    );
}

export default Header;
