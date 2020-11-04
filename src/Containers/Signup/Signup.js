import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "./Signup.css";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [department, setDepartment] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const formInput = (e, type) => {
    switch (type) {
      case "firstname":
        setFirstName(e.target.value);
        break;
      case "lastname":
        setLastName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "gender":
        setGender(e.target.value);
        break;
      case "jobrole":
        setJobRole(e.target.value);
        break;
      case "department":
        setDepartment(e.target.value);
        break;
      case "address":
        setAddress(e.target.value);
        break;
      default:
        return type;
    }

  };

  const bodyValue = {
      firstName,
      lastName,
      email,
      password,
      gender,
      jobRole,
      department,
      address
  }

  const handleFormSubmit = async () => {
    try {
      const response = await fetch(
        "https://team-work-api.herokuapp.com/api/v1/auth/create-user",
        {
          method: "POST",
            body: JSON.stringify({ ...bodyValue }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const res = await response.json()

      console.log(res)
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="form-container">
        <h2 className="reg">Register for free</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleFormSubmit();
          }}
        >
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              onChange={(e) => formInput(e, 'firstname')}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              onChange={(e) => formInput(e, 'lastname')}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="User@mail.com"
              onChange={(e) => formInput(e, 'email')}
            />
            <input
              type="password"
              name="password"
              placeholder="******"
              onChange={(e) => formInput(e, 'password')}
            />
          </div>
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            className="info"
            onChange={(e) => formInput(e, 'gender')}
          />
          <br />
          <input
            type="text"
            name="jobRole"
            placeholder="Jobrole"
            className="info"
            onChange={(e) => formInput(e, 'jobrole')}
          />
          <br />
          <input
            type="text"
            name="department"
            placeholder="Department"
            className="info"
            onChange={(e) => formInput(e, 'department')}
          />
          <br />
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="info"
            onChange={(e) => formInput(e, 'address')}
          />
          <br />
          {loading ? (
            <button className="btn-reg">loading ...</button>
          ) : (
            <button className="btn-reg">Register</button>
          )}
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
