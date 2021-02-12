import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { signupSchema } from "../../Utils/validationSchema";
//
import { SignupAction } from "../../actions/RegisterAction";
import "./Signup.css";

const Signup = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(signupSchema)
  })
  const redirect = useSelector((state => state.signup));
  //
  const dispatch = useDispatch();

  const formSubmit = (body) => {
    dispatch(SignupAction(body));
  };

  if (redirect) {
    return <Redirect to='/feeds'/>
  }
  return (
    <div>
      <Navbar />
      <div className="form-container">
        <h2 className="reg">Register for free</h2>
        <form
          onSubmit={handleSubmit(formSubmit)}
        >
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
             ref={register}
            />
             <p>{errors.firstName?.message}</p>
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              ref={register}
            />
             <p>{errors.lastName?.message}</p>
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="User@mail.com"
              ref={register}
            />
             <p>{errors.email?.message}</p>
            <input
              type="password"
              name="password"
              placeholder="******"
              ref={register}
            />
             <p>{errors.password?.message}</p>
          </div>
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            className="info"
            ref={register}
          />
           <p>{errors.gender?.message}</p>
          <br />
          <input
            type="text"
            name="jobRole"
            placeholder="Jobrole"
            className="info"
            ref={register}
          />
           <p>{errors.jobRole?.message}</p>
          <br />
          <input
            type="text"
            name="department"
            placeholder="Department"
            className="info"
            ref={register}
          />
           <p>{errors.department?.message}</p>
          <br />
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="info"
            ref={register}
          />
           <p>{errors.address?.message}</p>
          <br />
          {/* {loading ? (
            <button className="btn-reg">loading ...</button>
          ) : ( */}
            <button className="btn-reg">Register</button>
          {/* )} */}
        </form>
        <p>
          Already have an accout? please <Link to="/login">login</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
