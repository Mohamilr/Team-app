import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Signin.css';

const Signin = () => {
    return (
        <div>
         <Navbar />
         <div className='form-container'>
         <h2>Welcome back</h2>
            <form>
                <input type='email' placeholder='User@mail.com' className='details' /><br />
                <input type='password' placeholder='******' className='details' /><br />
                <button className='btn-reg'>Log in</button>
            </form>
            <p>You don't have an accout? please <Link to='/register'>Signup</Link></p> 
         </div>
         <Footer />
        </div>
    );
};

export default Signin;