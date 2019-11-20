import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    // constructor (props) {
    //     super(props)
    //     this.state = {
    //         navToggle : ''
    //     }

    // }
    render () {
        return (
            <header>
                <nav className='main-nav'>
                    <Link to='/'>SIte Name</Link>
                    <ul className='sub-nav'>
                        <li><Link to='/register'>Register</Link></li>
                        <li><Link to='login'>Login</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
    
}

export default Navbar;