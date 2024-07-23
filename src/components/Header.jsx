import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import image1 from "../cab_images/logo.png";
import "../CssStyle/Headers.css";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const token = localStorage.getItem("userToken");
  const [isActive, setIsActive] = useState("home");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Running useEffect");
    console.log("token before condition:", token);
    if (token) {
      setIsLogin(true);
      console.log("Setting isLogin to true");
    } else {
      setIsLogin(false);
      console.log("islogin", isLogin);
    }
    console.log("token after condition:", token);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (isLogin) {
      localStorage.removeItem("userToken"); // Make sure this matches the key used in getItem
      setIsLogin(false);
      toast.success("Logout successful!");
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container customheader">
        <Link className="navbar-brand" to="/home"  onClick={() => {
                  setIsActive("home");
                  if (window.innerWidth < 992) {
                    document.querySelector(".navbar-toggler").click();
                  }
                }}>
          <img src={image1} alt="not found" className="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-4 mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive === "home" ? "active" : ""}`}
                to="/home"
                onClick={() => {
                  setIsActive("home");
                  if (window.innerWidth < 992) {
                    document.querySelector(".navbar-toggler").click();
                  }
                }}
              >
                Home
              </Link>
            </li>
            {isLogin && (
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    isActive === "history" ? "active" : ""
                  }`}
                  to="/history"
                  onClick={() => {
                    setIsActive("history");
                    if (window.innerWidth < 992) {
                      document.querySelector(".navbar-toggler").click();
                    }
                  }}
                >
                  History
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive === "about" ? "active" : ""}`}
                to="/about"
                onClick={() => {
                  setIsActive("about");
                  if (window.innerWidth < 992) {
                    document.querySelector(".navbar-toggler").click();
                  }
                }}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive === "help" ? "active" : ""}`}
                to="/help"
                onClick={() => {
                  setIsActive("help");
                  if (window.innerWidth < 992) {
                    document.querySelector(".navbar-toggler").click();
                  }
                }}
              >
                Help us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  isActive === "services" ? "active" : ""
                }`}
                to="/services"
                onClick={() => {
                  setIsActive("services");
                  if (window.innerWidth < 992) {
                    document.querySelector(".navbar-toggler").click();
                  }
                }}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive === "cities" ? "active" : ""}`}
                to="/cities"
                onClick={() => {
                  setIsActive("cities");
                  if (window.innerWidth < 992) {
                    document.querySelector(".navbar-toggler").click();
                  }
                }}
              >
                Cities
              </Link>
            </li>
          </ul>
          <form className="d-flex sign-form">
            <button className="sign-in-btn" onClick={handleLogin}>
              {isLogin ? "Logout" : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
