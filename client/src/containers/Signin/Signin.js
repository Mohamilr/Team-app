import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Signin.css';

class Signin extends Component {
    constructor () {
        super();
    this.state = {
        bodyValue: {
           email: '',
           password: ''
        }
    }
   }


   formInput = (e) => {
       let fieldData = {...this.state.bodyValue};
       fieldData[e.target.name] = e.target.value;

       this.setState({
          bodyValue: fieldData
       })
   }

   handleFormSubmit = async () => {
       const response = await fetch('https://team-work-api.herokuapp.com/api/v1/auth/signin', {
           method: 'POST',
           body: JSON.stringify({...this.state.bodyValue}),
           headers: {
               'Content-Type': 'application/json'
           }
       })
       .then(res => res.json())
       .catch(e => console.log(e));

       console.log(response);

       if(response.status === 'error'){
           window.location = 'http://localhost:3000/login';
       }
       else{
        window.location = 'http://localhost:3000/feeds';
       }

       localStorage.setItem('token', response.data.token);
       localStorage.setItem('id', response.data.authorId);
   }

   render () {
    return (
        <div>
         <Navbar />
         <div className='form-container'>
         <h2>Welcome back</h2>
            <form onSubmit={(e)=> {
                e.preventDefault();
                this.handleFormSubmit();
            }}>
                <input type='email' placeholder='User@mail.com' name='email' className='details' onChange={this.formInput} /><br />
                <input type='password' placeholder='******' name='password' className='details' onChange={this.formInput} /><br />
                <button className='btn-reg'>Log in</button>
            </form>
            <p>You don't have an accout? please <Link to='/register'>Signup</Link></p> 
         </div>
         <Footer />
        </div>
    );
   }
};

export default Signin;