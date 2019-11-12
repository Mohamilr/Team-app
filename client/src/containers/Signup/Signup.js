import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Signup.css';

const Signup = () => {
    return (
        <div>
        <Navbar />
        <div className='form-container'>
            <h2>Register for free</h2>
            <form>
                <div>
                <input type='text' placeholder='Firstname' />
                <input type='text' placeholder='Lastname' />
                </div>
                <div>
                <input type='email' placeholder='User@mail.com' />
                <input type='password' placeholder='******' />
                </div>
                <input type='text' placeholder='Gender' className='info' /><br />
                <input type='text' placeholder='Jobrole' className='info' /><br />
                <input type='text' placeholder='Department' className='info' /><br />
                <input type='text' placeholder='Address' className='info' /><br />
                <button className='btn-reg'>Register</button>
            </form>
            <p>Already have an accout? please <a>login</a></p> 
        </div>
        <Footer />
        </div>
    );
};

export default Signup;
