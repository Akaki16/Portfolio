import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/NavBar.styles.css';

const NavBar = ({ linksRef, onNavbarToggle }) => {
    return (
        <nav className="navbar">
            <div className="brand-title">
                <a href="/" style={{
                    textDecoration: 'none',
                    color: '#fff'
                }}>Portfolio</a>
            </div>
            <a onClick={onNavbarToggle} href="#" className='toggle-button'>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </a>
            <div ref={linksRef} className="navbar-links">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

NavBar.propTypes = {
    linksRef: PropTypes.object,
    onNavbarToggle: PropTypes.func.isRequired
};

export default NavBar;