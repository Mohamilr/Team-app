import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Input } from "../../shared/FormTags";
// api call
import Registration from "../../ApiCalls/Registration";
import "./Signin.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const handleFormSubmit = () => {
    Registration("POST", { email, password }, "signin");
  };

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
