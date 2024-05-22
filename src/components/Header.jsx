import React from "react";
import image1 from "../cab_images/logo.png";
import { useState, useEffect } from "react";
import { useNavigate ,Link } from "react-router-dom";
import "../CssStyle/Headers.css";
import { toast } from 'react-toastify';

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const token = localStorage.getItem("token");
  const [isActive, setIsActive] = useState("home");

  const handleClick = (e,index) => {
    setIsActive(index); 
   };
   
   useEffect(() => {
    console.log("isActive:", isActive);
  }, [isActive]);
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
      localStorage.removeItem("token");
      setIsLogin(false);
      toast.success('Logout successful!');
      navigate('/');
    } else {
      navigate("./login");
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container customheader">
          <Link className="navbar-brand" to="/">
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
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-4 mb-2 mb-lg-0">
              <li className="nav-item"
              //  onClick={() => handleClick("home")}
                >
                <Link className={`nav-link ${isActive === "home" ? 'active' : ''}`}
                      onClick={(e) => handleClick(e, "home")} 
                      to="/"
                // id= {isActive === "home" ? "home" : ""}
                >
                  Home
                </Link>
              </li>
              
              <li className="nav-item" >
                <Link className={`nav-link ${isActive === "history" ? 'active' : ''}`} 
                   onClick={(e) => handleClick(e, "history")}
                to="/history" >
                  History
                </Link>
              </li>

              <li class="nav-item">
                <Link
                  className={`nav-link ${isActive === "about" ? 'active' : ''}`} 
                  onClick={(e) => handleClick(e, "about")}
                  to="/about"
                 
                >
                  {" "}
                  About Us
                </Link>
              </li>
              <li class="nav-item">
                <Link
                 className={`nav-link ${isActive === "help" ? 'active' : ''}`} 
                 onClick={(e) => handleClick(e, "help")}
                 to="/help"
                >
                  {" "}
                  Help us
                </Link>
              </li>
              <li class="nav-item" >
                <Link
                  className={`nav-link ${isActive === "services" ? 'active' : ''}`} 
                  onClick={(e) => handleClick(e, "services")}
                  to="/services"
                 
                >
                  Services
                </Link>
              </li>
              <li class="nav-item" onClick={() => handleClick("cities")}>
              <Link
                  className={`nav-link ${isActive === "cities" ? 'active' : ''}`} 
                  onClick={(e) => handleClick(e, "cities")}
                  
                >
                  Cities
                </Link>
              </li>
            </ul>
            <form className="d-flex sign-form">
              
            <button className="sign-in-btn" onClick={(e)=>{handleLogin(e)}}>
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
