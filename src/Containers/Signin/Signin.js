import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Input } from "../../shared/FormTags";
// action
import { LoginAction } from "../../actions/RegisterAction";
import "./Signin.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const redirect = useSelector(state => state.login);
  //
  const dispatch = useDispatch();

  const formInput = (e, type) => {
    switch (type) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        return type;
    }
  };

  // form data
  const body = {
    email,
    password,
  };

  const handleFormSubmit = () => {
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
          onSubmit={(e) => {
            e.preventDefault();
            handleFormSubmit();
          }}
        >
          <Input
            type="email"
            placeholder="User@mail.com"
            name="email"
            className="details"
            onChange={(e) => formInput(e, "email")}
          />
          <br />
          <Input
            type="password"
            placeholder="******"
            name="password"
            className="details"
            onChange={(e) => formInput(e, "password")}
          />
          <br />
          <button className="btn-reg">Log in</button>
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
