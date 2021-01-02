import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Input } from "../../shared/FormTags";
//
import { SignupAction } from "../../actions/RegisterAction";
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
  const redirect = useSelector((state => state.signup));
  //
  const dispatch = useDispatch();

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
    address,
  };

  const handleFormSubmit = () => {
    dispatch(SignupAction(bodyValue));
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
          onSubmit={(e) => {
            e.preventDefault();
            handleFormSubmit();
          }}
        >
          <div>
            <Input
              type="text"
              name="firstName"
              placeholder="First name"
              onChange={(e) => formInput(e, "firstname")}
            />
            <Input
              type="text"
              name="lastName"
              placeholder="Last name"
              onChange={(e) => formInput(e, "lastname")}
            />
          </div>
          <div>
            <Input
              type="email"
              name="email"
              placeholder="User@mail.com"
              onChange={(e) => formInput(e, "email")}
            />
            <Input
              type="password"
              name="password"
              placeholder="******"
              onChange={(e) => formInput(e, "password")}
            />
          </div>
          <Input
            type="text"
            name="gender"
            placeholder="Gender"
            className="info"
            onChange={(e) => formInput(e, "gender")}
          />
          <br />
          <Input
            type="text"
            name="jobRole"
            placeholder="Jobrole"
            className="info"
            onChange={(e) => formInput(e, "jobrole")}
          />
          <br />
          <Input
            type="text"
            name="department"
            placeholder="Department"
            className="info"
            onChange={(e) => formInput(e, "department")}
          />
          <br />
          <Input
            type="text"
            name="address"
            placeholder="Address"
            className="info"
            onChange={(e) => formInput(e, "address")}
          />
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
