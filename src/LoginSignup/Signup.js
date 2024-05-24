import React, { useState } from "react";
import logo from "../cab_images/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CssStyle/Signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const URL =
    "https://chauffer-staging-tse4a.ondigitalocean.app/v1/authRouter/signUp";
  const navigate = useNavigate();
  const [signupInfo, setSignupInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    setSignupInfo({ ...signupInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(URL, signupInfo);
      console.log(response.data);
      if (response.data.status == true) {
        console.log(
          response.data.subCode,
          response.data.message,
          response.data
        );
        toast.success(response.data.message);
        navigate("/login");
      } else {
        console.error(
          response.data.subCode,
          response.data.message,
          response.data
        );
        toast.error(response.data.message);
      }
      // Clear the form fields after submission
      setSignupInfo({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        password: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="signup-container">
      <section className="container">
        <div className="row">
          <div className="col-md-4 ms-3">
            <div className="signup-logo-container">
              <img src={logo} alt="not-found" onClick={() => navigate("/")} />
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-9 m-auto ">
            <form className="signup-form  " onSubmit={handleSubmit}>
              <p className="formtitle">
                <i className="fa-solid fa-arrow-left"></i> <span>Create your account</span>
              </p>


              {/* mt-4 acc to figma but mt-2 looking good so replaced  it */}
              <div className="container margin-field-container">
                <div className="row">
                  <div className="col-md-6 ">
                    <label htmlFor="firstname" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control "
                      id="firstname"
                      placeholder=""
                      name="firstName"
                      value={signupInfo.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 ">
                    <label htmlFor="lastname" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastname"
                      placeholder=""
                      name="lastName"
                      value={signupInfo.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="container margin-field-container-2">
                <div className="row">
                  <div className="col-md-6 ">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder=""
                      name="email"
                      value={signupInfo.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 ">
                    <label htmlFor="number" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="number"
                      placeholder=""
                      name="mobileNumber"
                      value={signupInfo.mobileNumber}
                      onChange={handleChange}
                      required
                      maxLength="10"
                      minLength="10"
                    />
                  </div>
                </div>
              </div>
              <div className="container margin-field-container-3">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder=""
                        name="password"
                        value={signupInfo.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="container margin-field-container-4">
                <div className="row">
                  <div className="col-md-12">
                    <p className="termandcondition ">
                      By selecting Create account, you agree with Blacklane's 
                      <span>Terms & Conditions </span>and<span> policies</span>.
                    </p>

                    <button
                      type="submit"
                      className="mb-3 btn btn-dark btn-create-acc"
                    >
                      Create account
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
