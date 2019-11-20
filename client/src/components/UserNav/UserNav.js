import React from 'react';
import { Link } from 'react-router-dom';
import './UserNav.css';

const UserNav = () => {
    return (
        <div>
            <header>
        <nav className='user-nav'>
            <Link to='/feeds' className='app-name'>Site name</Link>
            <ul>
                <li><Link to='/feeds'>Timeline</Link></li>
                <li><Link to='/article'>Post Article</Link></li>
                <li><Link to='/gif'>Post Gif</Link></li>
                <li><Link to='/posts'>My Posts</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
            </ul>
        </nav>
        </header>
        </div>
    );
};

export default UserNav;