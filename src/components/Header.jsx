import React from "react";
import image1 from "../cab_images/logo.png";
import { useState, useEffect } from "react";
import { useNavigate ,Link } from "react-router-dom";
import "../CssStyle/Headers.css";
import { toast } from 'react-toastify';

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const token = localStorage.getItem("token");
  const [isActive, setIsActive] = useState(null);

  const handleClick = (index) => {
    setIsActive(index); 
   };
   
   useEffect(() => {
    console.log("isActive:", isActive);
  }, [isActive]);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      setIsLogin(true);
      console.log("islogin", isLogin);
    } else {
      setIsLogin(false);
      console.log("islogin", isLogin);
      toast.success('Logout successful!');
    }
  }, []);

  const handleLogin = () => {
    if (isLogin) {
      localStorage.removeItem("token");
      setIsLogin(false);
    } else {
      navigate("./login");
    }
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container customheader">
          <Link class="navbar-brand" to="/">
            <img src={image1} alt="not found" className="logo" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-4 mb-2 mb-lg-0">
              <li className="nav-item" onClick={() => handleClick("home")} >
                <Link className="nav-link"  to="/" id= {isActive === "home" ? "home" : "nav-link"}>
                  Home
                </Link>
              </li>
              
              <li className="nav-item" onClick={() => handleClick("history")}>
                <Link className="nav-link"  to="/history" id= {isActive === "history" ? "history" : ""}>
                  History
                </Link>
              </li>

              <li class="nav-item" onClick={() => handleClick("about")}>
                <Link
                  className="nav-link" 
                  to="/about"
                  id= {isActive === "about" ? "about" : ""}
                >
                  {" "}
                  About Us
                </Link>
              </li>
              <li class="nav-item" onClick={() => handleClick("help")}>
                <Link
                  className="nav-link" 
                  to="/help"
                  id= {isActive === "help" ? "help" : ""}
                >
                  {" "}
                  Help us
                </Link>
              </li>
              <li class="nav-item" onClick={() => handleClick("services")}>
                <Link
                  className="nav-link " 
                  to="/services"
                  id= {isActive === "services" ? "services" : ""}
                >
                  Services
                </Link>
              </li>
              <li class="nav-item" onClick={() => handleClick("cities")}>
              <Link
                  className="nav-link "
                  to="/cities"
                  id= {isActive === "cities" ? "cities" : ""}
                >
                  Cities
                </Link>
              </li>
            </ul>
            <form class="d-flex sign-form">
              
            <button className="sign-in-btn" onClick={handleLogin}>
                {isLogin ? "Logout" : "Sign In"}
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
