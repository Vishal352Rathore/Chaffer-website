import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import image1 from "../cab_images/logo.png";
import "../CssStyle/Headers.css";
const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const token = localStorage.getItem("userToken");
  const [isActive, setIsActive] = useState("home");
  const [isNavOpen, setIsNavOpen] = useState(false); // State to manage navbar toggle
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [token]);
  const handleLogin = (e) => {
    e.preventDefault();
    if (isLogin) {
      localStorage.removeItem("userToken");
      setIsLogin(false);
      toast.success("Logout successful!");
      navigate("/");
    } else {
      navigate("/login");
    }
  };
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen); // Toggle the state of navbar open/close
  };
  const closeNav = () => {
    setIsNavOpen(false); // Close navbar when a link is clicked
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container customheader">
        <Link className="navbar-brand" to="/">
          <img src={image1} alt="not found" className="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav} // Toggle the navbar state on button click
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
          <ul className="navbar-nav me-4 mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive === "home" ? "active" : ""}`}
                to="/home"
                onClick={() => { setIsActive("home"); closeNav(); }}
              >
                Home
              </Link>
            </li>
            {isLogin && (
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive === "history" ? "active" : ""}`}
                  to="/history"
                  onClick={() => { setIsActive("history"); closeNav(); }}
                >
                  History
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive === "about" ? "active" : ""}`}
                to="/about"
                onClick={() => { setIsActive("about"); closeNav(); }}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive === "help" ? "active" : ""}`}
                to="/help"
                onClick={() => { setIsActive("help"); closeNav(); }}
              >
                Help Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive === "services" ? "active" : ""}`}
                to="/services"
                onClick={() => { setIsActive("services"); closeNav(); }}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive === "cities" ? "active" : ""}`}
                to="/cities"
                onClick={() => { setIsActive("cities"); closeNav(); }}
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









