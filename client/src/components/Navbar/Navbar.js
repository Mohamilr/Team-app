import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [ isNavVisible, setIsNavVisible ] = useState(true);
    
    
    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    }
        return (
            <header>
                <nav className='main-nav'>
                    <Link to='/' className='app-name'>Team App</Link>
                    <i className="fas fa-bars" onClick={toggleNav}></i>
                    {isNavVisible && (
                    <ul className='sub-nav'>
                        <li><NavLink activeClassName='active' to='/register'>Register</NavLink></li>
                        <li><NavLink activeClassName='active' to='login'>Login</NavLink></li>
                    </ul>
                    )}
                </nav>
            </header>
        );    
}

export default Navbar;