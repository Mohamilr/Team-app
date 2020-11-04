import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Input } from '../../shared/FormTags';
import "./Signin.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = async () => {
      try {
        const response = await fetch(
            "https://team-work-api.herokuapp.com/api/v1/auth/signin",
            {
              method: "POST",
              body: JSON.stringify({
                email,
                password,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
            const res = await response.json();
          console.log(res)

      }
      catch (e) {
          console.error(e)
      }
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
            onChange={(e) => handleEmail(e)}
          />
          <br />
          <Input
            type="password"
            placeholder="******"
            name="password"
            className="details"
            onChange={(e) => handlePassword(e)}
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
