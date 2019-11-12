import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    constructor (props) {
        super(props)
        this.state = {
            navToggle : ''
        }

    }
    render () {
        return (
            <header>
                <nav className='main-nav'>
                    <a href='#'>SIte Name</a>
                    <ul className='sub-nav'>
                        <li>Register</li>
                        <li>Login</li>
                    </ul>
                </nav>
            </header>
        );
    }
    
}

export default Navbar;