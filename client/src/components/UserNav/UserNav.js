import React from 'react';
import './Usernav.css';

const UserNav = () => {
    return (
        <nav>
            <a href='#' className='app-name'>Site name</a>
            <ul>
                <li>Timeline</li>
                <li>Post Article</li>
                <li>Post Gif</li>
                <li>My Articles</li>
                <li>My Gifs</li>
                <li>Profile</li>
            </ul>
        </nav>
    );
};

export default UserNav;