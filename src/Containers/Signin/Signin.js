import React from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { loginSchema } from '../../Utils/validationSchema';
// action
import { LoginAction } from "../../actions/RegisterAction";
import "./Signin.css";

const Signin = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema)
  });

  const redirect = useSelector(state => state.login);
  //
  const dispatch = useDispatch();

  const formSubmit = (body) => {
    dispatch(LoginAction(body));
  };

  if (redirect) {
    return <Redirect to="/feeds" />;
  }

  return (
    <div>
      <Navbar />
      <div className="signin-form-container">
        <h2 className="reg">Welcome back</h2>
        <form
          onSubmit={handleSubmit(formSubmit)}
        >
          <input type="email"     type="email"
            placeholder="User@mail.com"
            name="email"
            className="details"
            ref={register} />
            <p>{errors.email?.message}</p>
          <input type="password"
            placeholder="******"
            name="password"
            className="details"
            ref={register} />
             <p>{errors.password?.message}</p>
          <input type='submit' className="btn-reg" />
        </form>
        <p>
          You don't have an accout? please <Link to="/register">Signup</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Signin;
