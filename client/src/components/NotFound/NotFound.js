import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return(
        <main className='error-page'>
            <h1>404</h1>
            <Link to='/' >Go back to home page</Link>
        </main>
    );
};

export default NotFound;