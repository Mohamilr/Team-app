import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Signup.css';

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            bodyValue: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                gender: '',
                jobRole: '',
                department: '',
                address: ''
            }
        }
    }


    formInput = (e) => {
        let bodyValue = {...this.state.bodyValue};
        bodyValue[e.target.name] = e.target.value;
       

     this.setState({
        bodyValue: bodyValue
     })
    }

     handleFormSubmit = async () => {
        const response = await fetch('https://team-work-api.herokuapp.com/api/v1/auth/create-user', {
            method: 'POST',
            body: JSON.stringify({...this.state.bodyValue}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .catch(e => {
            console.log(e)
        })

        console.log(response)
        if(response.status === 'error') {
            window.location = 'http://localhost:3000/register';
        }

        if(response.status === 'success') {
            window.location = 'http://localhost:3000/feeds';
        }
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('id', response.data.authorId);

       
        
    }

    
    
    render() {
        return (
            <div>
                <Navbar />
                <div className='form-container'>
                    <h2>Register for free</h2>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        this.handleFormSubmit();
                        console.log(this.state.bodyValue)
                    }}>
                        <div>
                            <input type='text' name='firstName' placeholder='Firstname' onChange={this.formInput} />
                            <input type='text' name='lastName' placeholder='Lastname' onChange={this.formInput} />
                        </div>
                        <div>
                            <input type='email' name='email' placeholder='User@mail.com' onChange={this.formInput} />
                            <input type='password' name='password' placeholder='******' onChange={this.formInput} />
                        </div>
                        <input type='text' name='gender' placeholder='Gender' className='info' onChange={this.formInput} /><br />
                        <input type='text' name='jobRole' placeholder='Jobrole' className='info' onChange={this.formInput} /><br />
                        <input type='text' name='department' placeholder='Department' className='info' onChange={this.formInput} /><br />
                        <input type='text' name='address' placeholder='Address' className='info' onChange={this.formInput} /><br />
                        <button className='btn-reg'>Register</button>
                    </form>
                    <p>Already have an accout? please <Link to='/login'>login</Link></p>
                </div>
                <Footer />
            </div>
        );
    }
};

export default Signup;
