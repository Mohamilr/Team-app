import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Usernav.css';

// class UserNav extends Component {
const UserNav = () => {   
    const [ isNavVisible, setIsNavVisible ] = useState(true);
    
    
    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    }
        return (
            <div>
                <header>
                <i className="fas fa-bars" onClick={toggleNav}></i>
                    {isNavVisible && (
                        <nav className='user-nav'>
                            <Link to='/feeds' className='app-name app'>Team App</Link>
                            <ul>
                                <li><NavLink activeClassName='active' to='/feeds'>Timeline</NavLink></li>
                                <li><NavLink activeClassName='active' to='/article'>Post Article</NavLink></li>
                                <li><NavLink activeClassName='active' to='/gif'>Post Gif</NavLink></li>
                                <li><NavLink activeClassName='active' to='/posts'>My Posts</NavLink></li>
                                <li onClick={() => { localStorage.removeItem('token'); localStorage.removeItem('id') }}><Link to='/'>Log Out</Link></li>
                            </ul>
                        </nav>
                    )}
                </header>
            </div>
        );
};

export default UserNav;