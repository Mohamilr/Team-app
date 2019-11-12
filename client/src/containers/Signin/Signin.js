import React from './node_modules/react';
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
                <input type='email' placeholder='User@mail.com' /><br />
                <input type='password' placeholder='******' /><br />
                <button className='btn-reg'>Log in</button>
            </form>
            <p>You don't have an accout? please <a>Signup</a></p> 
         </div>
         <Footer />
        </div>
    );
};

export default Signin;